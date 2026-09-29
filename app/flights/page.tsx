import Link from 'next/link';
import {SearchBox} from '@/components/SearchBox';
import {SearchLandingHero} from '@/components/SearchLandingHero';
import {ArrowUpRight} from 'lucide-react';

export const metadata={title:'חיפוש טיסות'};

const routes=[
  {city:'בודפשט',to:'בודפשט (BUD)',tag:'סופ״ש עירוני'},
  {city:'רומא',to:'רומא (FCO)',tag:'אוכל ותרבות'},
  {city:'לונדון',to:'לונדון (LHR)',tag:'שופינג ומחזות זמר'},
  {city:'אתונה',to:'אתונה (ATH)',tag:'עיר + שמש'},
];

export default function Page(){
  return <main>
    <SearchLandingHero
      title="חיפוש טיסות"
      subtitle="הלוך ושוב, כיוון אחד או מספר יעדים — עם בחירת מחלקה ונוסעים בתוך אותה חלונית."
      image="/assets/hero-amalfi.webp"
      eyebrow="FLIGHTS"
    >
      <SearchBox mode="flights"/>
    </SearchLandingHero>

    <section className="section landing-options-section">
      <div className="wrap">
        <div className="section-head"><div><div className="eyebrow">רעיונות להתחלה</div><h2>מסלולים שאפשר לבדוק עכשיו</h2><p>אלה קיצורי דרך לחיפוש — לא דילים ולא מחירים חיים.</p></div></div>
        <div className="simple-option-grid">
          {routes.map(r=><Link className="simple-option-card" key={r.city} href={`/flights/results?from=${encodeURIComponent('תל אביב (TLV)')}&to=${encodeURIComponent(r.to)}`}>
            <span>{r.tag}</span><strong>{r.city}</strong><b>לחיפוש <ArrowUpRight size={16}/></b>
          </Link>)}
        </div>
      </div>
    </section>
  </main>;
}
