import Link from 'next/link';
import {SearchBox} from '@/components/SearchBox';
import {Search,ArrowUpRight,ShieldCheck,Plane,Hotel,PackageOpen} from 'lucide-react';

const categories=[
  {title:'חופשה אורבנית',subtitle:'ערים, תרבות, אוכל וסופי שבוע',image:'/assets/icon-destinations.webp',href:'/discover/city'},
  {title:'שופינג',subtitle:'יעדים עם רחובות קניות ומציאות',image:'/assets/icon-shopping.webp',href:'/discover/shopping'},
  {title:'דקה 90',subtitle:'יעדים שכדאי לבדוק כשגמישים בתאריכים',image:'/assets/icon-deals.webp',href:'/discover/last-minute'},
  {title:'צפון אמריקה',subtitle:'ניו יורק, אורלנדו, לוס אנג׳לס ועוד',image:'/assets/icon-flights.webp',href:'/discover/north-america'},
  {title:'חופים ואיים',subtitle:'ים, שמש וקצב רגוע',image:'/assets/icon-beaches.webp',href:'/discover/beaches'},
  {title:'אוכל וקולינריה',subtitle:'שווקים, מסעדות וטעמים מקומיים',image:'/assets/icon-food.webp',href:'/discover/food'},
  {title:'חופשה משפחתית',subtitle:'יעדים שמתאימים גם עם ילדים',image:'/assets/icon-packages.webp',href:'/discover/family'},
  {title:'חיי לילה',subtitle:'ברים, הופעות ואווירה עד מאוחר',image:'/assets/icon-evening.webp',href:'/discover/nightlife'},
];

const destinationCards=[
  {city:'חוף אמאלפי',subtitle:'איטליה · צבעים, ים ואוכל',image:'/assets/hero-amalfi.webp',href:'/discover/beaches'},
  {city:'סנטוריני',subtitle:'יוון · לבן, כחול ושקיעות',image:'/assets/santorini.webp',href:'/discover/beaches'},
  {city:'חופשה עירונית',subtitle:'רחובות יפים, בתי קפה וקצב מקומי',image:'/assets/street.webp',href:'/discover/city'},
];

export default function Home(){
  return <main>
    <section className="brand-hero">
      <div className="wrap brand-hero-grid">
        <div className="brand-hero-copy">
          <div className="brand-kicker"><span/>NEXTVACATION.CO.IL<span/></div>
          <h1>טיסות • מלונות • חבילות<br/><em>בסטייל של חופשה</em></h1>
          <p>
            מנוע חיפוש נוח, דילים נבחרים ושפה ויזואלית רכה,
            בוטיקית ומעוררת השראה – כדי שהחיפוש ירגיש
            כמו התחלה של חופשה, לא כמו עוד מטלה.
          </p>
          <div className="brand-bullets">
            <span>חיפוש פשוט וברור</span>
            <span>השוואה במקום אחד</span>
            <span>מעבר ישיר לספק להזמנה</span>
          </div>
        </div>

        <div className="brand-hero-visual">
          <div className="brand-hero-photo">
            <img src="/assets/street.webp" alt="חופשה ים־תיכונית צבעונית מול הים"/>
          </div>
          <div className="brand-mini-deals">
            <Link href="/discover/city"><small>חופשה עירונית</small><strong>ערים לסופ״ש</strong></Link>
            <Link href="/discover/beaches"><small>שמש וים</small><strong>חופים ואיים</strong></Link>
            <Link href="/discover/last-minute"><small>גמישים בתאריכים?</small><strong>רעיונות לדקה 90</strong></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="search-zone home-search"><div className="wrap"><SearchBox mode="flights"/></div></section>

    <section className="section brand-choice-section">
      <div className="wrap">
        <div className="section-head centered-head"><div><div className="eyebrow">מתחילים מסגנון החופשה</div><h2>איזו חופשה בא לכם?</h2><p>בחרו קטגוריה וקבלו רעיונות ליעדים שמתאימים לה — בלי להציג מחירים לא מאומתים.</p></div></div>
        <div className="brand-icon-grid category-icon-grid">
          {categories.map(item=><Link key={item.title} className="brand-icon-card" href={item.href}><img src={item.image} alt=""/><strong>{item.title}</strong><span>{item.subtitle}</span><b>לרעיונות ←</b></Link>)}
        </div>
      </div>
    </section>

    <section className="section compact destination-brand-section">
      <div className="wrap">
        <div className="section-head"><div><div className="eyebrow">קצת השראה</div><h2>לאן בא לכם לטוס?</h2><p>כמה כיוונים להתחיל מהם — ומשם לעבור לחיפוש אמיתי.</p></div><Link href="/flights" className="text-link">לחיפוש טיסות <ArrowUpRight size={16}/></Link></div>
        <div className="destination-brand-grid">{destinationCards.map((d,i)=><Link key={d.city} href={d.href} className={`destination-brand-card ${i===1?'wide':''}`}><img src={d.image} alt={d.city}/><div className="destination-brand-content"><strong>{d.city}</strong><span>{d.subtitle}</span></div><div className="destination-arrow"><ArrowUpRight size={18}/></div></Link>)}</div>
      </div>
    </section>

    <section className="section service-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">שלושה חיפושים, מקום אחד</div><h2>מה תרצו להשוות?</h2></div></div><div className="service-grid"><Link href="/flights" className="service-card"><Plane/><div><strong>טיסות</strong><span>שעות, עצירות, מחלקה ומחירים</span></div><ArrowUpRight/></Link><Link href="/hotels" className="service-card"><Hotel/><div><strong>מלונות</strong><span>מיקום, דירוג ותנאי הזמנה</span></div><ArrowUpRight/></Link><Link href="/packages" className="service-card"><PackageOpen/><div><strong>טיסה + מלון</strong><span>רעיונות לשילובים באותו יעד</span></div><ArrowUpRight/></Link></div></div></section>

    <section className="section how-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">פשוט וברור</div><h2>איך זה עובד?</h2><p>אנחנו מרכזים את החיפוש. הספק מטפל בהזמנה.</p></div></div><div className="value-grid"><div className="value-card"><span className="step">01</span><div className="value-icon"><Search/></div><h3>מחפשים</h3><p>בוחרים יעד, תאריכים ונוסעים ומקבלים תוצאות במקום אחד.</p></div><div className="value-card"><span className="step">02</span><div className="value-icon"><ArrowUpRight/></div><h3>משווים</h3><p>בודקים מחיר, שעות, עצירות, דירוג ותנאים לפני שבוחרים.</p></div><div className="value-card"><span className="step">03</span><div className="value-icon"><ShieldCheck/></div><h3>עוברים לספק</h3><p>לא מזינים אצלנו פרטי אשראי. ההזמנה והתשלום נעשים אצל הספק.</p></div></div></div></section>
  </main>;
}
