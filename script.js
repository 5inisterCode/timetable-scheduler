let pendingCourseDrop = null;
let currentCurriculum = "CS";
let currentPlan = 'A'; // สถานะ Plan ปัจจุบัน (Default = A)

window.onload = function () {
    renderSidebar();
    loadCourses();
};

// --- New: Plan Switching Logic ---
window.switchPlan = function (plan) {
    currentPlan = plan;

    // อัปเดตสีปุ่ม
    const btnA = document.getElementById('btn-plan-A');
    const btnB = document.getElementById('btn-plan-B');

    const activeClass = "px-4 py-1.5 rounded-md text-xs font-bold shadow bg-white text-blue-600 transition-all";
    const inactiveClass = "px-4 py-1.5 rounded-md text-xs font-bold text-gray-500 hover:bg-white/50 transition-all";

    if (plan === 'A') {
        btnA.className = activeClass;
        btnB.className = inactiveClass;
    } else {
        btnA.className = inactiveClass;
        btnB.className = activeClass;
    }

    // โหลดข้อมูลใหม่ตาม Plan ที่เลือก
    loadCourses();
}

// --- Change Curriculum ---
window.changeCurriculum = function () {
    const select = document.getElementById('curriculum-select');
    currentCurriculum = select.value;
    renderSidebar();
}

// --- Render Sidebar ---
function renderSidebar() {
    const menuContainer = document.getElementById('course-menu');
    if (!menuContainer) return;
    menuContainer.innerHTML = '';

    const selectedData = allCurricula[currentCurriculum];

    if (!selectedData) {
        menuContainer.innerHTML = '<p style="color:#ef4444; padding:20px; text-align:center;">ไม่พบข้อมูลรายวิชา</p>';
        return;
    }

    let delay = 0;

    selectedData.forEach(cat => {
        const catTitle = document.createElement('div');
        catTitle.className = 'category-title';
        catTitle.textContent = cat.category;
        menuContainer.appendChild(catTitle);

        cat.groups.forEach(group => {
            const groupTitle = document.createElement('div');
            groupTitle.className = 'group-title';
            groupTitle.textContent = group.name;
            menuContainer.appendChild(groupTitle);

            group.courses.forEach(course => {
                const card = document.createElement('div');
                card.className = 'draggable-course';
                card.draggable = true;

                card.style.animation = `fadeInUp 0.4s ease-out forwards ${delay}s`;
                card.style.opacity = '0';
                delay += 0.01;

                card.dataset.code = course.code;
                card.dataset.nameEn = course.nameEn;
                card.dataset.nameTh = course.nameTh;
                card.dataset.credits = course.credits;

                card.innerHTML = `
                    <span class="course-code-badge">${course.code}</span>
                    <div style="font-size:13px; font-weight:700; color:#1f2937; line-height:1.3; margin-bottom:2px;">
                        ${course.nameEn}
                    </div>
                    <div style="font-size:11px; color:#64748b; font-weight:400;">
                        ${course.nameTh}
                    </div>
                `;

                card.addEventListener('dragstart', handleDragStart);
                menuContainer.appendChild(card);
            });
        });
    });
}

