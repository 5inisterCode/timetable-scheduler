const allCurricula = {
    "CS": [
        {
            category: "1. หมวดวิชาศึกษาทั่วไป (General Education)",
            groups: [
                {
                    name: "1.1 กลุ่มวิชาภาษา (Language)",
                    courses: [
                        { code: "001213-2", nameEn: "English Writing for Effective Communication", nameTh: "การเขียนภาษาอังกฤษเพื่อการสื่อสารอย่างมีประสิทธิภาพ", credits: "3 (2-2-5)" },
                        { code: "001211-2", nameEn: "English Listening and Speaking for Communication", nameTh: "การฟังและการพูดภาษาอังกฤษเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001212-2", nameEn: "English Critical Reading for Effective Communication", nameTh: "การอ่านภาษาอังกฤษเชิงวิเคราะห์เพื่อการสื่อสารอย่างมีประสิทธิภาพ", credits: "3 (2-2-5)" },
                        { code: "001302-1", nameEn: "Thai Language for Communication in the 21st Century", nameTh: "ภาษาไทยเพื่อการสื่อสารในศตวรรษที่ 21", credits: "3 (2-2-5)" },
                        { code: "001301-1", nameEn: "Thai Language for Academic Communication", nameTh: "ภาษาไทยเพื่อการสื่อสารเชิงวิชาการ", credits: "3 (2-2-5)" },
                        { code: "001312-1", nameEn: "Japanese for Communication", nameTh: "ภาษาญี่ปุ่นเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001313-1", nameEn: "Chinese for Communication", nameTh: "ภาษาจีนเพื่อการสื่อสาร", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "1.2 กลุ่มวิชามนุษยศาสตร์ (Humanities)",
                    courses: [
                        { code: "001226-1", nameEn: "Ways of Living in the Digital Age", nameTh: "วิถีชีวิตในยุคดิจิทัล", credits: "3 (2-2-5)" },
                        { code: "001242-2", nameEn: "Creative Thinking and Innovation", nameTh: "การคิดเชิงสร้างสรรค์และนวัตกรรม", credits: "3 (2-2-5)" },
                        { code: "001253-5", nameEn: "Entrepreneurship for Small Business Start-up", nameTh: "การเป็นผู้ประกอบการธุรกิจก่อตั้งใหม่ขนาดย่อม", credits: "3 (2-2-5)" },
                        { code: "001238-1", nameEn: "Media Literacy", nameTh: "การรู้เท่าทันสื่อ", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "1.3 กลุ่มวิชาสังคมศาสตร์ (Social Sciences)",
                    courses: [
                        { code: "001233-2", nameEn: "Thai State and the World Community", nameTh: "ไทยกับประชาคมโลก", credits: "3 (2-2-5)" },
                        { code: "001353-1", nameEn: "Principles of Accounting for Entrepreneur", nameTh: "การบัญชีเบื้องต้นสำหรับผู้ประกอบการ", credits: "3 (2-2-5)" },
                        { code: "001251-4", nameEn: "Group Dynamics and Teamwork", nameTh: "พลวัตกลุ่มและการทำงานเป็นทีม", credits: "3 (2-2-5)" },
                        { code: "001237-2", nameEn: "Life Skills", nameTh: "ทักษะชีวิต", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "1.4 กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์",
                    courses: [
                        { code: "001273-2", nameEn: "Mathematics and Statistics in Everyday Life", nameTh: "คณิตศาสตร์และสถิติในชีวิตประจำวัน", credits: "3 (2-2-5)" },
                        { code: "001279-2", nameEn: "Science in Everyday Life", nameTh: "วิทยาศาสตร์ในชีวิตประจำวัน", credits: "3 (2-2-5)" },
                        { code: "001272-1", nameEn: "Introduction to Computer Information Science", nameTh: "คอมพิวเตอร์สารสนเทศขั้นพื้นฐาน", credits: "3 (2-2-5)" }
                    ]
                }
            ]
        },
        {
            category: "2. หมวดวิชาเฉพาะ (Specific Subject Area)",
            groups: [
                {
                    name: "2.1 พื้นฐานวิทย์-คณิต (Foundation)",
                    courses: [
                        { code: "252114-1", nameEn: "Calculus for Science", nameTh: "แคลคูลัสสำหรับวิทยาศาสตร์", credits: "3 (3-0-6)" },
                        { code: "252113-1", nameEn: "Mathematics for Science", nameTh: "คณิตศาสตร์สำหรับวิทยาศาสตร์", credits: "3 (3-0-6)" },
                        { code: "254276-2", nameEn: "Discrete Mathematics for Computer Science", nameTh: "คณิตศาสตร์เต็มหน่วยสำหรับวิทยาการคอมพิวเตอร์", credits: "3 (2-2-5)" },
                        { code: "255121-1", nameEn: "Statistical Analysis", nameTh: "สถิติวิเคราะห์", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "2.2.1 วิชาบังคับ (Core Courses)",
                    courses: [
                        { code: "254374-5", nameEn: "System Analysis and Design", nameTh: "การวิเคราะห์และออกแบบระบบ", credits: "3 (2-2-5)" },
                        { code: "254371-3", nameEn: "Internet Programming", nameTh: "การโปรแกรมบนอินเทอร์เน็ต", credits: "3 (2-2-5)" },
                        { code: "254361-4", nameEn: "Artificial Intelligence", nameTh: "ปัญญาประดิษฐ์", credits: "3 (2-2-5)" },
                        { code: "254383-2", nameEn: "Algorithm Design and Analysis", nameTh: "การออกแบบและวิเคราะห์อัลกอริทึม", credits: "3 (2-2-5)" },
                        { code: "254351-3", nameEn: "Software Engineering", nameTh: "วิศวกรรมซอฟต์แวร์", credits: "3 (2-2-5)" },
                        { code: "254251-5", nameEn: "Data Structures", nameTh: "โครงสร้างข้อมูล", credits: "3 (2-2-5)" },
                        { code: "254175-1", nameEn: "Object Oriented Programming", nameTh: "การเขียนโปรแกรมเชิงวัตถุ", credits: "3 (2-2-5)" },
                        { code: "254252-1", nameEn: "Database Systems", nameTh: "ระบบฐานข้อมูล", credits: "3 (2-2-5)" },
                        { code: "254262-1", nameEn: "Operating Systems", nameTh: "ระบบปฏิบัติการ", credits: "3 (2-2-5)" },
                        { code: "254171-1", nameEn: "Fundamentals of Programming", nameTh: "พื้นฐานทางการเขียนโปรแกรม", credits: "3 (2-2-5)" },
                        { code: "254363-3", nameEn: "Computer Network and Data Communication", nameTh: "เครือข่ายคอมพิวเตอร์และการสื่อสารข้อมูล", credits: "3 (2-2-5)" },
                        { code: "254261-5", nameEn: "Computer Architecture", nameTh: "สถาปัตยกรรมคอมพิวเตอร์", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "2.2.2 วิชาเลือก (Electives)",
                    courses: [
                        { code: "273382-3", nameEn: "Multimedia and Web Technology", nameTh: "เทคโนโลยีมัลติมีเดียและเว็บ", credits: "3 (2-2-5)" },
                        { code: "273381-2", nameEn: "Computer Graphics and Animation", nameTh: "คอมพิวเตอร์กราฟิกและแอนิเมชัน", credits: "3 (2-2-5)" },
                        { code: "254486-1", nameEn: "Data Science", nameTh: "วิทยาศาสตร์ข้อมูล", credits: "3 (2-2-5)" },
                        { code: "254384-5", nameEn: "Cloud Computing", nameTh: "การประมวลผลแบบกลุ่มเมฆ", credits: "3 (2-2-5)" },
                        { code: "254488-1", nameEn: "DevOps Engineering", nameTh: "วิศวกรรมการพัฒนาและการดำเนินการ", credits: "3 (2-2-5)" },
                        { code: "254462-1", nameEn: "Blockchain Technology", nameTh: "เทคโนโลยีบล็อกเชน", credits: "3 (2-2-5)" },
                        { code: "254274-3", nameEn: "Python Programming", nameTh: "การโปรแกรมภาษาไพทอน", credits: "3 (2-2-5)" },
                        { code: "273387-1", nameEn: "Mobile Application Development", nameTh: "การพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่", credits: "3 (2-2-5)" }
                    ]
                }
            ]
        }
    ],
    "IT": [
        {
            category: "1. หมวดวิชาศึกษาทั่วไป (General Education)",
            groups: [
                {
                    name: "1.1 กลุ่มวิชาภาษา (Language)",
                    courses: [
                        { code: "001212-2", nameEn: "English Critical Reading for Effective Communication", nameTh: "การอ่านภาษาอังกฤษเชิงวิเคราะห์เพื่อการสื่อสารอย่างมีประสิทธิภาพ", credits: "3 (2-2-5)" },
                        { code: "001211-2", nameEn: "English Listening and Speaking for Communication", nameTh: "การฟังและการพูดภาษาอังกฤษเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001213-2", nameEn: "English Writing for Effective Communication", nameTh: "การเขียนภาษาอังกฤษเพื่อการสื่อสารอย่างมีประสิทธิภาพ", credits: "3 (2-2-5)" },
                        { code: "001301-1", nameEn: "Thai Language for Academic Communication", nameTh: "ภาษาไทยเพื่อการสื่อสารเชิงวิชาการ", credits: "3 (2-2-5)" },
                        { code: "001302-1", nameEn: "Thai Language for Communication in the 21st Century", nameTh: "ภาษาไทยเพื่อการสื่อสารในศตวรรษที่ 21", credits: "3 (2-2-5)" },
                        { code: "001303-1", nameEn: "Reading in the Digital Age Century", nameTh: "การอ่านในยุคดิจิทัล", credits: "3 (2-2-5)" },
                        { code: "001320-1", nameEn: "Hindi for Communication", nameTh: "ภาษาฮินดีเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001311-1", nameEn: "Korean for Communication", nameTh: "ภาษาเกาหลีเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001316-1", nameEn: "Spanish for Communication", nameTh: "ภาษาสเปนเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001318-1", nameEn: "Indonesian for Communication", nameTh: "ภาษาอินโดนีเซียเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001314-1", nameEn: "Myanmar for Communication", nameTh: "ภาษาพม่าเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001315-1", nameEn: "French for Communication", nameTh: "ภาษาฝรั่งเศสเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001319-1", nameEn: "Vietnamese for Communication", nameTh: "ภาษาเวียดนามเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001321-1", nameEn: "Khmer for Communication", nameTh: "ภาษาเขมรเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001312-1", nameEn: "Japanese for Communication", nameTh: "ภาษาญี่ปุ่นเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001313-1", nameEn: "Chinese for Communication", nameTh: "ภาษาจีนเพื่อการสื่อสาร", credits: "3 (2-2-5)" },
                        { code: "001317-1", nameEn: "Lao for Communication", nameTh: "ภาษาลาวเพื่อการสื่อสาร", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "1.2 กลุ่มวิชามนุษยศาสตร์ (Humanities)",
                    courses: [
                        { code: "001241-2", nameEn: "Western Music in Daily Life", nameTh: "ดนตรีตะวันตกในชีวิตประจำวัน", credits: "3 (2-2-5)" },
                        { code: "001224-1", nameEn: "Arts in Daily Life", nameTh: "ศิลปะในชีวิตประจำวัน", credits: "3 (2-2-5)" },
                        { code: "001242-2", nameEn: "Creative Thinking and Innovation", nameTh: "การคิดเชิงสร้างสรรค์และนวัตกรรม", credits: "3 (2-2-5)" },
                        { code: "001228-1", nameEn: "Happiness with Hobbies", nameTh: "ความสุขกับงานอดิเรก", credits: "3 (2-2-5)" },
                        { code: "001226-1", nameEn: "Ways of Living in the Digital Age", nameTh: "วิถีชีวิตในยุคดิจิทัล", credits: "3 (2-2-5)" },
                        { code: "001227-2", nameEn: "Music Studies in Thai way of life", nameTh: "ดนตรีในวิถีชีวิตไทยศึกษา", credits: "3 (2-2-5)" },
                        { code: "001222-2", nameEn: "Language, Society and Culture", nameTh: "ภาษา สังคม และวัฒนธรรม", credits: "3 (2-2-5)" },
                        { code: "001221-2", nameEn: "Information Science for Study and Research", nameTh: "สารสนเทศศาสตร์เพื่อการศึกษาค้นคว้า", credits: "3 (2-2-5)" },
                        { code: "001227-1", nameEn: "Music Studies in Thai Culture", nameTh: "ดนตรีวิถีไทยศึกษา", credits: "3 (2-2-5)" },
                        { code: "001331-1", nameEn: "Social Innovation", nameTh: "นวัตกรรมเพื่อสังคม", credits: "3 (2-2-5)" },
                        { code: "001253-5", nameEn: "Entrepreneurship for Small Business Start-up", nameTh: "การเป็นผู้ประกอบการธุรกิจก่อตั้งใหม่ขนาดย่อม", credits: "3 (2-2-5)" },
                        { code: "001276-2", nameEn: "Energy and Technology Around Us", nameTh: "พลังงานและเทคโนโลยีใกล้ตัว", credits: "3 (2-2-5)" },
                        { code: "001332-1", nameEn: "Introduction to Data Management in Digital Era", nameTh: "การจัดการข้อมูลเบื้องต้นในยุคดิจิทัล", credits: "3 (2-2-5)" },
                        { code: "001253-4", nameEn: "Entrepreneurship", nameTh: "การเป็นผู้ประกอบการ", credits: "3 (2-2-5)" },
                        { code: "001238-1", nameEn: "Media Literacy", nameTh: "การรู้เท่าทันสื่อ", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "1.3 กลุ่มวิชาสังคมศาสตร์ (Social Sciences)",
                    courses: [
                        { code: "001353-1", nameEn: "Principles of Accounting for Entrepreneur", nameTh: "การบัญชีเบื้องต้นสำหรับผู้ประกอบการ", credits: "3 (2-2-5)" },
                        { code: "001351-1", nameEn: "From Sufficiency Economy Philosophy (SEP) to Practice", nameTh: "น้อมนำหลักปรัชญาของเศรษฐกิจพอเพียงสู่การปฏิบัติ", credits: "3 (2-2-5)" },
                        { code: "001254-4", nameEn: "The King's Philosophy for Living", nameTh: "ศาสตร์พระราชาเพื่อการดำรงชีวิต", credits: "3 (2-2-5)" },
                        { code: "001251-4", nameEn: "Group Dynamics and Teamwork", nameTh: "พลวัตกลุ่มและการทำงานเป็นทีม", credits: "3 (2-2-5)" },
                        { code: "001239-1", nameEn: "Leadership and Compassion", nameTh: "ภาวะผู้นำกับความรัก", credits: "3 (2-2-5)" },
                        { code: "001234-2", nameEn: "Civilization and Local Wisdom", nameTh: "อารยธรรมและภูมิปัญญาท้องถิ่น", credits: "3 (2-2-5)" },
                        { code: "001236-1", nameEn: "Living Management", nameTh: "การจัดการการดำเนินชีวิต", credits: "3 (2-2-5)" },
                        { code: "001232-2", nameEn: "Fundamental Laws for Quality of Life", nameTh: "กฎหมายพื้นฐานเพื่อคุณภาพชีวิต", credits: "3 (2-2-5)" },
                        { code: "001237-2", nameEn: "Life Skills", nameTh: "ทักษะชีวิต", credits: "3 (2-2-5)" },
                        { code: "001235-2", nameEn: "Politics, Economy and Society", nameTh: "การเมือง เศรษฐกิจ และสังคม", credits: "3 (2-2-5)" },
                        { code: "001352-1", nameEn: "Peace and Religion for Human Kinds", nameTh: "สันติภาพ ศาสนา เพื่อมนุษยชาติ", credits: "3 (2-2-5)" },
                        { code: "001233-2", nameEn: "Thai State and the World Community", nameTh: "ไทยกับประชาคมโลก", credits: "3 (2-2-5)" },
                        { code: "001252-4", nameEn: "Naresuan Studies", nameTh: "นเรศวรศึกษา", credits: "3 (2-2-5)" },
                        { code: "001231-2", nameEn: "Philosophy of Life for Sufficient Living", nameTh: "ปรัชญาชีวิตเพื่อวิถีพอเพียงในชีวิตประจำวัน", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "1.4 กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์",
                    courses: [
                        { code: "001274-2", nameEn: "Drugs and Chemicals in Daily Life", nameTh: "ยาและสารเคมีในชีวิตประจำวัน", credits: "3 (2-2-5)" },
                        { code: "001278-2", nameEn: "Life and Health", nameTh: "ชีวิตและสุขภาพ", credits: "3 (2-2-5)" },
                        { code: "001273-2", nameEn: "Mathematics and Statistics in Everyday Life", nameTh: "คณิตศาสตร์และสถิติในชีวิตประจำวัน", credits: "3 (2-2-5)" },
                        { code: "001279-2", nameEn: "Science in Everyday Life", nameTh: "วิทยาศาสตร์ในชีวิตประจำวัน", credits: "3 (2-2-5)" },
                        { code: "001272-1", nameEn: "Introduction to Computer Information Science", nameTh: "คอมพิวเตอร์สารสนเทศขั้นพื้นฐาน", credits: "3 (2-2-5)" },
                        { code: "001271-2", nameEn: "Man and Environment", nameTh: "มนุษย์กับสิ่งแวดล้อม", credits: "3 (2-2-5)" },
                        { code: "001292-1", nameEn: "Circular Economic Lifestyle for 21st Century", nameTh: "วิถีชีวิตตามแนวคิดเศรษฐกิจหมุนเวียนในศตวรรษที่ 21", credits: "3 (2-2-5)" },
                        { code: "001277-2", nameEn: "Human Behavior", nameTh: "พฤติกรรมมนุษย์", credits: "3 (2-2-5)" },
                        { code: "001275-2", nameEn: "Food and Life Style", nameTh: "อาหารและวิถีชีวิต", credits: "3 (2-2-5)" },
                        { code: "001291-1", nameEn: "Consumption in Daily-life", nameTh: "การบริโภคในชีวิตประจำวัน", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "1.5 กลุ่มวิชาพลานามัย (Physical Education)",
                    courses: [
                        { code: "001281-1", nameEn: "Sports and Exercises", nameTh: "กีฬาและการออกกำลังกาย", credits: "1 (0-2-1)" }
                    ]
                }
            ]
        },
        {
            category: "2. หมวดวิชาเฉพาะ (Specific Subject Area)",
            groups: [
                {
                    name: "2.1 วิชาแกน (Core Courses)",
                    courses: [
                        { code: "273276-1", nameEn: "Discrete Mathematics for Information Technology", nameTh: "คณิตศาสตร์เต็มหน่วยสำหรับเทคโนโลยีสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "252113-1", nameEn: "Mathematics for Science", nameTh: "คณิตศาสตร์สำหรับวิทยาศาสตร์", credits: "3 (3-0-6)" },
                        { code: "255121-1", nameEn: "Statistical Analysis", nameTh: "สถิติวิเคราะห์", credits: "3 (2-2-5)" },
                        { code: "273111-1", nameEn: "Fundamentals of Information Technology", nameTh: "พื้นฐานทางเทคโนโลยีสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273100-1", nameEn: "History and Development of Computer Technology", nameTh: "ประวัติและพัฒนาการของเทคโนโลยีคอมพิวเตอร์", credits: "1 (1-0-2)" },
                        { code: "251200-1", nameEn: "Innovator in Science and Technology", nameTh: "นวัตกรทางวิทยาศาสตร์และเทคโนโลยี", credits: "1 (0-2-1)" }
                    ]
                },
                {
                    name: "2.2 วิชาบังคับ (Required Courses)",
                    courses: [
                        { code: "273252-2", nameEn: "Information Technology Law", nameTh: "กฎหมายเทคโนโลยีสารสนเทศ", credits: "3 (3-0-6)" },
                        { code: "273363-1", nameEn: "Information Assurance and Security", nameTh: "ความมั่นคงและการประกันสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273352-2", nameEn: "Information System Project Management", nameTh: "การจัดการโครงการด้านระบบสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273411-1", nameEn: "Communicative English for Computer and Information Technology", nameTh: "ภาษาอังกฤษเพื่อการสื่อสารสำหรับเทคโนโลยีคอมพิวเตอร์และสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273253-3", nameEn: "Information Systems Management in Organizations", nameTh: "การจัดการระบบสารสนเทศในองค์กร", credits: "3 (2-2-5)" },
                        { code: "273497-2", nameEn: "Undergraduate Thesis", nameTh: "วิทยานิพนธ์ระดับปริญญาตรี", credits: "3 (0-9-0)" },
                        { code: "273282-1", nameEn: "Web Technology", nameTh: "เว็บเทคโนโลยี", credits: "3 (2-2-5)" },
                        { code: "273373-1", nameEn: "Object-Oriented Analysis and Design for Information Systems", nameTh: "การวิเคราะห์และออกแบบเชิงวัตถุสำหรับระบบสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273154-1", nameEn: "Digital Marketing", nameTh: "การตลาดดิจิทัล", credits: "3 (2-2-5)" },
                        { code: "273341-1", nameEn: "Data Analysis for Business Management", nameTh: "การวิเคราะห์ข้อมูลสำหรับการจัดการทางธุรกิจ", credits: "3 (2-2-5)" },
                        { code: "273391-1", nameEn: "Seminar", nameTh: "สัมมนา", credits: "1 (0-2-1)" },
                        { code: "273385-2", nameEn: "Human Computer Interaction", nameTh: "การปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์", credits: "3 (2-2-5)" },
                        { code: "273361-3", nameEn: "Network Management and Wireless Technology", nameTh: "การจัดการเครือข่ายและเทคโนโลยีไร้สาย", credits: "3 (2-2-5)" },
                        { code: "254171-1", nameEn: "Fundamentals of Programming", nameTh: "พื้นฐานทางการเขียนโปรแกรม", credits: "3 (2-2-5)" },
                        { code: "273251-2", nameEn: "Data Structures and Algorithms for Information Technology", nameTh: "โครงสร้างข้อมูลและขั้นตอนวิธีสำหรับเทคโนโลยีสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "254175-1", nameEn: "Object Oriented Programming", nameTh: "การเขียนโปรแกรมเชิงวัตถุ", credits: "3 (2-2-5)" },
                        { code: "273364-1", nameEn: "Platform Technology", nameTh: "เทคโนโลยีแพลตฟอร์ม", credits: "3 (2-2-5)" },
                        { code: "273255-3", nameEn: "Database Systems for Information Technology", nameTh: "ระบบฐานข้อมูลสำหรับเทคโนโลยีสารสนเทศ", credits: "3 (2-2-5)" }
                    ]
                },
                {
                    name: "2.2.2 วิชาเลือก (Electives)",
                    courses: [
                        { code: "254486-1", nameEn: "Data Science", nameTh: "วิทยาศาสตร์ข้อมูล", credits: "3 (2-2-5)" },
                        { code: "273383-2", nameEn: "Entrepreneurship in Computer Technology", nameTh: "การเป็นผู้ประกอบการด้านเทคโนโลยีคอมพิวเตอร์", credits: "3 (2-2-5)" },
                        { code: "273389-2", nameEn: "Game Design and Development", nameTh: "การออกแบบและการพัฒนาเกม", credits: "3 (2-2-5)" },
                        { code: "273481-3", nameEn: "Business Record and Logistics Management", nameTh: "การจัดการข้อมูลธุรกิจและระบบโลจิสติกส์", credits: "3 (2-2-5)" },
                        { code: "273483-1", nameEn: "Enterprise Resource Planning", nameTh: "การวางแผนทรัพยากรสำหรับองค์กร", credits: "3 (2-2-5)" },
                        { code: "254471-2", nameEn: "Modern Computer Languages", nameTh: "ภาษาคอมพิวเตอร์สมัยใหม่", credits: "3 (2-2-5)" },
                        { code: "273384-1", nameEn: "Knowledge Management", nameTh: "การจัดการความรู้", credits: "3 (2-2-5)" },
                        { code: "273386-1", nameEn: "Geographic Information Systems", nameTh: "ระบบสารสนเทศทางภูมิศาสตร์", credits: "3 (2-2-5)" },
                        { code: "254384-5", nameEn: "Cloud Computing", nameTh: "การประมวลผลแบบกลุ่มเมฆ", credits: "3 (2-2-5)" },
                        { code: "273353-3", nameEn: "Electronics Commerce", nameTh: "การพาณิชย์อิเล็กทรอนิกส์", credits: "3 (2-2-5)" },
                        { code: "254451-2", nameEn: "Software Engineering", nameTh: "วิศวกรรมซอฟต์แวร์", credits: "3 (2-2-5)" },
                        { code: "273371-2", nameEn: "Information Retrieval", nameTh: "การค้นคืนสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273453-3", nameEn: "Decision Support Systems", nameTh: "ระบบสนับสนุนการตัดสินใจ", credits: "3 (2-2-5)" },
                        { code: "254483-3", nameEn: "Sensing and Actuation for Internet of Things", nameTh: "การตรวจวัดสัญญาณและการดำเนินงานสำหรับอินเทอร์เน็ตของสรรพสิ่ง", credits: "3 (2-2-5)" },
                        { code: "254475-1", nameEn: "Program Auditing", nameTh: "การตรวจสอบโปรแกรม", credits: "3 (2-2-5)" },
                        { code: "254484-2", nameEn: "Functional Programming", nameTh: "การเขียนโปรแกรมเชิงฟังก์ชัน", credits: "3 (2-2-5)" },
                        { code: "273362-2", nameEn: "Multimedia Application Development", nameTh: "การพัฒนาโปรแกรมประยุกต์เชิงมัลติมีเดีย", credits: "3 (2-2-5)" },
                        { code: "273372-2", nameEn: "Server Side Web Programming", nameTh: "การเขียนโปรแกรมเว็บฝั่งเซิร์ฟเวอร์", credits: "3 (2-2-5)" },
                        { code: "273488-1", nameEn: "Digital Image Processing", nameTh: "การประมวลผลรูปภาพดิจิทัล", credits: "3 (2-2-5)" },
                        { code: "254274-3", nameEn: "Python Programming", nameTh: "การโปรแกรมภาษาไพทอน", credits: "3 (2-2-5)" },
                        { code: "273374-1", nameEn: "Java programming for information technology", nameTh: "การโปรแกรมภาษาจาวาสำหรับเทคโนโลยีสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273375-2", nameEn: "Fundamentals of Data Mining", nameTh: "พื้นฐานการทำเหมืองข้อมูล", credits: "3 (2-2-5)" },
                        { code: "273387-1", nameEn: "Mobile Application Development", nameTh: "การพัฒนาโปรแกรมประยุกต์บนอุปกรณ์เคลื่อนที่", credits: "3 (2-2-5)" },
                        { code: "273487-1", nameEn: "Special Topics in Information Technology", nameTh: "หัวข้อพิเศษทางเทคโนโลยีสารสนเทศ", credits: "3 (2-2-5)" },
                        { code: "273376-1", nameEn: "Programming with .Net Framework", nameTh: "การโปรแกรมด้วยดอตเน็ตเฟรมเวิร์ก", credits: "3 (2-2-5)" },
                        { code: "273381-2", nameEn: "Computer Graphics and Animation", nameTh: "คอมพิวเตอร์กราฟิกและแอนิเมชัน", credits: "3 (2-2-5)" },
                        { code: "258300-1", nameEn: "Scientific Communication", nameTh: "การสื่อสารทางวิทยาศาสตร์", credits: "3 (3-0-6)" },
                        { code: "251201-2", nameEn: "Science and Forensic Investigations", nameTh: "วิทยาศาสตร์กับการพิสูจน์หลักฐาน", credits: "3 (2-2-5)" },
                        { code: "273496-2", nameEn: "Co-operative Education", nameTh: "สหกิจศึกษา", credits: "6 (0-18-0)" },
                        { code: "273494-2", nameEn: "International Academic or Professional Training", nameTh: "การฝึกอบรมหรือฝึกงานในต่างประเทศ", credits: "6 (0-18-0)" }
                    ]
                }
            ]
        }
    ]
};