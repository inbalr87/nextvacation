import Link from 'next/link';
import {
  ArrowUpRight, CalendarDays, MapPin, Plane, Hotel, PackageOpen,
  Utensils, ShoppingBag, Camera, Sun, TrainFront, Languages, Clock,
  CloudSun, Waves, MoonStar, ShieldCheck, Info
} from 'lucide-react';

export const metadata={title:'ברצלונה | מדריך יעד'};

const quickFacts=[
  {icon:<MapPin size={18}/>,label:'איפה?',value:'קטלוניה, צפון־מזרח ספרד · הים התיכון'},
  {icon:<span className="fact-symbol">€</span>,label:'מטבע',value:'אירו (EUR)'},
  {icon:<Languages size={18}/>,label:'שפות',value:'קטלאנית וספרדית'},
  {icon:<Plane size={18}/>,label:'שדה תעופה',value:'Barcelona–El Prat · BCN'},
  {icon:<Clock size={18}/>,label:'אזור זמן',value:'CET / CEST · בדקו הפרש מול ישראל לפי התאריך'},
  {icon:<CalendarDays size={18}/>,label:'כמה זמן?',value:'4–5 ימים לחופשה עירונית ראשונה'},
  {icon:<TrainFront size={18}/>,label:'התניידות',value:'מטרו, אוטובוסים והרבה הליכה'},
  {icon:<CloudSun size={18}/>,label:'אקלים',value:'ים־תיכוני מתון, קיץ חם וחורף מתון'},
];

const seasons=[
  {season:'חורף',months:'דצמבר–פברואר',temp:'כ־12–16° ביום',note:'נעים יחסית לטיול עירוני, פחות מתאים לחוף.'},
  {season:'אביב',months:'מרץ–מאי',temp:'כ־17–23° ביום',note:'אחת התקופות הנעימות להליכה ולשילוב אטרקציות.'},
  {season:'קיץ',months:'יוני–אוגוסט',temp:'כ־26–30° ביום',note:'חם ולח יותר, עמוס יותר – אבל מצוין לשילוב חוף.'},
  {season:'סתיו',months:'ספטמבר–נובמבר',temp:'כ־18–25° ביום',note:'ספטמבר–אוקטובר מצוינים לשילוב עיר וים.'},
];

const areas=[
  {name:'אישמפלה',tag:'מרכזי ונוח',text:'רחובות רחבים, אדריכלות מודרניסטית, מסעדות וקניות. בחירה מצוינת לביקור ראשון ולמי שרוצה להיות קרוב לרוב האתרים.'},
  {name:'הרובע הגותי',tag:'היסטוריה ואווירה',text:'סמטאות, כיכרות ומבנים היסטוריים בלב העיר העתיקה. נהדר למי שאוהב לטייל ברגל ולהרגיש את ברצלונה גם בערב.'},
  {name:'אל בורן',tag:'אוכל וערב',text:'בתי קפה, ברים, בוטיקים ואופי מקומי יותר. אחד האזורים הכיפיים לשילוב של אוכל, שיטוט וחיי ערב.'},
  {name:'גרסיה',tag:'יותר מקומי',text:'שכונה נעימה עם כיכרות קטנות, מסעדות ותחושה פחות תיירותית. מתאימה למי שמעדיף קצב רגוע יותר.'},
  {name:'ברצלונטה',tag:'עיר + ים',text:'טיילת, חוף ומסעדות ליד הים. טובה למי שרוצה להיות קרוב לחוף, אבל פחות מרכזית לחלק מהאתרים.'},
  {name:'סנט אנטוני',tag:'אוכל ונגישות',text:'אזור נוח ליד אישמפלה והראבל, עם שוק, בתי קפה וקצב מקומי. בחירה טובה למי שרוצה מרכז בלי להיות ממש בלב האזור התיירותי.'},
];

const highlights=[
  {title:'סגרדה פמיליה',kicker:'Gaudí',text:'הסמל המזוהה ביותר עם העיר. מומלץ להזמין כניסה מראש ולבחור שעה שמתאימה למסלול היומי.',image:'https://images.unsplash.com/photo-1583779457094-ab6f2f0b9b76?auto=format&fit=crop&w=1200&q=86'},
  {title:'פארק גואל',kicker:'צבע ותצפיות',text:'אדריכלות, צבע ונקודות צילום. נוח לשלב בבוקר או לקראת שקיעה, בהתאם לעונה.',image:'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1200&q=86'},
  {title:'הרובע הגותי',kicker:'הליכה ואווירה',text:'סמטאות, כיכרות, ברים קטנים והיסטוריה. כדאי להשאיר זמן פשוט לשיטוט בלי מסלול קשיח.',image:'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=86'},
  {title:'מונז׳ואיק',kicker:'נוף ותרבות',text:'אזור מצוין לתצפיות, מוזיאונים וגנים. מתאים לחצי יום רגוע יותר מחוץ למרכז הצפוף.',image:'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200&q=86'},
  {title:'לה בוקריה',kicker:'טעמים ושוק',text:'דוכנים צבעוניים, פירות, מיצים וטאפאס. שווה להגיע מוקדם יותר ולהמשיך משם לרובע הגותי.',image:'https://images.unsplash.com/photo-1559570278-eb8d71d06403?auto=format&fit=crop&w=1200&q=86'},
  {title:'חוף ברצלונטה',kicker:'ים בתוך העיר',text:'לא חייבים להקדיש יום שלם לחוף – גם הליכה בטיילת ושעתיים מול הים משתלבות מעולה ביום עירוני.',image:'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?auto=format&fit=crop&w=1200&q=86'},
];

