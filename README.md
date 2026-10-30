# HealthSync Thailand — Group Project 1 (GP1)
> **National Health Information Exchange & Patient Portal (Startup Landing Page)**  
> พัฒนาขึ้นเพื่อส่งมอบในรายวิชาโครงงานกลุ่ม | กำหนดส่ง: วันอาทิตย์ที่ 1 พฤศจิกายน 2026

---

## 📌 ข้อมูลและที่มาของโครงการ (Project Overview)

**HealthSync Thailand** คือคอนเซปต์สตาร์ทอัปสาย **HealthTech** ที่พัฒนาระบบแลกเปลี่ยนข้อมูลสุขภาพระดับประเทศ (National Health Information Exchange & Unified Clinical OS) โดยถอดโมเดลความสำเร็จระดับสากลแบบ *Epic Systems + MyChart* มาประยุกต์ใช้กับบริบทของระบบสาธารณสุขไทย

ระบบถูกออกแบบมาเพื่อแก้ไขปัญหา **Data Silos** และความล่าช้าในการส่งตัวผู้ป่วย โดยแบ่งการให้บริการออกเป็น 3 แกนหลัก:
1. **Data Interoperability (Hospital Enterprise):** เชื่อมต่อประวัติการรักษา ยา แพ้ยา และผลตรวจแล็บข้ามโรงพยาบาลด้วยมาตรฐานสากล **HL7 FHIR Release 4** โดยทำงานร่วมกับระบบ HIS เดิมของโรงพยาบาล (เช่น HOSxP, HOMC, SAP) ได้โดยไม่ต้องรื้อระบบ
2. **HealthSync Clinic Lite (Affordable SaaS EMR):** เจาะกลุ่มคลินิกขนาดเล็กและแพทย์เวชปฏิบัติทั่วไป ให้สามารถใช้งานระบบบันทึกเวชระเบียนคลาวด์มาตรฐานสากล ออกใบสั่งยา จัดการคิว และส่งประวัติต่อไปยังโรงพยาบาลศูนย์ได้ในราคาที่เข้าถึงได้จริง (เริ่มต้นหลักร้อยบาทต่อเดือน)
3. **Personal Health Portal (Patient-Centric):** เว็บแอปพลิเคชันสำหรับประชาชนในการตรวจสอบผลตรวจแล็บ กราฟสุขภาพ นัดหมายแพทย์ และจัดการความยินยอมในการเปิดเผยข้อมูลส่วนบุคคล (Digital Consent) ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)

---

## 🤖 คำประกาศเรื่องการใช้งาน AI (AI Transparency Declaration)

> **⚠️ การสร้างสรรค์ด้วย AI 100% (100% AI-Generated Project)**  
> โครงการนี้ได้รับอนุญาตให้ใช้ปัญญาประดิษฐ์ (AI) ในการพัฒนาได้อย่างเต็มที่ ทางกลุ่มขอระบุอย่างชัดเจนและโปร่งใสว่า:
>
> - **สถาปัตยกรรมและการวางโค้ด (Code Architecture):** โค้ดทั้งหมดของโปรเจกต์ ไม่ว่าจะเป็นไฟล์ `index.html`, `about.html`, `assets/css/style.css`, และ `assets/js/main.js` ถูกสร้างขึ้นโดย **AI (Full-Stack Agent / Project Manager)** แบบ **100%**
> - **การออกแบบและการคิดค้นคอนเซปต์ (Concept & Copywriting):** การวิเคราะห์โจทย์ธุรกิจ Startup, โมเดลราคา (Pricing Matrix), และเนื้อหาทางการแพทย์ทั้งหมด ถูกวิเคราะห์ สรุป และเจเนอเรตผ่าน AI
> - **บทบาทของสมาชิกในทีม (Human Team Role):** สมาชิกในทีมทำหน้าที่เป็น **Prompt Engineers, System Integrators, Quality Assurance (QA), และ Deployment Coordinators** ในการควบคุมขอบเขตความต้องการ ทดสอบ Cross-device Responsive และนำขึ้นเผยแพร่ผ่าน GitHub Pages

---

## 🛠️ ข้อกำหนดทางเทคนิค (Tech Stack)

โปรเจกต์ถูกจำกัดให้ใช้เฉพาะเทคโนโลยีพื้นฐานตามข้อบังคับโดยเคร่งครัด:
- **HTML5:** Semantic markup รองรับ Accessibility และ SEO
- **CSS3 & Bootstrap 5 (v5.3.3 CDN):** ออกแบบ Responsive Grid System และ Layout
- **Bootstrap Icons (v1.11.3 CDN):** ไอคอนสัญลักษณ์สำหรับจุดเด่นและโซเชียลมีเดีย
- **Vanilla JavaScript (ES6+):** ควบคุม Smooth Scrolling, Scrollspy, และ Mobile Navigation Toggle
- **Hosting & Deployment:** GitHub Pages

---

## 📋 การตอบโจทย์เกณฑ์การให้คะแนน (Rubric Compliance)

