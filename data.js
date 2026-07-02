/*
  MATERIALLAR RO'YXATI
  ---------------------
  Har kuni yangi material qo'shish uchun shu faylga yangi { } bloki qo'shing.
  4 ta ro'yxat bor: LISTENING, READING, WRITING, SPEAKING.

  Har bir material quyidagi maydonlarga ega:
  - date:  "2026-07-02"  (YYYY-MM-DD formatida)
  - title: material nomi (ingliz tilida, IELTS atamasi)
  - uz:    qisqacha izoh o'zbek tilida
  - tags:  ["Band 7+", "Task 2"] kabi teglar ro'yxati
  - link:  agar Telegram post yoki fayl havolasi bo'lsa shu yerga yozing, bo'lmasa "" qoldiring
*/

const LISTENING = [
  {
    date: "2026-06-28",
    title: "Section 3 — University Course Enrolment",
    uz: "Talaba va o'qituvchi o'rtasidagi suhbat: kurs tanlash, forma to'ldirish lug'ati.",
    tags: ["Section 3", "Dialogue"],
    link: ""
  },
  {
    date: "2026-06-25",
    title: "Section 1 — Hotel Booking Call",
    uz: "Mehmonxona band qilish suhbati: raqamlar, sanalar va ismlarni eshitib yozish mashqi.",
    tags: ["Section 1", "Raqamlar"],
    link: ""
  }
];

const READING = [
  {
    date: "2026-07-02",
    title: "Passage 1 — The Importance of Business Cards",
    uz: "Biznes vizit kartochkalari haqida matn. True/False/Not Given va Note Completion — javob berib, natijangizni darhol ko'ring.",
    tags: ["True/False/NG", "Note Completion", "Avto-tekshiruv"],
    link: "reading-1-business-cards.html"
  },
  {
    date: "2026-06-29",
    title: "Crime & Punishment — Passage + Questions",
    uz: "Jinoyat va jazo mavzusidagi matn, Matching Headings va True/False/Not Given mashqlari.",
    tags: ["Academic", "Matching Headings"],
    link: ""
  },
  {
    date: "2026-06-24",
    title: "Food Systems — Passage + Questions",
    uz: "Oziq-ovqat sanoati haqida matn, Summary Completion va lug'at bo'limi bilan.",
    tags: ["Academic", "Summary Completion"],
    link: ""
  }
];

const WRITING = [
  {
    date: "2026-06-30",
    title: "Task 2 — Lesson 4: Opinion Essays",
    uz: "Fikr bildirish (opinion) insholarini yozish uchun tuzilma, lug'at banki va namuna insho.",
    tags: ["Task 2", "Band 7+"],
    link: ""
  },
  {
    date: "2026-06-20",
    title: "Task 1 — Bar Chart Description",
    uz: "Diagrammani tasvirlash uchun overview yozish, taqqoslash lug'ati va namuna javob.",
    tags: ["Task 1", "Bar Chart"],
    link: ""
  }
];

const SPEAKING = [
  {
    date: "2026-06-27",
    title: "Part 2 — Describe a Place with Trees",
    uz: "Cue card javobi uchun tuzilma, ilg'or so'z birikmalari (idioms) va namuna javob.",
    tags: ["Part 2", "Idioms"],
    link: ""
  },
  {
    date: "2026-06-22",
    title: "Part 1 & 3 — Art Topic Vocabulary",
    uz: "San'at mavzusida ko'p uchraydigan savollar va band 8+ darajali lug'at ro'yxati.",
    tags: ["Part 1", "Part 3"],
    link: ""
  }
];

function fmtDate(iso){
  const d = new Date(iso + "T00:00:00");
  const months = ["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function renderMaterials(list, mountId){
  const mount = document.getElementById(mountId);
  if(!mount) return;
  if(!list.length){
    mount.innerHTML = `<div class="empty-state">Hozircha material yo'q — tez orada qo'shiladi.</div>`;
    return;
  }
  const sorted = [...list].sort((a,b) => b.date.localeCompare(a.date));
  mount.innerHTML = sorted.map(item => `
    <div class="mat-card">
      <p class="date">${fmtDate(item.date)}</p>
      <h4>${item.title}</h4>
      <p class="uz">${item.uz}</p>
      <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      ${item.link ? `<a class="open" href="${item.link}" target="_blank" rel="noopener">Ko'rish →</a>` : `<span class="open" style="opacity:.4;border-color:transparent;">Tez orada</span>`}
    </div>
  `).join("");
}