const experienceCards=[
  {icon:<Utensils/>,title:'אוכל',text:'טאפאס, pan con tomate, שווקים, פירות ים וארוחות ערב שמתחילות מאוחר יחסית.'},
  {icon:<ShoppingBag/>,title:'שופינג',text:'Passeig de Gràcia למותגים, Portal de l’Àngel לרשתות, ובוטיקים קטנים באל בורן וגרסיה.'},
  {icon:<Waves/>,title:'חופים',text:'ברצלונטה היא המוכרת ביותר, אבל שווה לבדוק גם חופים מעט רחוקים יותר מהאזור הכי תיירותי.'},
  {icon:<MoonStar/>,title:'חיי ערב',text:'אל בורן, הרובע הגותי, גרסיה ואישמפלה מציעים ברים, מסעדות ואווירה שונה מאוד מאזור לאזור.'},
];

const tips=[
  'הזמינו מראש את האתרים המבוקשים – במיוחד סגרדה פמיליה ופארק גואל בתקופות עמוסות.',
  'שמרו על התיק והטלפון באזורים עמוסים ובתחבורה הציבורית, כמו בכל עיר תיירותית גדולה.',
  'אל תבנו כל יום סביב המטרו בלבד – הרבה מהקסם של העיר נמצא דווקא בהליכה בין שכונות.',
  'ארוחות ערב בספרד מתחילות מאוחר יחסית, אז כדאי להשאיר מקום בלו״ז לארוחה נינוחה.',
  'לשופינג ממוקד הקדישו חצי יום נפרד; Passeig de Gràcia והרחובות סביב Plaça Catalunya יחסכו הרבה נסיעות.',
  'אם יש לכם 5 ימים ומעלה, אפשר לשקול יום מחוץ לעיר – למשל מונסראט, סיטג׳ס או ג׳ירונה בהתאם לסגנון הטיול.'
];

