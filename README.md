# Company Profile Felicity

Website company profile modern untuk perusahaan teknologi, dibangun dengan Next.js 14, React, dan Tailwind CSS.

## 🚀 Features

- **Modern Design**: Desain clean dan profesional dengan animasi smooth
- **Responsive**: Fully responsive untuk semua device
- **SEO Optimized**: Metadata dan struktur yang SEO-friendly
- **Fast Performance**: Optimized dengan Next.js 14 App Router
- **Interactive Components**: Komponen interaktif dengan animasi
- **Contact Form**: Form kontak dengan validasi

## 📦 Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## 🛠️ Installation

1. Clone repository:
```bash
git clone <repository-url>
cd company-profile-felicity
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) di browser

## 📁 Project Structure

```
company-profile-felicity/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Features.tsx
│   ├── Team.tsx
│   ├── Clients.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
└── public/
```

## 🎨 Sections

1. **Hero**: Landing section dengan CTA dan stats
2. **About**: Informasi perusahaan, misi, visi, dan values
3. **Services**: Layanan yang ditawarkan (6 layanan utama)
4. **Features**: Keunggulan perusahaan
5. **Team**: Tim profesional
6. **Clients**: Partner dan klien
7. **Contact**: Form kontak dan informasi kontak
8. **Footer**: Links dan newsletter

## 🎯 Customization

### Mengubah Warna Brand
Edit file `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Ubah nilai-nilai ini sesuai brand Anda
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Mengubah Konten
- Edit komponen di folder `components/`
- Ubah metadata di `app/layout.tsx`

## 📝 Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm start` - Jalankan production server
- `npm run lint` - Check linting errors

## 🌐 Deployment

Deploy ke Vercel (recommended):
```bash
vercel
```

Atau platform lain yang support Next.js.

## 📄 License

MIT License - feel free to use for your projects!

## 👨‍💻 Author

Created as portfolio project for TechInnovate
