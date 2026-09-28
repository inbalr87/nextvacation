import Link from 'next/link';
import {SearchBox} from '@/components/SearchBox';
import {Search,ArrowUpRight,ShieldCheck,Plane,Hotel,PackageOpen,Sparkles} from 'lucide-react';

const inspiration=[
  {title:'טיסות',subtitle:'למצוא את הדרך הכי נוחה ליעד',image:'/assets/icon-flights.webp',href:'/flights'},
  {title:'מלונות',subtitle:'להשוות מחיר, מיקום ודירוג',image:'/assets/icon-hotels.webp',href:'/hotels'},
  {title:'טיסה + מלון',subtitle:'לרכז את החופשה במקום אחד',image:'/assets/icon-packages.webp',href:'/packages'},
  {title:'דילים',subtitle:'רעיונות לחופשה בתקציב שלכם',image:'/assets/icon-deals.webp',href:'/packages'},
  {title:'יעדים',subtitle:'לגלות לאן בא לכם לטוס',image:'/assets/icon-destinations.webp',href:'/flights'},
];

const moods=[
  {title:'אוכל',subtitle:'מסעדות, שווקים וטעמים מקומיים',image:'/assets/icon-food.webp'},
  {title:'אטרקציות',subtitle:'מה לא כדאי לפספס ביעד',image:'/assets/icon-attractions.webp'},
  {title:'קניות',subtitle:'רחובות, שווקים ומציאות',image:'/assets/icon-shopping.webp'},
  {title:'חופים',subtitle:'ים, שמש וקצב רגוע',image:'/assets/icon-beaches.webp'},
  {title:'ערב',subtitle:'ברים, אווירה וחיי לילה',image:'/assets/icon-evening.webp'},
];

const destinationCards=[
  {city:'חוף אמאלפי',subtitle:'איטליה · צבעים, ים ואוכל',image:'/assets/hero-amalfi.webp',href:'/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%A8%D7%95%D7%9E%D7%90%20(FCO)'},
  {city:'סנטוריני',subtitle:'יוון · לבן, כחול ושקיעות',image:'/assets/santorini.webp',href:'/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%90%D7%AA%D7%95%D7%A0%D7%94%20(ATH)'},
  {city:'חופשה ים־תיכונית',subtitle:'רחובות יפים, בתי קפה וקצב רגוע',image:'/assets/street.webp',href:'/flights'},
];

export default function Home(){
  return <main>
    <section className="hero brand-hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-badge"><Sparkles size={15}/>החופשה שלכם, בלי לפתוח עשרים טאבים</div>
          <h1>מחפשים פעם אחת.<br/><span>בוחרים חכם.</span></h1>
          <p>טיסות, מלונות וטיסה + מלון במקום אחד. משווים בין האפשרויות וממשיכים ישירות לספק כדי להשלים את ההזמנה.</p>
          <div className="hero-trust"><span><ShieldCheck size={17}/>בלי תשלום באתר</span><span><ArrowUpRight size={17}/>מעבר ישיר לספק</span></div>
        </div>
        <div className="hero-visual brand-visual">
          <div className="hero-photo"><img src="/assets/hero-amalfi.webp" alt="חופשה בחוף אמאלפי"/></div>
          <div className="hero-stamp">NEXT<br/>VACATION</div>
          <div className="hero-mini-card"><span>רק מחפשים ומשווים</span><strong>את ההזמנה עושים אצל הספק</strong></div>
        </div>
      </div>
    </section>

    <section className="search-zone home-search"><div className="wrap"><SearchBox mode="flights"/></div></section>

    <section className="section brand-choice-section">
      <div className="wrap">
        <div className="section-head centered-head"><div><div className="eyebrow">מתחילים מהחופשה שמתאימה לכם</div><h2>מה מחפשים עכשיו?</h2><p>אותה שפה ויזואלית שסגרנו — עכשיו גם בתוך האתר עצמו.</p></div></div>
        <div className="brand-icon-grid">
          {inspiration.map(item=><Link key={item.title} className="brand-icon-card" href={item.href}><img src={item.image} alt=""/><strong>{item.title}</strong><span>{item.subtitle}</span><b>לפתיחה ←</b></Link>)}
        </div>
      </div>
    </section>

    <section className="section mood-section">
      <div className="wrap">
        <div className="section-head"><div><div className="eyebrow">איך בא לכם שהחופשה תרגיש?</div><h2>בחרו את הסגנון שלכם</h2><p>עוד דרך להתחיל לחשוב על היעד הבא.</p></div></div>
        <div className="mood-grid">{moods.map(item=><div className="mood-card" key={item.title}><img src={item.image} alt=""/><div><strong>{item.title}</strong><span>{item.subtitle}</span></div></div>)}</div>
      </div>
    </section>

    <section className="section compact destination-brand-section">
      <div className="wrap">
        <div className="section-head"><div><div className="eyebrow">קצת השראה</div><h2>לאן בא לכם לטוס?</h2><p>כמה תמונות מהעולם שלנו כדי להתחיל לחלום.</p></div><Link href="/flights" className="text-link">לחיפוש טיסות <ArrowUpRight size={16}/></Link></div>
        <div className="destination-brand-grid">{destinationCards.map((d,i)=><Link key={d.city} href={d.href} className={`destination-brand-card ${i===1?'wide':''}`}><img src={d.image} alt={d.city}/><div className="destination-brand-content"><strong>{d.city}</strong><span>{d.subtitle}</span></div><div className="destination-arrow"><ArrowUpRight size={18}/></div></Link>)}</div>
      </div>
    </section>

    <section className="section service-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">שלושה חיפושים, מקום אחד</div><h2>הכול מחובר לחיפוש אחד פשוט</h2></div></div><div className="service-grid"><Link href="/flights" className="service-card"><Plane/><div><strong>טיסות</strong><span>השוואת שעות, עצירות ומחירים</span></div><ArrowUpRight/></Link><Link href="/hotels" className="service-card"><Hotel/><div><strong>מלונות</strong><span>מחיר, דירוג, מיקום ותנאים</span></div><ArrowUpRight/></Link><Link href="/packages" className="service-card"><PackageOpen/><div><strong>טיסה + מלון</strong><span>שילובים נוחים לחופשה שלמה</span></div><ArrowUpRight/></Link></div></div></section>

    <section className="section how-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">פשוט וברור</div><h2>איך זה עובד?</h2><p>אנחנו מרכזים את החיפוש. הספק מטפל בהזמנה.</p></div></div><div className="value-grid"><div className="value-card"><span className="step">01</span><div className="value-icon"><Search/></div><h3>מחפשים</h3><p>בוחרים יעד, תאריכים ונוסעים ומקבלים תוצאות במקום אחד.</p></div><div className="value-card"><span className="step">02</span><div className="value-icon"><ArrowUpRight/></div><h3>משווים</h3><p>בודקים מחיר, שעות, עצירות, דירוג ותנאים לפני שבוחרים.</p></div><div className="value-card"><span className="step">03</span><div className="value-icon"><ShieldCheck/></div><h3>עוברים לספק</h3><p>לא מזינים אצלנו פרטי אשראי. ההזמנה והתשלום נעשים אצל הספק.</p></div></div></div></section>
  </main>
}
