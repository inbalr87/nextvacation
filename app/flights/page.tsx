import Link from 'next/link';
import {SearchBox} from '@/components/SearchBox';
import {SearchLandingHero} from '@/components/SearchLandingHero';
import {ArrowUpRight} from 'lucide-react';

export const metadata={title:'חיפוש טיסות'};

const routes=[
  {city:'ברצלונה',to:'ברצלונה (BCN)',tag:'עיר + ים',image:'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=85',href:'/destinations/barcelona'},
  {city:'לונדון',to:'לונדון (LHR)',tag:'שופינג ומחזות זמר',image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85'},
  {city:'פריז',to:'פריז (CDG)',tag:'קלאסיקה אירופית',image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85'},
  {city:'בודפשט',to:'בודפשט (BUD)',tag:'סופ״ש עירוני',image:'https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1200&q=85'},
  {city:'רומא',to:'רומא (FCO)',tag:'אוכל ותרבות',image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85'},
  {city:'אתונה',to:'אתונה (ATH)',tag:'עיר + שמש',image:'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=85'},
];

export default function Page(){
  return <main>
    <SearchLandingHero title="חיפוש טיסות" subtitle="הלוך ושוב, כיוון אחד או מספר יעדים — עם בחירת מחלקה ונוסעים בתוך אותה חלונית." image="/assets/hero-amalfi.webp">
      <SearchBox mode="flights"/>
    </SearchLandingHero>

    <section className="section landing-options-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">רעיונות להתחלה</div><h2>יעדים פופולריים שכדאי לבדוק</h2><p>כל יעד מקבל תמונה, הקשר ברור וקיצור דרך לחיפוש.</p></div></div><div className="flight-destination-grid">{routes.map(r=><Link className="flight-destination-card" key={r.city} href={r.href||`/flights/results?from=${encodeURIComponent('תל אביב (TLV)')}&to=${encodeURIComponent(r.to)}`}><img src={r.image} alt={r.city}/><div className="flight-destination-copy"><span>{r.tag}</span><strong>{r.city}</strong><b>לחיפוש <ArrowUpRight size={17}/></b></div></Link>)}</div></div></section>
  </main>;
}