export default function BarcelonaPage(){
  return <main className="magazine-destination">
    <section className="magazine-hero">
      <div className="wrap magazine-hero-grid">
        <div className="magazine-copy">
          <span className="magazine-overline">ברוכים הבאים</span>
          <h1>ברצלונה</h1>
          <h2>עיר צבעונית שמחברת בין אדריכלות, אוכל, שופינג והים</h2>
          <p>ברצלונה מתאימה למי שרוצה חופשה עירונית שלא מרגישה רק עירונית: אפשר להתחיל בבוקר עם גאודי, לעצור לטאפאס בצהריים, לעשות שופינג אחר הצהריים ולסיים את היום ליד הים.</p>
          <div className="magazine-actions">
            <Link href="/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)" className="magazine-primary"><Plane size={18}/>חיפוש טיסות</Link>
            <Link href="/hotels/results?to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94" className="magazine-secondary"><Hotel size={18}/>מלונות</Link>
            <Link href="/packages?to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)#ideas" className="magazine-secondary"><PackageOpen size={18}/>טיסה + מלון</Link>
          </div>
        </div>

        <div className="magazine-collage" aria-label="קולאז׳ השראה מברצלונה">
          <div className="magazine-main-photo"><img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1500&q=88" alt="ברצלונה"/></div>
          <figure className="magazine-polaroid polaroid-a"><img src="https://images.unsplash.com/photo-1583779457094-ab6f2f0b9b76?auto=format&fit=crop&w=800&q=86" alt="סגרדה פמיליה"/><figcaption>סגרדה פמיליה</figcaption></figure>
          <figure className="magazine-polaroid polaroid-b"><img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=86" alt="רחובות ברצלונה"/><figcaption>ברצלונה</figcaption></figure>
          <div className="magazine-stamp">BCN<br/><small>SPAIN</small></div>
          <div className="magazine-tape tape-a"/><div className="magazine-tape tape-b"/>
        </div>
      </div>
    </section>

    <section className="magazine-facts-section"><div className="wrap">
      <div className="magazine-section-heading"><span>BARCELONA FACTS</span><h2>ברצלונה בקצרה</h2><p>כל הפרטים שכדאי לדעת לפני שמתחילים לתכנן.</p></div>
      <div className="magazine-facts-board">{quickFacts.map((f,i)=><div className="magazine-fact" key={i}><div className="magazine-fact-icon">{f.icon}</div><div><span>{f.label}</span><strong>{f.value}</strong></div></div>)}</div>
    </div></section>

    <section className="magazine-weather-section"><div className="wrap magazine-two-column">
      <div className="magazine-paper-note">
        <span className="note-kicker">מתי הכי כדאי?</span>
        <h2>מזג אוויר ועונות</h2>
        <p>לברצלונה אקלים ים־תיכוני מתון. למי שרוצה הרבה הליכה ופחות עומס, מאי–יוני וספטמבר–אוקטובר הן בדרך כלל תקופות נעימות במיוחד.</p>
        <div className="season-grid">{seasons.map(s=><article key={s.season}><span>{s.months}</span><h3>{s.season}</h3><strong>{s.temp}</strong><p>{s.note}</p></article>)}</div>
        <small>* הטמפרטורות הן טווחים כלליים ויכולות להשתנות משנה לשנה.</small>
      </div>
      <div className="magazine-postcard-stack">
        <div className="postcard postcard-main"><img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=88" alt="ברצלונה בערב"/><span>עיר, ים ואוכל — באותו טיול</span></div>
        <div className="postcard postcard-small"><img src="https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=900&q=86" alt="פארק גואל"/><span>Gaudí days</span></div>
      </div>
    </div></section>

    <section className="section magazine-section"><div className="wrap">
      <div className="magazine-section-heading align-right"><span>MUST SEE</span><h2>מה לא לפספס</h2><p>שישה מקומות שנותנים תמונה טובה של העיר – לא רק רשימת וי.</p></div>
      <div className="magazine-highlight-grid">{highlights.map((h,i)=><article key={h.title}><div className="highlight-photo"><img src={h.image} alt={h.title}/><b>0{i+1}</b></div><div className="highlight-copy"><span>{h.kicker}</span><h3>{h.title}</h3><p>{h.text}</p></div></article>)}</div>
    </div></section>

    <section className="section magazine-section magazine-soft"><div className="wrap">
      <div className="magazine-section-heading"><span>STAY</span><h2>איפה כדאי לישון?</h2><p>השכונה משנה את החופשה. אלה האזורים שכדאי להכיר לפני שבוחרים מלון.</p></div>
      <div className="magazine-area-grid">{areas.map(a=><article key={a.name}><span>{a.tag}</span><MapPin/><h3>{a.name}</h3><p>{a.text}</p></article>)}</div>
    </div></section>

    <section className="section magazine-section"><div className="wrap">
      <div className="magazine-section-heading align-right"><span>EXPERIENCE</span><h2>איך בא לכם לחוות את ברצלונה?</h2></div>
      <div className="experience-grid">{experienceCards.map(c=><article key={c.title}><div>{c.icon}</div><h3>{c.title}</h3><p>{c.text}</p></article>)}</div>
    </div></section>

    <section className="section magazine-section magazine-tips-section"><div className="wrap magazine-two-column reverse-mobile">
      <div className="magazine-tips-paper"><div className="magazine-section-heading align-right"><span>GOOD TO KNOW</span><h2>הטיפים שהייתי רוצה לדעת לפני הטיסה</h2></div><ul>{tips.map(t=><li key={t}><ShieldCheck size={18}/><span>{t}</span></li>)}</ul></div>
      <div className="magazine-photo-note"><img src="https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=1200&q=86" alt="אווירה בברצלונה"/><div><Camera size={18}/><strong>השאירו זמן בלי תוכנית</strong><span>העיר מתאימה מאוד לשיטוט: רחובות, בתי קפה, חנויות קטנות וכיכרות שפשוט מוצאים בדרך.</span></div></div>
    </div></section>

    <section className="section magazine-cta-section"><div className="wrap magazine-cta"><div><span>READY TO GO?</span><h2>מתחילים לתכנן את ברצלונה</h2><p>אפשר להתחיל מטיסה, מלון או שילוב — ולבנות את החופשה משם.</p></div><Link href="/flights/results?from=%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91%20(TLV)&to=%D7%91%D7%A8%D7%A6%D7%9C%D7%95%D7%A0%D7%94%20(BCN)" className="magazine-primary">לחיפוש טיסות <ArrowUpRight size={18}/></Link></div></section>

    <div className="destination-disclaimer wrap"><Info size={16}/><span>המידע בעמוד נועד לתכנון ראשוני. שעות פתיחה, מזג אוויר, תחבורה ותנאים עשויים להשתנות – מומלץ לבדוק לפני הנסיעה.</span></div>
  </main>;
}