window.filterCourses = function () {
    const text = document.getElementById('course-search').value.toLowerCase();
    const cards = document.querySelectorAll('.draggable-course');
    cards.forEach(card => {
        const code = card.dataset.code.toLowerCase();
        const nameEn = card.dataset.nameEn.toLowerCase();
        const nameTh = card.dataset.nameTh.toLowerCase();

        card.style.animation = 'none';
        card.style.opacity = '1';

        if (code.includes(text) || nameEn.includes(text) || nameTh.includes(text)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// --- Drag & Drop ---
function handleDragStart(e) {
    const data = {
        code: e.target.dataset.code,
        nameEn: e.target.dataset.nameEn,
        nameTh: e.target.dataset.nameTh,
        credits: e.target.dataset.credits
    };
    e.dataTransfer.setData('text/plain', JSON.stringify(data));
    e.dataTransfer.effectAllowed = 'copy';
}

function handleDragOver(e) {
    e.preventDefault();
    const cell = e.target.closest('td');
    if (cell && cell.classList.contains('drop-zone')) {
        cell.classList.add('drag-over');
        e.dataTransfer.dropEffect = 'copy';
    }
}

function handleDragLeave(e) {
    const cell = e.target.closest('td');
    if (cell) cell.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    const cell = e.target.closest('td');
    if (cell) cell.classList.remove('drag-over');

    if (!cell || !cell.classList.contains('drop-zone')) return;

    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    const day = cell.dataset.day;
    const startHour = parseInt(cell.dataset.hour);

    pendingCourseDrop = { ...data, day, startHour };

    document.getElementById('confirm-msg').innerHTML = `
        <div style="font-weight:800; color:#3b82f6; font-size:18px; margin-bottom:6px;">${data.code}</div>
        <div style="font-size:15px; font-weight:700; color:#1f2937; margin-bottom:2px;">${data.nameEn}</div>
        <div style="font-size:12px; color:#9ca3af; margin-bottom:10px;">${data.nameTh}</div>
        
        <div style="font-size:12px; color:#6b7280; background:#f1f5f9; padding:6px 12px; border-radius:6px; display:inline-block;">
            เริ่ม: ${cell.dataset.dayLabel} เวลา ${startHour}:00
        </div>
    `;

    let defaultDuration = 3;
    if (data.credits) {
        const creditNum = parseInt(data.credits);
        if (!isNaN(creditNum)) defaultDuration = creditNum;
    }

    document.getElementById('confirm-duration').value = "3";
    document.getElementById('confirm-color').value = "#dae8fc";

    openModal('confirm-modal');
}

// --- Validation Logic ---
function checkTimeConflict(newCourse, currentCourses) {
    const newStart = newCourse.startTime;
    const newEnd = newCourse.startTime + newCourse.duration;

    for (let existing of currentCourses) {
        if (existing.day === newCourse.day) {
            const existStart = existing.startTime;
            const existEnd = existing.startTime + existing.duration;

            if (newStart < existEnd && newEnd > existStart) {
                return true;
            }
        }
    }
    return false;
}

window.confirmAddCourse = function () {
    if (!pendingCourseDrop) return;

    const duration = parseInt(document.getElementById('confirm-duration').value);
    const color = document.getElementById('confirm-color').value;

    const newCourse = {
        id: Date.now().toString(),
        ...pendingCourseDrop,
        startTime: pendingCourseDrop.startHour,
        duration: duration,
        color: color
    };

    if (newCourse.startTime + newCourse.duration > 19) {
        alert('❌ ไม่สามารถลงทะเบียนได้: เวลาเรียนเกินตาราง (เกิน 19:00 น.)');
        return;
    }

    const courses = getCourses();
    if (checkTimeConflict(newCourse, courses)) {
        alert('❌ ไม่สามารถลงทะเบียนได้: เวลาเรียนซ้อนทับกับวิชาอื่น');
        return;
    }

    courses.push(newCourse);
    saveCourses(courses);

    closeModal('confirm-modal');
    pendingCourseDrop = null;
}

// --- Custom Course Logic ---
window.openAddCustomModal = function () {
    document.getElementById('custom-code').value = '';
    document.getElementById('custom-name').value = '';
    document.getElementById('custom-day').value = 'Monday';
    document.getElementById('custom-start').value = '8';
    document.getElementById('custom-duration').value = '1';
    document.getElementById('custom-color').value = '#d5e8d4';
    openModal('add-custom-modal');
}

window.confirmAddCustomCourse = function () {
    const code = document.getElementById('custom-code').value || 'N/A';
    const name = document.getElementById('custom-name').value || 'No Name';
    const day = document.getElementById('custom-day').value;
    const startHour = parseInt(document.getElementById('custom-start').value);
    const duration = parseInt(document.getElementById('custom-duration').value);
    const color = document.getElementById('custom-color').value;

    const creditsStr = `${duration} (Custom)`;

    const newCourse = {
        id: Date.now().toString(),
        code: code,
        nameEn: name,
        nameTh: '',
        credits: creditsStr,
        day: day,
        startTime: startHour,
        duration: duration,
        color: color
    };

    if (newCourse.startTime + newCourse.duration > 19) {
        alert('❌ ไม่สามารถลงทะเบียนได้: เวลาเรียนเกินตาราง (เกิน 19:00 น.)');
        return;
    }

    const courses = getCourses();
    if (checkTimeConflict(newCourse, courses)) {
        alert('❌ ไม่สามารถลงทะเบียนได้: เวลาเรียนซ้อนทับกับวิชาอื่น');
        return;
    }

    courses.push(newCourse);
    saveCourses(courses);
    closeModal('add-custom-modal');
}

// --- UPDATED: Storage & Render (Support Multiple Plans) ---
function getCourses() {
    // Plan A ใช้ Key เดิม เพื่อให้ข้อมูลเก่าไม่หาย
    // Plan B ใช้ Key ใหม่
    const key = currentPlan === 'A' ? 'my_courses_compact' : 'my_courses_plan_b';
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
}

function saveCourses(courses) {
    const key = currentPlan === 'A' ? 'my_courses_compact' : 'my_courses_plan_b';
    localStorage.setItem(key, JSON.stringify(courses));

    // โหลดใหม่ทั้งหมด รวมถึงตารางสอบด้วย
    loadCourses();
}

window.clearAllCourses = function () {
    const planName = currentPlan === 'A' ? 'Plan A' : 'Plan B';
    if (confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบรายวิชาทั้งหมดของ ${planName}?`)) {
        const key = currentPlan === 'A' ? 'my_courses_compact' : 'my_courses_plan_b';
        localStorage.removeItem(key);
        loadCourses();
    }
}

window.deleteCourse = function (id, event) {
    event.stopPropagation();
    if (!confirm('ต้องการลบวิชานี้ใช่หรือไม่?')) return;
    let courses = getCourses();
    courses = courses.filter(c => c.id !== id);
    saveCourses(courses);
};

function loadCourses() {
    const courses = getCourses();
    renderTimetable(courses);
    renderExamSchedule(courses); // เพิ่มการเรียกฟังก์ชันสร้างตารางสอบ
    updateTotalCredits(courses);
}

// -----------------------------------------------------------------
// NEW: Exam Schedule Logic
// -----------------------------------------------------------------
function renderExamSchedule(courses) {
    const section = document.getElementById('exam-schedule-section');
    const tbody = document.getElementById('exam-table-body');

    if (!courses || courses.length === 0) {
        section.classList.add('hidden');
        return;
    }

    section.classList.remove('hidden');
    tbody.innerHTML = '';

    // เรียงตามรหัสวิชา
    const sortedCourses = [...courses].sort((a, b) => a.code.localeCompare(b.code));

    sortedCourses.forEach(course => {
        const tr = document.createElement('tr');
        tr.className = "bg-white border-b hover:bg-gray-50 transition-colors";

        const midVal = course.midExam || '';
        const finalVal = course.finalExam || '';

        tr.innerHTML = `
            <td class="px-4 py-3 font-bold text-gray-800">${course.code}</td>
            <td class="px-4 py-3">
                <div class="text-gray-800 font-medium">${course.nameEn}</div>
                <div class="text-xs text-gray-400">${course.nameTh || ''}</div>
            </td>
            <td class="px-4 py-3 bg-orange-50/30">
                <input type="text" 
                    value="${midVal}" 
                    placeholder="วว/ดด/ปป เวลา..."
                    class="w-full bg-white border border-orange-200 text-gray-700 text-sm rounded px-2 py-1 focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none placeholder-gray-300"
                    onchange="updateExamData('${course.id}', 'midExam', this.value)"
                >
            </td>
            <td class="px-4 py-3 bg-blue-50/30">
                <input type="text" 
                    value="${finalVal}" 
                    placeholder="วว/ดด/ปป เวลา..."
                    class="w-full bg-white border border-blue-200 text-gray-700 text-sm rounded px-2 py-1 focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none placeholder-gray-300"
                    onchange="updateExamData('${course.id}', 'finalExam', this.value)"
                >
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// ฟังก์ชันสำหรับอัปเดตข้อมูลสอบลง Storage เมื่อพิมพ์เสร็จ
window.updateExamData = function (id, field, value) {
    let courses = getCourses();
    const courseIndex = courses.findIndex(c => c.id === id);

    if (courseIndex !== -1) {
        courses[courseIndex][field] = value;
        // บันทึกเงียบๆ โดยไม่ต้อง re-render ทั้งหมดเดี๋ยว Input หลุด Focus
        const key = currentPlan === 'A' ? 'my_courses_compact' : 'my_courses_plan_b';
        localStorage.setItem(key, JSON.stringify(courses));
    }
}

// --- Credit Calculation Helper ---
function updateTotalCredits(courses) {
    let total = 0;
    courses.forEach(c => {
        const credit = parseInt(c.credits);
        if (!isNaN(credit)) {
            total += credit;
        }
    });

    const creditBadge = document.getElementById('total-credits-badge');
    if (creditBadge) {
        creditBadge.textContent = `${total} หน่วยกิต (${currentPlan})`; // โชว์ Plan ด้วย
        if (total > 22) {
            creditBadge.style.backgroundColor = '#fecaca';
            creditBadge.style.color = '#b91c1c';
        } else {
            creditBadge.style.backgroundColor = '#e0f2fe';
            creditBadge.style.color = '#0284c7';
        }
    }
}

function renderTimetable(courses) {
    const tbody = document.getElementById('timetable-body');
    if (!tbody) return;
    tbody.innerHTML = '';

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const dayLabels = { 'Monday': 'จันทร์', 'Tuesday': 'อังคาร', 'Wednesday': 'พุธ', 'Thursday': 'พฤหัสบดี', 'Friday': 'ศุกร์' };
    const timeSlots = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    days.forEach(day => {
        const tr = document.createElement('tr');

        const dayTd = document.createElement('td');
        dayTd.className = 'day-col';
        dayTd.textContent = dayLabels[day];
        tr.appendChild(dayTd);

        let skipSlots = 0;

        timeSlots.forEach(hour => {
            if (skipSlots > 0) {
                skipSlots--;
                return;
            }

            const course = courses.find(c => c.day === day && c.startTime === hour);

            if (course) {
                const td = document.createElement('td');
                td.colSpan = course.duration;
                td.className = 'class-slot';
                td.style.backgroundColor = course.color || '#dae8fc';

                td.innerHTML = `
                    <div class="slot-content">
                        <div class="slot-code">${course.code}</div>
                        <div class="slot-name">${course.nameEn}</div>
                        <button class="delete-btn" onclick="deleteCourse('${course.id}', event)">×</button>
                    </div>
                `;
                tr.appendChild(td);
                skipSlots = course.duration - 1;
            } else {
                const td = document.createElement('td');
                td.className = 'drop-zone';
                td.dataset.day = day;
                td.dataset.dayLabel = dayLabels[day];
                td.dataset.hour = hour;

                td.addEventListener('dragover', handleDragOver);
                td.addEventListener('dragleave', handleDragLeave);
                td.addEventListener('drop', handleDrop);

                tr.appendChild(td);
            }
        });
        tbody.appendChild(tr);
    });
}

// --- Modal Helper ---
window.openModal = (id) => {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');

    // Auto focus if searching
    if (id === 'search-modal') {
        setTimeout(() => document.getElementById('reg-search-query').focus(), 100);
    }
};
window.closeModal = (id) => document.getElementById(id).classList.add('hidden');

// --- Search Logic ---
window.openSearchModal = function () {
    openModal('search-modal');
}

window.handleSearchEnter = function (e) {
    if (e.key === 'Enter') {
        performRegSearch();
    }
}

window.performRegSearch = function () {
    const query = document.getElementById('reg-search-query').value.trim();
    const year = document.getElementById('reg-search-year').value;
    const sem = document.getElementById('reg-search-sem').value;

    if (!query) {
        alert('กรุณากรอกรหัสวิชา หรือ ชื่อวิชาที่ต้องการค้นหา');
        return;
    }

    const baseUrl = "https://reg8.nu.ac.th/registrar/class_info_1.asp";
    const params = new URLSearchParams({
        coursestatus: "O00",
        facultyid: "all",
        maxrow: "50",
        acadyear: year,
        semester: sem
    });

    if (/^\d+$/.test(query)) {
        params.append("coursecode", query);
    } else {
        params.append("coursename", query);
    }

    const finalUrl = `${baseUrl}?${params.toString()}`;
    window.open(finalUrl, '_blank');

    closeModal('search-modal');
}

// --- Download Image Logic ---
window.downloadScheduleImage = function () {
    // 1. เลือกพื้นที่ที่จะถ่ายรูป (ตอนนี้เอาทั้ง main area เพื่อให้ติด Exam Schedule ด้วย)
    const captureElement = document.getElementById('capture-area');
    if (!captureElement) {
        alert('ไม่พบพื้นที่ตารางเรียน');
        return;
    }

    // 2. ซ่อนปุ่มลบ (x) ชั่วคราว
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => btn.style.display = 'none');

    // 3. ปรับสไตล์ชั่วคราวเพื่อให้ภาพสวย (เอา scrollbar ออกตอนถ่าย)
    const originalOverflow = captureElement.style.overflow;
    captureElement.style.overflow = 'visible'; // ขยายความสูงเต็มเนื้อหา

    html2canvas(captureElement, {
        scale: 2,
        backgroundColor: '#ffffff',
        // useCORS: true, // เผื่อมีรูปข้ามโดเมน
        onclone: (clonedDoc) => {
            const clonedMain = clonedDoc.getElementById('capture-area');
            if (clonedMain) {
                clonedMain.style.height = 'auto'; // บังคับให้สูงเท่าเนื้อหา
                clonedMain.style.padding = '20px';

                // แก้ Header ลอย
                const headers = clonedMain.querySelectorAll('th');
                headers.forEach(th => th.style.position = 'static');
            }
        }
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `my-schedule-nu-${currentPlan}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        // คืนค่าเดิม
        deleteBtns.forEach(btn => btn.style.display = '');
        captureElement.style.overflow = originalOverflow;
    }).catch(err => {
        console.error("Capture Failed:", err);
        alert("เกิดข้อผิดพลาดในการบันทึกรูป");
        deleteBtns.forEach(btn => btn.style.display = '');
        captureElement.style.overflow = originalOverflow;
    });
}