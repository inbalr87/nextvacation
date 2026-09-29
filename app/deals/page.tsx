import Link from 'next/link';
import {ArrowUpRight,Plane,PackageOpen,ShieldCheck} from 'lucide-react';

export const metadata={title:'דילים'};

const categories=[
  {title:'דקה 90',text:'יעדים שכדאי לבדוק כשאתם גמישים בתאריכים.',image:'/assets/icon-deals.webp',href:'/discover/last-minute'},
  {title:'חופשה אורבנית',text:'כיוונים לסופ״ש עירוני קצר.',image:'/assets/icon-destinations.webp',href:'/discover/city'},
  {title:'שופינג',text:'ערים שבהן הקניות הן חלק מהחופשה.',image:'/assets/icon-shopping.webp',href:'/discover/shopping'},
  {title:'צפון אמריקה',text:'רעיונות לחופשות גדולות יותר.',image:'/assets/icon-flights.webp',href:'/discover/north-america'},
  {title:'חופים ואיים',text:'ים, שמש וחופשה רגועה.',image:'/assets/icon-beaches.webp',href:'/discover/beaches'},
];

export default function Page(){
  return <main>
    <section className="deals-visual-hero">
      <div className="wrap">
        <div className="deals-visual-art">
          <div className="deals-visual-copy"><span>DEALS</span><h1>דילים — רק כשהמחיר אמיתי</h1><p>עד שנחבר מקור נתונים חי, לא נציג כאן “מבצעים” או מחירים שהמצאנו.</p></div>
        </div>
        <div className="deals-truth-card">
          <ShieldCheck size={23}/><div><strong>כרגע אין פיד דילים חי מחובר</strong><span>אחרי חיבור KAYAK / Travelpayouts / ספק אחר, העמוד יוכל להציג דילים מאומתים ולסנן אותם לפי יעד, תאריכים ותקציב.</span></div>
        </div>
      </div>
    </section>

    <section className="section compact">
      <div className="wrap">
        <div className="section-head"><div><div className="eyebrow">בינתיים</div><h2>אפשר לחפש לפי סוג החופשה</h2><p>הקטגוריות עוזרות לבחור כיוון, ואז עוברים לחיפוש טיסה או טיסה + מלון.</p></div></div>
        <div className="deal-category-grid">
          {categories.map(c=><Link href={c.href} className="deal-category-card" key={c.title}><img src={c.image} alt=""/><div><strong>{c.title}</strong><span>{c.text}</span><b>לרעיונות <ArrowUpRight size={15}/></b></div></Link>)}
        </div>
        <div className="deal-search-actions">
          <Link href="/flights"><Plane size={18}/>חיפוש טיסות</Link>
          <Link href="/packages"><PackageOpen size={18}/>חיפוש טיסה + מלון</Link>
        </div>
      </div>
    </section>
  </main>;
}