| เกณฑ์การประเมิน (หัวข้อ) | รายละเอียดและการตอบโจทย์ในโปรเจกต์ | ตำแหน่งไฟล์ / Section |
| :--- | :--- | :--- |
| **1. NavBar & Anchors** | แถบนำทางด้านบนแบบ Sticky มีปุ่ม Anchor Jump ไปยังจุดต่าง ๆ (`#header`, `#features`, `#pricing`, `#social`) และปุ่มนำทางไปยังหน้าทีมงาน | `index.html` และ `about.html` |
| **2. Header / Hero Section (20 คะแนน)** | นำเสนอชื่อสินค้า สโลแกน ปุ่มดาวน์โหลด/ทดลองใช้ และรูป Mockup จำลองระบบ โดยบน **Desktop แบ่งเป็น 2 Rows** และบน **Tablet/Mobile รวมเป็น 1 Row** | `index.html#header` |
| **3. Features Section (20 คะแนน)** | อธิบายคุณสมบัติเด่น 3 ด้าน แสดงผล **แนวนอน 3 คอลัมน์บนจอใหญ่ (Desktop)** และยุบเป็น **แนวตั้ง 1 แถวเต็มพื้นที่บน Tablet และ Mobile** | `index.html#features` |
| **4. Additional Section: Price List (20 คะแนน)** | เลือกจัดทำ **ตารางราคา (Price List)** 3 ระดับ (Clinic Solo, Clinic Multi, Hospital Enterprise) เปรียบเทียบฟังก์ชันและความคุ้มค่าชัดเจน | `index.html#pricing` |
| **5. Social Link Section (10 คะแนน)** | ช่องทางติดตามบนสื่อสังคมออนไลน์ (Facebook, X, LinkedIn, GitHub) พร้อมระบุลิงก์เชื่อมโยงไปยัง **สถาบันการจัดการปัญญาภิวัฒน์ (PIM)** | `index.html#social` |
| **6. Page: About Members (20 คะแนน)** | หน้าแยกอธิบายประวัติบริษัท และแสดงการ์ดสมาชิก 6 คน พร้อมรูป ชื่อ นามสกุล ตำแหน่ง และ **ลิงก์ไปยัง GitHub Page Resume ของแต่ละคน** จัด Grid แบบ **Desktop 3 คอลัมน์ / Tablet 2 คอลัมน์ / Mobile 1 คอลัมน์** | `about.html` |
| **7. การส่งงานและ GitHub Pages (10 คะแนน)** | เผยแพร่ผ่าน GitHub Pages พร้อมบันทึกส่งข้อมูลลงบน Google Sheet | Google Sheet ส่งงาน |

---

## 👥 รายชื่อสมาชิกและบทบาทในทีม (Team Members)

| ลำดับ | ชื่อ - นามสกุล | ตำแหน่งในโปรเจกต์ | หน้าที่ความรับผิดชอบ | GitHub Resume |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **พรเทพ กำไมล์** | Project Manager & AI Prompt Lead | กำกับทิศทางโปรเจกต์, ออกแบบ System Architecture, คุม AI Prompting | [คลิกเพื่อดู Resume](https://github.com) |
| 2 | **กิตติศักดิ์ พัฒนศิลป์** | Frontend Coordinator (Header & Nav) | ดูแลความถูกต้องของ Navbar, Anchor Link และ Header 2-Row Layout | [คลิกเพื่อดู Resume](https://github.com) |
| 3 | **ชัญญา ศรีสุข** | Frontend Coordinator (Features & Price) | ตรวจสอบการจัด Grid 3 Column ของฟีเจอร์ และ Pricing Cards | [คลิกเพื่อดู Resume](https://github.com) |
| 4 | **ธนพล วงศ์สวัสดิ์** | Frontend Coordinator (About Team Page) | จัดการ Layout หน้าทีมงาน ควบคุมเงื่อนไข Responsive 3/2/1 คอลัมน์ | [คลิกเพื่อดู Resume](https://github.com) |
| 5 | **นภัสสร รัตนโชติ** | Assets, SEO & Copywriting Specialist | ควบคุมและจัดหาภาพกราฟิก, เชื่อมต่อลิงก์ภายนอก และลิงก์สถาบัน PIM | [คลิกเพื่อดู Resume](https://github.com) |
| 6 | **วรเมธ เกียรติอนันต์** | Quality Assurance (QA) & Cross-Browser | ทดสอบการแสดงผลบนสมาร์ตโฟน แท็บเล็ต เดสก์ท็อป และตรวจเช็ก Dead Link | [คลิกเพื่อดู Resume](https://github.com) |

---

## 📂 โครงสร้างไดเรกทอรี (Project Structure)

```text
├── index.html              # หน้าหลัก (Landing Page)
├── about.html              # หน้าข้อมูลทีมงาน (About & Team Members)
├── README.md               # เอกสารอธิบายโครงการและรายละเอียดระบบ
└── assets/
    ├── css/
    │   └── style.css       # Custom Styling เพิ่มเติม
    └── js/
        └── main.js         # JavaScript Logic สำหรับ Interaction & Smooth Scrolling