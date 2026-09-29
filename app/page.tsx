import Link from 'next/link';
import {HomeSearch} from '@/components/HomeSearch';
import {Search,ArrowUpRight,ShieldCheck} from 'lucide-react';

const categories=[
  {title:'חופשה אורבנית',subtitle:'ערים, תרבות, אוכל וסופי שבוע',image:'/assets/categories/city.svg',href:'/discover/city'},
  {title:'שופינג',subtitle:'יעדים עם רחובות קניות, שווקים ומציאות',image:'/assets/categories/shopping.svg',href:'/discover/shopping'},
  {title:'דקה 90',subtitle:'רעיונות ליעדים כשאפשר להיות גמישים בתאריכים',image:'/assets/categories/last-minute.svg',href:'/discover/last-minute'},
  {title:'צפון אמריקה',subtitle:'ניו יורק, אורלנדו, לוס אנג׳לס ועוד',image:'/assets/categories/north-america.svg',href:'/discover/north-america'},
  {title:'חופים ואיים',subtitle:'ים, שמש וקצב רגוע',image:'/assets/categories/beaches.svg',href:'/discover/beaches'},
  {title:'אוכל וקולינריה',subtitle:'שווקים, מסעדות וטעמים מקומיים',image:'/assets/categories/food.svg',href:'/discover/food'},
  {title:'חופשה משפחתית',subtitle:'יעדים עם הרבה אפשרויות גם עם ילדים',image:'/assets/categories/family.svg',href:'/discover/family'},
  {title:'חיי לילה',subtitle:'ברים, מוזיקה ואווירה עד מאוחר',image:'/assets/categories/nightlife.svg',href:'/discover/nightlife'},
];

const inspiration=[
  {title:'ברצלונה',subtitle:'עיר, אוכל, שופינג וחוף',image:'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=88',href:'/destinations/barcelona'},
  {title:'סנטוריני',subtitle:'לבן, כחול, שקיעות ונוף לים',image:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=88',href:'/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%A1%D7%A0%D7%98%D7%95%D7%A8%D7%99%D7%A0%D7%99%20(JTR)'},
  {title:'פריז',subtitle:'קפה, רחובות יפים וקצת שופינג',image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=88',href:'/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%A4%D7%A8%D7%99%D7%96%20(CDG)'},
];

export default function Home(){
  return <main>
    <section className="brand-hero"><div className="wrap brand-hero-grid">
      <div className="brand-hero-copy"><div className="brand-kicker"><span/>NEXTVACATION.CO.IL<span/></div><h1>טיסות • מלונות • חבילות<br/><em>בסטייל של חופשה</em></h1><p>מנוע חיפוש נוח, דילים נבחרים ושפה ויזואלית רכה, בוטיקית ומעוררת השראה – כדי שהחיפוש ירגיש כמו התחלה של חופשה, לא כמו עוד מטלה.</p><div className="brand-bullets"><span>חיפוש פשוט וברור</span><span>השוואה במקום אחד</span><span>מעבר ישיר לספק להזמנה</span></div></div>
      <div className="brand-hero-visual"><div className="brand-hero-photo"><img src="/assets/street.webp" alt="חופשה ים תיכונית צבעונית מול הים"/></div><div className="brand-mini-deals"><Link href="/discover/city"><small>חופשה עירונית</small><strong>ערים לסופ״ש</strong></Link><Link href="/discover/beaches"><small>שמש וים</small><strong>חופים ואיים</strong></Link><Link href="/discover/last-minute"><small>גמישים בתאריכים?</small><strong>רעיונות לדקה 90</strong></Link></div></div>
    </div></section>

    <section className="search-zone home-search"><div className="wrap"><HomeSearch/></div></section>

    <section className="section brand-choice-section"><div className="wrap"><div className="section-head centered-head"><div><div className="eyebrow">מתחילים מסגנון החופשה</div><h2>איזו חופשה בא לכם?</h2><p>בחרו קטגוריה וקבלו רעיונות ליעדים שמתאימים לה.</p></div></div><div className="brand-icon-grid category-icon-grid">{categories.map(item=><Link key={item.title} className="brand-icon-card" href={item.href}><img src={item.image} alt=""/><strong>{item.title}</strong><span>{item.subtitle}</span><b>לרעיונות ←</b></Link>)}</div></div></section>

    <section className="section compact destination-brand-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">קצת השראה</div><h2>לאן בא לכם לטוס?</h2><p>יעדים עם תמונות אמיתיות ואווירה שמתחילה עוד לפני החיפוש.</p></div><Link href="/flights" className="text-link">לחיפוש טיסות <ArrowUpRight size={18}/></Link></div><div className="destination-brand-grid">{inspiration.map((d,i)=><Link key={d.title} href={d.href} className={`destination-brand-card ${i===1?'wide':''}`}><img src={d.image} alt={d.title}/><div className="destination-brand-content"><strong>{d.title}</strong><span>{d.subtitle}</span></div><div className="destination-arrow"><ArrowUpRight size={18}/></div></Link>)}</div></div></section>

    <section className="section how-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">פשוט וברור</div><h2>איך זה עובד?</h2><p>אנחנו מרכזים את החיפוש. הספק מטפל בהזמנה.</p></div></div><div className="value-grid"><div className="value-card"><span className="step">01</span><div className="value-icon"><Search/></div><h3>מחפשים</h3><p>בוחרים יעד, תאריכים ונוסעים ומקבלים תוצאות במקום אחד.</p></div><div className="value-card"><span className="step">02</span><div className="value-icon"><ArrowUpRight/></div><h3>משווים</h3><p>בודקים מחיר, שעות, עצירות, דירוג ותנאים לפני שבוחרים.</p></div><div className="value-card"><span className="step">03</span><div className="value-icon"><ShieldCheck/></div><h3>עוברים לספק</h3><p>לא מזינים אצלנו פרטי אשראי. ההזמנה והתשלום נעשים אצל הספק.</p></div></div></div></section>
  </main>;
}
