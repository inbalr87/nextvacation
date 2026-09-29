import Link from 'next/link';
import {SearchBox} from '@/components/SearchBox';
import {SearchLandingHero} from '@/components/SearchLandingHero';
import {Plane,Hotel,CheckCircle2,ArrowUpRight} from 'lucide-react';

export const metadata={title:'טיסה + מלון'};
type SP=Promise<{[key:string]:string|string[]|undefined}>;

const ideas=[
  {city:'בודפשט',to:'בודפשט (BUD)',nights:'4–5 לילות',flight:'טיסה ישירה כשזמינה',hotel:'מלון מרכזי 4★',style:'עירוני · אוכל · שווקים',image:'https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1000&q=80'},
  {city:'רומא',to:'רומא (FCO)',nights:'4 לילות',flight:'טיסה ישירה או שעות נוחות',hotel:'מלון במרכז ההיסטורי',style:'אוכל · תרבות · הליכה',image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80'},
  {city:'אתונה',to:'אתונה (ATH)',nights:'3–4 לילות',flight:'טיסה קצרה',hotel:'מלון באזור מרכזי',style:'עיר · אוכל · שמש',image:'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1000&q=80'},
];

export default async function Page({searchParams}:{searchParams:SP}){
  const q=await searchParams;
  const initialTo=typeof q.to==='string'?q.to:'בודפשט (BUD)';
  return <main>
    <SearchLandingHero
      title="טיסה + מלון"
      subtitle="מחפשים את שני חלקי החופשה באותו יעד, עם מחלקת טיסה, נוסעים וחדרים בחלונית אחת."
      image="/assets/street.webp"
    >
      <SearchBox mode="packages" initialTo={initialTo}/>
    </SearchLandingHero>

    <section className="section compact" id="ideas">
      <div className="wrap">
        <div className="section-head package-head"><div><div className="eyebrow">רעיונות לשילוב</div><h2>יעדים שמתאימים לטיסה + מלון</h2><p>אנחנו לא ממציאים מחיר חבילה. עד לחיבור ספקים חיים, אלה רעיונות שממלאים את החיפוש עבור אותו יעד.</p></div></div>
        <div className="package-grid refreshed-packages">
          {ideas.map(p=><article key={p.city} className="package-card-large refreshed-package-card">
            <div className="package-photo"><img src={p.image} alt={p.city}/><span>{p.nights}</span></div>
            <div className="package-body">
              <div className="package-style">{p.style}</div>
              <h3>{p.city}</h3>
              <div className="package-piece"><Plane size={20}/><div><strong>טיסה</strong><span>{p.flight}</span></div></div>
              <div className="package-piece"><Hotel size={20}/><div><strong>מלון</strong><span>{p.hotel}</span></div></div>
              <div className="package-note"><CheckCircle2 size={16}/>המחיר יוצג רק לאחר חיבור למקורות חיים</div>
              <Link className="package-search-button" href={`/packages?to=${encodeURIComponent(p.to)}#search`}>בדיקת השילוב <ArrowUpRight size={17}/></Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  </main>;
}
