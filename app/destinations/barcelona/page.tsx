import Link from 'next/link';
import {ArrowUpRight,CalendarDays,MapPin,Plane,Hotel,PackageOpen,Utensils,ShoppingBag,Camera,Sun,TrainFront,Heart,Star} from 'lucide-react';

export const metadata={title:'ברצלונה | מדריך יעד'};

const areas=[
  {name:'אישמפלה',text:'רחובות רחבים, אדריכלות מודרניסטית, מסעדות וקניות. בסיס נוח במיוחד לביקור ראשון בעיר.',tag:'מרכזי ונוח'},
  {name:'הרובע הגותי',text:'סמטאות, כיכרות ואווירה היסטורית. מתאים למי שאוהב לטייל ברגל ולהישאר קרוב לאתרים.',tag:'אווירה והיסטוריה'},
  {name:'אל בורן',text:'בתי קפה, ברים, חנויות קטנות ואופי מקומי יותר — אזור מצוין לערבים רגועים.',tag:'אוכל ואווירה'},
  {name:'ברצלונטה',text:'למי שרוצה לשלב עיר עם ים, טיילת ומסעדות ליד החוף.',tag:'עיר + ים'},
];

const highlights=[
  {title:'סגרדה פמיליה',text:'אחד הסמלים המזוהים ביותר עם ברצלונה. מומלץ להזמין כניסה מראש.',image:'https://images.unsplash.com/photo-1583779457094-ab6f2f0b9b76?auto=format&fit=crop&w=1200&q=86'},
  {title:'פארק גואל',text:'צבע, אדריכלות ונקודות תצפית. מתאים לבוקר נעים או לקראת שקיעה.',image:'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=86'},
  {title:'לה בוקריה',text:'טאפאס, פירות, מיצים ודוכנים צבעוניים בלב העיר.',image:'https://images.unsplash.com/photo-1559570278-eb8d71d06403?auto=format&fit=crop&w=1200&q=86'},
];

export default function BarcelonaPage(){
  return <main className="editorial-destination">
    <section className="destination-journal-hero">
      <div className="wrap destination-journal-grid">
        <div className="destination-journal-copy">
          <div className="journal-kicker">ברוכים הבאים</div>
          <h1>ברצלונה</h1>
          <h2>עיר של אמנות, חופים, טעמים ואנשים</h2>
          <p>ברצלונה היא יעד שקל להתאהב בו: אדריכלות יוצאת דופן, שכונות מלאות אופי, אוכל מעולה, שופינג, חוף בתוך העיר ואווירה שמצליחה להיות גם אורבנית וגם קלילה.</p>
          <div className="journal-mini-note"><Heart size={15}/> בחירה מצוינת לחופשה עירונית של כמה ימים</div>
        </div>

        <div className="destination-collage" aria-label="קולאז׳ תמונות מברצלונה">
          <div className="collage-main"><img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1500&q=88" alt="ברצלונה"/></div>
          <div className="collage-polaroid collage-one"><img src="https://images.unsplash.com/photo-1583779457094-ab6f2f0b9b76?auto=format&fit=crop&w=700&q=86" alt="סגרדה פמיליה"/><span>סגרדה פמיליה</span></div>
          <div className="collage-polaroid collage-two"><img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=700&q=86" alt="רחוב בברצלונה"/><span>ברצלונה</span></div>
          <div className="collage-wash collage-wash-one"/><div className="collage-wash collage-wash-two"/>
        </div>
      </div>
    </section>

    <section className="destination-journal-summary"><div className="wrap destination-summary-grid">
      <div className="destination-booking-card">
        <h3>מתכננים חופשה?</h3>
        <div className="destination-booking-links">
          <Link href="/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)" className="active"><Plane size={18}/>טיסות</Link>
          <Link href="/hotels/results?to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94"><Hotel size={18}/>מלונות</Link>
          <Link href="/packages?to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)#ideas"><PackageOpen size={18}/>טיסה + מלון</Link>
          <Link href="/deals"><Star size={18}/>דילים</Link>
        </div>
      </div>
      <div className="destination-fact-panel">
        <h3>פרטים שימושיים</h3>
        <div><span><Plane size={17}/>שדה תעופה</span><strong>BCN</strong></div>
        <div><span><CalendarDays size={17}/>כמה זמן?</span><strong>4–5 ימים</strong></div>
        <div><span><Sun size={17}/>אופי החופשה</span><strong>עיר + ים</strong></div>
        <div><span><TrainFront size={17}/>התניידות</span><strong>מטרו + הליכה</strong></div>
      </div>
    </div></section>

    <section className="section destination-section journal-section"><div className="wrap">
      <div className="section-head"><div><div className="eyebrow">איפה כדאי לישון?</div><h2>אזורים שכדאי להכיר</h2><p>לכל אזור יש אופי אחר, ולכן כדאי לבחור את המיקום לפי הסגנון שאתם רוצים לחופשה.</p></div></div>
      <div className="destination-area-grid journal-card-grid">{areas.map(a=><article key={a.name}><span className="paper-tag">{a.tag}</span><MapPin/><h3>{a.name}</h3><p>{a.text}</p></article>)}</div>
    </div></section>

    <section className="section destination-section journal-section journal-tinted"><div className="wrap">
      <div className="section-head"><div><div className="eyebrow">לא לפספס</div><h2>שלושה מקומות לפתוח איתם את הטיול</h2><p>שלוש נקודות קלאסיות שנותנות טעימה טובה מהאופי של ברצלונה.</p></div></div>
      <div className="destination-highlight-grid journal-highlight-grid">{highlights.map((h,i)=><article key={h.title}><div className="journal-photo-wrap"><img src={h.image} alt={h.title}/><span className="photo-number">0{i+1}</span></div><div><h3>{h.title}</h3><p>{h.text}</p></div></article>)}</div>
    </div></section>

    <section className="section destination-gallery-section journal-section"><div className="wrap">
      <div className="section-head"><div><div className="eyebrow">קצת השראה</div><h2>ברצלונה באווירה שאנחנו אוהבים</h2><p>שילוב של רחובות יפים, ארכיטקטורה, ים וצבעים חמים.</p></div></div>
      <div className="destination-gallery journal-gallery"><img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1500&q=88" alt="ברצלונה"/><img src="https://images.unsplash.com/photo-1562883676-8c7feb83f09b?auto=format&fit=crop&w=1500&q=88" alt="רחובות ברצלונה"/><img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1500&q=88" alt="אדריכלות בברצלונה"/></div>
    </div></section>

    <section className="section destination-cta-section"><div className="wrap destination-cta journal-cta"><div><span>מוכנים להתחיל?</span><h2>החיפוש לברצלונה מתחיל מכאן</h2><p>בחרו טיסה, מלון או שילוב של שניהם והמשיכו משם לספק.</p></div><Link href="/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)" className="destination-primary">לחיפוש טיסות <ArrowUpRight size={18}/></Link></div></section>
  </main>;
}
