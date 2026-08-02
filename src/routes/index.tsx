import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Repeat2,
  Star,
  Truck,
  ShieldCheck,
  Store,
  CreditCard,
  Cpu,
  Laptop,
  Monitor,
  Smartphone,
  Gamepad2,
  Keyboard,
  HardDrive,
  Headphones,
  ChevronRight,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JIB Computer Group | สเปคชัดเจน ราคาโปร่งใส เช็คสต็อกได้ทันที" },
      {
        name: "description",
        content:
          "หน้าแรก JIB แบบใหม่ ลดแบนเนอร์ เพิ่มรายละเอียดสินค้า สเปคย่อ ราคา สต็อกสาขา และตัวเลือกผ่อน 0% ในหน้าเดียว",
      },
      { property: "og:title", content: "JIB Computer Group | สเปคชัดเจน ราคาโปร่งใส" },
      {
        property: "og:description",
        content: "หน้าแรกแบบเน้นข้อมูลสินค้า ลดแบนเนอร์ เห็นสเปค ราคา และสต็อกได้ทันที",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  "หน้าแรก",
  "สินค้า",
  "คอมประกอบ/จัดสเปค",
  "โปรโมชั่น",
  "ตารางราคา",
  "เงื่อนไขบริการ",
  "การรับประกัน",
  "ตรวจสอบการนำส่ง",
  "ติดต่อเรา",
  "ติดต่อสาขา",
  "ลูกค้าองค์กร",
];

const categories = [
  { icon: Cpu, label: "COMPUTER DIY", sub: "คอมพิวเตอร์ฮาร์ดแวร์", count: "4,120 รายการ" },
  { icon: Laptop, label: "NOTEBOOK", sub: "โน้ตบุ๊ค", count: "986 รายการ" },
  { icon: Monitor, label: "MONITOR", sub: "จอคอมพิวเตอร์", count: "742 รายการ" },
  { icon: Smartphone, label: "SMARTPHONE", sub: "สมาร์ทโฟน & แท็บเล็ต", count: "531 รายการ" },
  { icon: Gamepad2, label: "GAMING GEAR", sub: "อุปกรณ์เกมมิ่งเกียร์", count: "1,308 รายการ" },
  { icon: Keyboard, label: "KEYBOARD & MOUSE", sub: "คีย์บอร์ด และเมาส์", count: "1,644 รายการ" },
  { icon: HardDrive, label: "STORAGE", sub: "SSD / HDD / External", count: "873 รายการ" },
  { icon: Headphones, label: "AUDIO", sub: "หูฟัง และลำโพง", count: "612 รายการ" },
];

type Product = {
  name: string;
  tag: string;
  specs: string[];
  price: string;
  old: string;
  save: string;
  rating: number;
  reviews: number;
  stock: string;
  installment: string;
};

const products: Product[] = [
  {
    name: "COMSET MARU 2607075 | i5-14400F / RTX 4060",
    tag: "คอมประกอบ",
    specs: [
      "Intel Core i5-14400F 10C/16T",
      "GeForce RTX 4060 8GB GDDR6",
      "RAM 32GB DDR5 5600 / SSD 1TB NVMe Gen4",
      "PSU 650W 80+ Bronze • Windows 11 พร้อมใช้",
    ],
    price: "29,900.-",
    old: "34,500.-",
    save: "ประหยัด 4,600.-",
    rating: 4.8,
    reviews: 214,
    stock: "พร้อมส่ง 12 ชิ้น • มีของ 23 สาขา",
    installment: "ผ่อน 0% นาน 10 เดือน • 2,990.-/เดือน",
  },
  {
    name: "ASUS TUF Gaming A15 | Ryzen 7 / RTX 4070",
    tag: "โน้ตบุ๊ค",
    specs: [
      "AMD Ryzen 7 8845HS 8C/16T",
      "RTX 4070 8GB • 140W TGP",
      "จอ 15.6\" QHD 165Hz 100% sRGB",
      "RAM 16GB DDR5 / SSD 1TB • ประกัน 3 ปี",
    ],
    price: "42,900.-",
    old: "47,900.-",
    save: "ประหยัด 5,000.-",
    rating: 4.7,
    reviews: 158,
    stock: "พร้อมส่ง 6 ชิ้น • มีของ 11 สาขา",
    installment: "ผ่อน 0% นาน 10 เดือน • 4,290.-/เดือน",
  },
  {
    name: "Samsung Odyssey G7 27\" | 240Hz QHD",
    tag: "จอคอมพิวเตอร์",
    specs: [
      "27\" QHD 2560×1440 IPS",
      "240Hz • 1ms GtG • G-Sync Compatible",
      "HDR400 • DisplayPort 1.4 / HDMI 2.1",
      "ขาตั้งปรับสูง-ก้ม-หมุน • ประกัน 3 ปี",
    ],
    price: "12,900.-",
    old: "15,900.-",
    save: "ประหยัด 3,000.-",
    rating: 4.9,
    reviews: 402,
    stock: "พร้อมส่ง 18 ชิ้น • มีของ 30 สาขา",
    installment: "ผ่อน 0% นาน 6 เดือน • 2,150.-/เดือน",
  },
  {
    name: "Logitech G Pro X Superlight 2 | Wireless",
    tag: "เกมมิ่งเกียร์",
    specs: [
      "เซ็นเซอร์ HERO 2 ความละเอียด 32,000 DPI",
      "น้ำหนัก 60 กรัม • LIGHTSPEED 8kHz",
      "แบตใช้งานต่อเนื่อง 95 ชั่วโมง",
      "สวิตช์ไฮบริดออปติคัล • ประกัน 2 ปี",
    ],
    price: "5,290.-",
    old: "5,990.-",
    save: "ประหยัด 700.-",
    rating: 4.8,
    reviews: 611,
    stock: "พร้อมส่ง 44 ชิ้น • มีของ 38 สาขา",
    installment: "ผ่อน 0% นาน 3 เดือน • 1,763.-/เดือน",
  },
];

