# Saytni jonli qilish — qadam-baqadam

Sayt tayyor: `index.html`, `listening.html`, `reading.html`, `writing.html`, `speaking.html`, `styles.css`, `data.js`.

## 1-qadam: GitHub akkaunt
Agar yo'q bo'lsa, https://github.com/join saytida bepul akkaunt oching.

## 2-qadam: Yangi repository yaratish
1. GitHub'da yuqori o'ngdagi **+** tugmasini bosing → **New repository**
2. Nomi: masalan `akbarali-ielts`
3. **Public** qilib qoldiring, "Add a README" belgisini o'chirib qo'ying
4. **Create repository** tugmasini bosing

## 3-qadam: Fayllarni yuklash
1. Ochilgan sahifada **"uploading an existing file"** havolasini bosing
2. Ushbu papkadagi barcha fayllarni (`index.html`, `styles.css`, `data.js` va h.k.) shu yerga tashlang (drag & drop)
3. Pastda **Commit changes** tugmasini bosing

## 4-qadam: GitHub Pages'ni yoqish
1. Repository ichida **Settings** → chap menyudan **Pages**
2. "Branch" qismida **main** ni tanlang, papka **/ (root)**, **Save**
3. Bir necha daqiqadan so'ng yuqorida sizga sayt manzili chiqadi:
   `https://<username>.github.io/akbarali-ielts/`

Tayyor — sayt jonli!

## Har kuni yangi material qo'shish
Bitta faylni tahrirlaysiz: **`data.js`**

Har bir bo'lim (`LISTENING`, `READING`, `WRITING`, `SPEAKING`) — bu ro'yxat. Yangi material qo'shish uchun ro'yxat boshiga shunga o'xshash blok qo'shing:

```js
{
  date: "2026-07-03",
  title: "Task 2 — Advantage/Disadvantage Essays",
  uz: "Ijobiy va salbiy tomonlarni yozish uchun tuzilma va namuna insho.",
  tags: ["Task 2", "Band 7+"],
  link: ""
},
```

- `link` maydoniga Telegram post havolasini yoki fayl linkini qo'yishingiz mumkin (bo'lmasa `""` qoldiring — "Tez orada" deb chiqadi).
- Faylni tahrirlab, GitHub'da **Commit changes** bossangiz, sayt 1-2 daqiqada avtomatik yangilanadi.
- Eng oson yo'l: GitHub repo ichida `data.js` faylini oching, qalam belgisini (Edit) bosing, blokni qo'shib, pastda **Commit changes** tugmasini bosing — kompyuterda hech narsa o'rnatish shart emas, telefondan ham qilsa bo'ladi.

## Google Sites bilan ham ishlaydi
Agar keyinchalik Google Sites'ga o'tkazmoqchi bo'lsangiz — Google Sites'da "Embed" (HTML ko'mish) bloki orqali shu saytning GitHub Pages havolasini iframe qilib joylashtirishingiz mumkin.
