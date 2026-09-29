import Link from 'next/link';
import {ArrowUpRight,CalendarDays,MapPin,Plane,Hotel,PackageOpen,Utensils,ShoppingBag,Camera} from 'lucide-react';

export const metadata={title:'ברצלונה | מדריך יעד'};

const areas=[
  {name:'אישמפלה',text:'רחובות רחבים, אדריכלות מודרניסטית, מסעדות וקניות. בסיס מצוין למי שרוצה להיות במרכז העניינים.'},
  {name:'הרובע הגותי',text:'סמטאות, כיכרות ואווירה היסטורית. מתאים למי שאוהב ללכת ברגל ולהיות קרוב לאתרים מרכזיים.'},
  {name:'אל בורן',text:'אזור מלא בתי קפה, ברים, חנויות קטנות ואופי מקומי יותר.'},
  {name:'ברצלונטה',text:'למי שרוצה לשלב עיר עם ים, טיילת ומסעדות ליד החוף.'},
];

const highlights=[
  {title:'סגרדה פמיליה',text:'אחד הסמלים המזוהים ביותר עם העיר. מומלץ להזמין כניסה מראש.',image:'https://images.unsplash.com/photo-1583779457094-ab6f2f0b9b76?auto=format&fit=crop&w=1200&q=86'},
  {title:'פארק גואל',text:'צבע, אדריכלות ונקודות תצפית. מקום מעולה לשלב בבוקר או לקראת שקיעה.',image:'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=86'},
  {title:'שוק לה בוקריה',text:'טעימה מהעיר דרך פירות, טאפאס, מיצים ודוכנים צבעוניים.',image:'https://images.unsplash.com/photo-1559570278-eb8d71d06403?auto=format&fit=crop&w=1200&q=86'},
];

export default function BarcelonaPage(){
  return <main>
    <section className="destination-hero destination-barcelona-hero">
      <div className="destination-hero-overlay"/>
      <div className="wrap destination-hero-content">
        <span>ספרד · יעד פופולרי</span>
        <h1>ברצלונה</h1>
        <p>עיר שמצליחה לשלב אדריכלות, אוכל, שופינג, חופים וחיי ערב — בלי לבחור רק סגנון אחד של חופשה.</p>
        <div className="destination-hero-actions">
          <Link href="/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)" className="destination-primary"><Plane size={18}/>חיפוש טיסות</Link>
          <Link href="/hotels/results?to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94" className="destination-secondary"><Hotel size={18}/>חיפוש מלונות</Link>
          <Link href="/packages?to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)#ideas" className="destination-secondary"><PackageOpen size={18}/>טיסה + מלון</Link>
        </div>
      </div>
    </section>

    <section className="section destination-intro"><div className="wrap"><div className="destination-facts"><div><CalendarDays/><strong>כמה זמן?</strong><span>4–5 ימים מתאימים לחופשה עירונית טובה.</span></div><div><Utensils/><strong>למה מגיעים?</strong><span>אוכל, אדריכלות, שווקים ושכונות עם אופי.</span></div><div><ShoppingBag/><strong>שופינג</strong><span>רחובות מרכזיים, מותגים, שווקים וחנויות מקומיות.</span></div><div><Camera/><strong>אווירה</strong><span>עיר צבעונית ופוטוגנית עם חוף בתוך העיר.</span></div></div></div></section>

    <section className="section destination-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">איפה כדאי לישון?</div><h2>אזורים שכדאי להכיר</h2><p>המיקום משפיע מאוד על אופי החופשה — ולכן כדאי לבחור אזור לפני שבוחרים מלון.</p></div></div><div className="destination-area-grid">{areas.map(a=><article key={a.name}><MapPin/><h3>{a.name}</h3><p>{a.text}</p></article>)}</div></div></section>

    <section className="section destination-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">לא לפספס</div><h2>שלושה מקומות לפתוח איתם את הטיול</h2></div></div><div className="destination-highlight-grid">{highlights.map(h=><article key={h.title}><img src={h.image} alt={h.title}/><div><h3>{h.title}</h3><p>{h.text}</p></div></article>)}</div></div></section>

    <section className="section destination-gallery-section"><div className="wrap"><div className="section-head"><div><div className="eyebrow">קצת השראה</div><h2>ברצלונה בתמונות</h2></div></div><div className="destination-gallery"><img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1500&q=88" alt="ברצלונה"/><img src="https://images.unsplash.com/photo-1562883676-8c7feb83f09b?auto=format&fit=crop&w=1500&q=88" alt="רחובות ברצלונה"/><img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1500&q=88" alt="אדריכלות בברצלונה"/></div></div></section>

    <section className="section destination-cta-section"><div className="wrap destination-cta"><div><span>מוכנים להתחיל?</span><h2>החיפוש לברצלונה מתחיל מכאן</h2><p>בחרו טיסה, מלון או שילוב של שניהם — והמשיכו משם לספק.</p></div><Link href="/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)" className="destination-primary">לחיפוש טיסות <ArrowUpRight size={18}/></Link></div></section>
  </main>;
}
