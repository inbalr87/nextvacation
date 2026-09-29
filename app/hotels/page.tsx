import Link from 'next/link';
import {SearchBox} from '@/components/SearchBox';
import {SearchLandingHero} from '@/components/SearchLandingHero';
import {ArrowUpRight} from 'lucide-react';

export const metadata={title:'חיפוש מלונות'};

const hotelDestinations=[
  {city:'בודפשט',to:'בודפשט',subtitle:'מרכז העיר, הדנובה והרובע השביעי',image:'https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=900&q=80'},
  {city:'רומא',to:'רומא',subtitle:'מרכז היסטורי, טרסטוורה וסביבת הוותיקן',image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80'},
  {city:'לונדון',to:'לונדון',subtitle:'ווסט אנד, סוהו וקובנט גארדן',image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80'},
  {city:'אתונה',to:'אתונה',subtitle:'פלאקה, מונסטיראקי ומרכז העיר',image:'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=900&q=80'},
];

export default function Page(){
  return <main>
    <SearchLandingHero
      title="מלון שמתאים לחופשה"
      subtitle="בחרו יעד, תאריכים והרכב נוסעים — ונציג השוואה מסודרת לפי מיקום, דירוג ותנאים."
      image="/assets/santorini.webp"
    >
      <SearchBox mode="hotels"/>
    </SearchLandingHero>

    <section className="section landing-options-section">
      <div className="wrap">
        <div className="section-head"><div><div className="eyebrow">איפה מתחילים?</div><h2>יעדים פופולריים לחיפוש מלון</h2><p>בחרו עיר ונעבור ישירות למסך ההשוואה.</p></div></div>
        <div className="hotel-destination-grid">
          {hotelDestinations.map(h=><Link key={h.city} href={`/hotels/results?to=${encodeURIComponent(h.to)}`} className="hotel-destination-card">
            <img src={h.image} alt={h.city}/><div><span>מלונות ב</span><strong>{h.city}</strong><p>{h.subtitle}</p><b>להשוואת מלונות <ArrowUpRight size={15}/></b></div>
          </Link>)}
        </div>
      </div>
    </section>
  </main>;
}
