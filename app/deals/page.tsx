import Link from 'next/link';
import {SearchBox} from '@/components/SearchBox';
import {ArrowUpRight,ShieldCheck} from 'lucide-react';

export const metadata={title:'דילים'};

const categories=[
  {title:'דקה 90',text:'יעדים שכדאי לבדוק כשאפשר להיות גמישים בתאריכים.',image:'/assets/categories/last-minute.svg',href:'/discover/last-minute'},
  {title:'חופשה אורבנית',text:'כיוונים לסופ״ש עירוני קצר.',image:'/assets/categories/city.svg',href:'/discover/city'},
  {title:'שופינג',text:'ערים שבהן הקניות הן חלק מהחופשה.',image:'/assets/categories/shopping.svg',href:'/discover/shopping'},
  {title:'צפון אמריקה',text:'רעיונות לחופשות גדולות יותר.',image:'/assets/categories/north-america.svg',href:'/discover/north-america'},
  {title:'חופים ואיים',text:'ים, שמש וחופשה רגועה.',image:'/assets/categories/beaches.svg',href:'/discover/beaches'},
];

export default function Page(){return <main>
  <section className="deals-visual-hero"><div className="wrap"><div className="deals-visual-art"><div className="deals-visual-copy"><span>דילים וחופשות</span><h1>דילים — רק כשהמחיר אמיתי</h1><p>עד שנחבר מקור נתונים חי, לא נציג כאן מבצעים או מחירים לא מאומתים.</p></div></div><div className="deals-truth-card"><ShieldCheck size={24}/><div><strong>כרגע אין פיד דילים חי מחובר</strong><span>אחרי חיבור KAYAK, Travelpayouts או ספק אחר, העמוד יוכל להציג דילים מאומתים ולסנן אותם לפי יעד, תאריכים ותקציב.</span></div></div></div></section>

  <section className="section compact"><div className="wrap"><div className="section-head"><div><div className="eyebrow">חיפוש דילים</div><h2>מתחילים מהיעד והתאריכים</h2><p>החיפוש מוכן למקור נתונים חי — בלי להמציא מחירים בדרך.</p></div></div><SearchBox mode="deals" showDealsTab/></div></section>

  <section className="section compact"><div className="wrap"><div className="section-head"><div><div className="eyebrow">עד שהפיד יתחבר</div><h2>אפשר לחפש לפי סוג החופשה</h2></div></div><div className="deal-category-grid">{categories.map(c=><Link href={c.href} className="deal-category-card" key={c.title}><img src={c.image} alt=""/><div><strong>{c.title}</strong><span>{c.text}</span><b>לרעיונות <ArrowUpRight size={16}/></b></div></Link>)}</div></div></section>
</main>}