const compareRows = [
  {
    budget: "งบ 20,000 - 25,000",
    use: "เล่นเกม 1080p / เรียนออนไลน์",
    cpu: "Ryzen 5 8500G",
    gpu: "RTX 3050 6GB",
    fps: "~90 FPS @1080p High",
  },
  {
    budget: "งบ 28,000 - 33,000",
    use: "เกม 1080p สูง / ตัดต่อเบา",
    cpu: "Core i5-14400F",
    gpu: "RTX 4060 8GB",
    fps: "~140 FPS @1080p High",
  },
  {
    budget: "งบ 45,000 - 55,000",
    use: "เกม 1440p / ทำงานคอนเทนต์",
    cpu: "Ryzen 7 7800X3D",
    gpu: "RTX 4070 SUPER",
    fps: "~130 FPS @1440p Ultra",
  },
];

const brands = [
  "Microsoft",
  "ASUS",
  "MSI",
  "intel",
  "Apple",
  "AMD",
  "Lenovo",
  "SteelSeries",
  "CORSAIR",
  "SanDisk",
  "GIGABYTE",
  "Seagate",
  "Logitech",
  "HyperX",
  "RAZER",
  "acer",
  "NVIDIA",
  "TP-Link",
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="JIB Computer Group">
      <span className="text-3xl font-bold italic tracking-tight text-jib-foreground">
        J<span className="text-brandgold">I</span>B
      </span>
      <span className="h-8 w-px bg-jib-foreground/30" />
      <span className="leading-none">
        <span className="block text-xl font-semibold text-brandgold">25</span>
        <span className="block text-[9px] tracking-[0.25em] text-jib-foreground/70">
          ANNIVERSARY
        </span>
      </span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-surface font-sans text-foreground">
      {/* Header */}
      <header className="bg-jib">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-4 px-4 py-3">
          <Logo />

          <div className="order-3 w-full lg:order-none lg:w-auto lg:flex-1">
            <div className="flex overflow-hidden rounded-md bg-background shadow-card">
              <input
                type="search"
                placeholder="ค้นหาสินค้า เช่น RTX 4060, โน้ตบุ๊คทำงาน, SSD 1TB"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
                aria-label="ค้นหาสินค้า"
              />
              <button className="hidden items-center gap-1 border-l border-border px-3 text-sm text-muted-foreground sm:flex">
                หมวดหมู่สินค้า
              </button>
              <button
                className="flex items-center justify-center bg-jib px-4 text-jib-foreground transition-colors hover:bg-jib-deep"
                aria-label="ค้นหา"
              >
                <Search className="size-4" />
              </button>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-jib-foreground/70">
              <span>ยอดค้นหา:</span>
              {["RTX 5070", "คอมประกอบงบ 30,000", "จอ 180Hz", "SSD Gen4 1TB"].map((k) => (
                <button key={k} className="hover:text-brandgold hover:underline">
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="ml-auto flex items-center gap-5 text-jib-foreground">
            <button className="relative flex items-center gap-2 text-sm">
              <ShoppingCart className="size-6" />
              <span className="absolute -left-1 -top-1 rounded-full bg-brandgold px-1.5 text-[10px] font-semibold text-brandgold-foreground">
                0
              </span>
              <span className="hidden sm:inline">ตะกร้าสินค้า</span>
            </button>
            <button className="flex items-center gap-2 text-sm">
              <User className="size-6" />
              <span className="hidden sm:inline">บัญชีของฉัน</span>
            </button>
            <div className="flex items-center gap-1 text-xs">
              <button className="rounded bg-background/15 px-2 py-1">TH</button>
              <button className="px-2 py-1 opacity-60">EN</button>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="border-t border-jib-foreground/15 bg-jib-deep">
          <ul className="mx-auto flex max-w-[1400px] flex-wrap gap-x-5 gap-y-1 px-4 py-2 text-sm text-jib-foreground/90">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="transition-colors hover:text-brandgold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Service strip — replaces one row of banners with useful facts */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-4 py-3 text-xs md:grid-cols-4 md:text-sm">
          {[
            { icon: Truck, t: "ส่งฟรีเมื่อสั่งครบ 1,000.-", s: "กรุงเทพฯ ส่งภายในวันเดียว" },
            { icon: Store, t: "มีหน้าร้าน 40 สาขาทั่วไทย", s: "เช็คสต็อกรายสาขาก่อนไป" },
            { icon: ShieldCheck, t: "ประกันศูนย์ไทยทุกชิ้น", s: "เคลมที่สาขา ไม่ต้องส่งไปรษณีย์" },
            { icon: CreditCard, t: "ผ่อน 0% สูงสุด 10 เดือน", s: "รองรับ 8 ธนาคาร" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-start gap-2">
              <Icon className="mt-0.5 size-5 shrink-0 text-jib" />
              <div>
                <p className="font-medium">{t}</p>
                <p className="text-muted-foreground">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-[1400px] px-4 py-6">
        {/* Single compact hero (was a wall of banners) */}
        <section className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col justify-between rounded-xl bg-jib p-6 text-jib-foreground shadow-card">
            <div>
              <span className="inline-block rounded bg-brandgold px-2 py-0.5 text-xs font-semibold text-brandgold-foreground">
                ดีลประจำสัปดาห์ • เหลือเวลา 2 วัน 14 ชม.
              </span>
              <h1 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">
                คอมประกอบและโน้ตบุ๊คเกมมิ่ง ลดสูงสุด 18%
              </h1>
              <p className="mt-2 max-w-lg text-sm text-jib-foreground/80">
                เลือกจากสเปคที่ทดสอบเฟรมเรตจริงโดยทีม JIB ราคาแสดงรวมภาษีแล้ว
                พร้อมเช็คสต็อกรายสาขาในหน้าเดียว
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="#deals"
                className="rounded-md bg-brandgold px-4 py-2 text-sm font-semibold text-brandgold-foreground"
              >
                ดูดีลทั้งหมด
              </a>
              <a
                href="#advisor"
                className="rounded-md border border-jib-foreground/40 px-4 py-2 text-sm font-medium"
              >
                จัดสเปคตามงบ
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-5 shadow-card" id="advisor">
            <h2 className="text-base font-semibold">เลือกให้เร็วขึ้น: บอกงบ แล้วเราจัดสเปคให้</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              แทนการไล่ดูแบนเนอร์ เลือกงบและการใช้งาน แล้วเห็นชุดที่แนะนำทันที
            </p>
            <div className="mt-4 grid gap-2">
              {compareRows.map((r) => (
                <button
                  key={r.budget}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2 text-left text-sm transition-colors hover:border-jib hover:bg-surface"
                >
                  <span>
                    <span className="block font-medium">{r.budget}</span>
                    <span className="block text-xs text-muted-foreground">{r.use}</span>
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {r.cpu} + {r.gpu}
                    <span className="block text-jib">{r.fps}</span>
                  </span>
                  <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Categories as compact text links with item counts */}
        <section className="mt-6">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-lg font-semibold">หมวดหมู่สินค้า</h2>
            <a href="#" className="text-sm text-jib hover:underline">
              ดูทั้งหมด
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
            {categories.map(({ icon: Icon, label, sub, count }) => (
              <a
                key={label}
                href="#"
                className="rounded-lg border border-border bg-background p-3 text-center shadow-card transition-colors hover:border-jib"
              >
                <Icon className="mx-auto size-6 text-jib" />
                <p className="mt-2 text-xs font-semibold">{label}</p>
                <p className="text-[11px] text-muted-foreground">{sub}</p>
                <p className="mt-1 text-[11px] text-jib">{count}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Product grid with full detail */}
        <section className="mt-8" id="deals">
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-semibold">โปรโมชั่นแนะนำ</h2>
              <p className="text-sm text-muted-foreground">
                แสดงสเปคย่อ ราคา สต็อก และเงื่อนไขผ่อนบนการ์ดเดียว ไม่ต้องคลิกเข้าไปดูทีละหน้า
              </p>
            </div>
            <a href="#" className="text-sm text-jib hover:underline">
              MORE
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded-xl border border-border bg-background p-4 shadow-card transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded bg-surface px-2 py-0.5 text-[11px] text-muted-foreground">
                    {p.tag}
                  </span>
                  <div className="flex gap-2 text-muted-foreground">
                    <button aria-label="เพิ่มในรายการโปรด">
                      <Heart className="size-4" />
                    </button>
                    <button aria-label="เปรียบเทียบสินค้า">
                      <Repeat2 className="size-4" />
                    </button>
                  </div>
                </div>

                <h3 className="mt-3 text-sm font-semibold leading-snug">{p.name}</h3>

                <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-1.5">
                      <Check className="mt-0.5 size-3 shrink-0 text-jib" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex items-center gap-1 text-xs">
                  <Star className="size-3.5 fill-brandgold text-brandgold" />
                  <span className="font-medium">{p.rating}</span>
                  <span className="text-muted-foreground">({p.reviews} รีวิว)</span>
                </div>

                <div className="mt-3 border-t border-border pt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-sale">{p.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{p.old}</span>
                  </div>
                  <p className="text-xs font-medium text-jib">{p.save}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.installment}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.stock}</p>
                </div>

                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-md bg-jib px-3 py-2 text-sm font-medium text-jib-foreground transition-colors hover:bg-jib-deep">
                    หยิบใส่ตะกร้า
                  </button>
                  <button className="rounded-md border border-border px-3 py-2 text-sm">
                    รายละเอียด
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Spec comparison table */}
        <section className="mt-8 rounded-xl border border-border bg-background p-5 shadow-card">
          <h2 className="text-lg font-semibold">เทียบสเปคคอมประกอบยอดนิยม</h2>
          <p className="text-sm text-muted-foreground">
            ตัวเลขเฟรมเรตจากการทดสอบภายในของ JIB (เกมยอดนิยม 5 เกม เฉลี่ย)
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-surface text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-3 py-2">ช่วงงบ</th>
                  <th className="px-3 py-2">เหมาะกับ</th>
                  <th className="px-3 py-2">CPU</th>
                  <th className="px-3 py-2">การ์ดจอ</th>
                  <th className="px-3 py-2">ประสิทธิภาพ</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.budget} className="border-t border-border">
                    <td className="px-3 py-2 font-medium">{r.budget}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.use}</td>
                    <td className="px-3 py-2">{r.cpu}</td>
                    <td className="px-3 py-2">{r.gpu}</td>
                    <td className="px-3 py-2 text-jib">{r.fps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Compact brand row */}
        <section className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">แบรนด์ที่จำหน่าย</h2>
          <div className="flex flex-wrap gap-2">
            {brands.map((b) => (
              <a
                key={b}
                href="#"
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-jib hover:text-jib"
              >
                {b}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-jib-deep py-8 text-jib-foreground/80">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-4 text-sm md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-3 text-xs leading-relaxed text-jib-foreground/60">
              หน้าแรกต้นแบบเพื่อการวิจัยด้านประสบการณ์ผู้ใช้ (UX research prototype)
            </p>
          </div>
          {[
            { h: "ช่วยเหลือ", l: ["ตรวจสอบการนำส่ง", "เงื่อนไขบริการ", "การรับประกัน", "ติดต่อเรา"] },
            { h: "สินค้า", l: ["คอมประกอบ", "โน้ตบุ๊ค", "จอคอมพิวเตอร์", "เกมมิ่งเกียร์"] },
            { h: "องค์กร", l: ["ลูกค้าองค์กร", "ตัวแทนจำหน่าย", "ร่วมงานกับเรา", "สาขาทั้งหมด"] },
          ].map((c) => (
            <div key={c.h}>
              <p className="font-semibold text-jib-foreground">{c.h}</p>
              <ul className="mt-2 space-y-1 text-xs">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="hover:text-brandgold">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
