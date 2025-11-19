let pendingCourseDrop = null;
let currentCurriculum = "CS"; 

window.onload = function() {
    renderSidebar();
    loadCourses();
};

// --- Change Curriculum ---
window.changeCurriculum = function() {
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

window.filterCourses = function() {
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
    
    // เดาหน่วยกิตเบื้องต้นจาก String (เช่น "3 (2-2-5)" -> 3)
    let defaultDuration = 3;
    if(data.credits) {
        const creditNum = parseInt(data.credits);
        if(!isNaN(creditNum)) defaultDuration = creditNum; 
        // *หมายเหตุ: ปกติหน่วยกิตบรรยาย 1 หน่วย = 1 ชม. แต่ปฏิบัติ 1 หน่วยอาจ = 2-3 ชม. 
        // ถ้าอยากให้แม่นยำต้องแยก logic แต่ใช้ 3 เป็นค่าเริ่มต้นไปก่อน
    }

    document.getElementById('confirm-duration').value = "3"; // default ไว้ที่ 3
    document.getElementById('confirm-color').value = "#dae8fc"; 
    
    openModal('confirm-modal');
}

// --- Validation Logic (New) ---
function checkTimeConflict(newCourse, currentCourses) {
    const newStart = newCourse.startTime;
    const newEnd = newCourse.startTime + newCourse.duration;

    for (let existing of currentCourses) {
        if (existing.day === newCourse.day) {
            const existStart = existing.startTime;
            const existEnd = existing.startTime + existing.duration;

            // ตรวจสอบการซ้อนทับ (Overlap)
            if (newStart < existEnd && newEnd > existStart) {
                return true; 
            }
        }
    }
    return false;
}

window.confirmAddCourse = function() {
    if(!pendingCourseDrop) return;
    
    const duration = parseInt(document.getElementById('confirm-duration').value);
    const color = document.getElementById('confirm-color').value;
    
    const newCourse = {
        id: Date.now().toString(),
        ...pendingCourseDrop,
        startTime: pendingCourseDrop.startHour,
        duration: duration,
        color: color
    };

    // 1. เช็คเวลาเกินตาราง (ตารางจบ 19:00 น.)
    if (newCourse.startTime + newCourse.duration > 19) {
        alert('❌ ไม่สามารถลงทะเบียนได้: เวลาเรียนเกินตาราง (เกิน 19:00 น.)');
        return;
    }

    // 2. เช็คเวลาซ้อนทับ
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
window.openAddCustomModal = function() {
    document.getElementById('custom-code').value = '';
    document.getElementById('custom-name').value = '';
    document.getElementById('custom-day').value = 'Monday';
    document.getElementById('custom-start').value = '8';
    document.getElementById('custom-duration').value = '1';
    document.getElementById('custom-color').value = '#d5e8d4';
    openModal('add-custom-modal');
}

window.confirmAddCustomCourse = function() {
    const code = document.getElementById('custom-code').value || 'N/A';
    const name = document.getElementById('custom-name').value || 'No Name';
    const day = document.getElementById('custom-day').value;
    const startHour = parseInt(document.getElementById('custom-start').value);
    const duration = parseInt(document.getElementById('custom-duration').value);
    const color = document.getElementById('custom-color').value;

    // ใช้วิธีสมมติว่า หน่วยกิต = duration สำหรับวิชาที่เพิ่มเอง (เพื่อให้มีเลขไปคำนวณ)
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

    // 1. เช็คเวลาเกินตาราง
    if (newCourse.startTime + newCourse.duration > 19) {
        alert('❌ ไม่สามารถลงทะเบียนได้: เวลาเรียนเกินตาราง (เกิน 19:00 น.)');
        return;
    }

    // 2. เช็คเวลาซ้อนทับ
    const courses = getCourses();
    if (checkTimeConflict(newCourse, courses)) {
        alert('❌ ไม่สามารถลงทะเบียนได้: เวลาเรียนซ้อนทับกับวิชาอื่น');
        return;
    }

    courses.push(newCourse);
    saveCourses(courses);
    closeModal('add-custom-modal');
}

window.clearAllCourses = function() {
    if(confirm('คุณแน่ใจหรือไม่ว่าต้องการลบรายวิชาทั้งหมด? (ไม่สามารถกู้คืนได้)')) {
        localStorage.removeItem('my_courses_compact');
        loadCourses();
    }
}

// --- Storage & Render ---
function getCourses() {
    const stored = localStorage.getItem('my_courses_compact');
    return stored ? JSON.parse(stored) : [];
}

function saveCourses(courses) {
    localStorage.setItem('my_courses_compact', JSON.stringify(courses));
    loadCourses();
}

window.deleteCourse = function(id, event) {
    event.stopPropagation(); 
    if(!confirm('ต้องการลบวิชานี้ใช่หรือไม่?')) return;
    let courses = getCourses();
    courses = courses.filter(c => c.id !== id);
    saveCourses(courses);
};

function loadCourses() {
    const courses = getCourses();
    renderTimetable(courses);
    updateTotalCredits(courses); // เรียกฟังก์ชันคำนวณหน่วยกิต
}

// --- Credit Calculation Helper ---
function updateTotalCredits(courses) {
    let total = 0;
    courses.forEach(c => {
        // ดึงตัวเลขตัวแรกจาก string เช่น "3 (2-2-5)" -> 3
        // ถ้าเป็น custom ที่เรา set ไว้ "2 (Custom)" -> 2
        const credit = parseInt(c.credits); 
        if (!isNaN(credit)) {
            total += credit;
        }
    });
    
    const creditBadge = document.getElementById('total-credits-badge');
    if(creditBadge) {
        creditBadge.textContent = `${total} หน่วยกิต`;
        // เปลี่ยนสีถ้าลงเยอะเกิน (เช่น > 22)
        if(total > 22) {
            creditBadge.style.backgroundColor = '#fecaca'; // สีแดงอ่อน
            creditBadge.style.color = '#b91c1c';
        } else {
            creditBadge.style.backgroundColor = '#e0f2fe'; // สีฟ้าปกติ
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

window.openModal = (id) => {
    const modal = document.getElementById(id);
    modal.classList.remove('hidden');
};
window.closeModal = (id) => document.getElementById(id).classList.add('hidden');