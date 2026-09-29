import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowUpRight,Hotel,Plane} from 'lucide-react';

type Item={city:string;to:string;hotelTo:string;tag:string;reason:string};
type Category={title:string;subtitle:string;image:string;items:Item[];note?:string};

const categories:Record<string,Category>={
  city:{title:'חופשה אורבנית',subtitle:'ערים שקל למלא בהן כמה ימים של אוכל, תרבות, הליכה וקניות.',image:'/assets/icon-destinations.webp',items:[
    {city:'בודפשט',to:'בודפשט (BUD)',hotelTo:'בודפשט',tag:'סופ״ש קליל',reason:'מרכז קומפקטי, אוכל, שווקים וחיי לילה.'},
    {city:'רומא',to:'רומא (FCO)',hotelTo:'רומא',tag:'קלאסיקה אירופית',reason:'אוכל, היסטוריה ושכונות שכיף ללכת בהן.'},
    {city:'פראג',to:'פראג (PRG)',hotelTo:'פראג',tag:'עיר יפה ונוחה',reason:'מרכז נוח לטיול קצר ואווירה אירופית.'},
    {city:'ברצלונה',to:'ברצלונה (BCN)',hotelTo:'ברצלונה',tag:'עיר + ים',reason:'אדריכלות, אוכל, שופינג וחוף באותו טיול.'},
  ]},
  shopping:{title:'יעדים לשופינג',subtitle:'ערים שבהן אפשר לשלב חופשה עירונית עם רחובות קניות, שווקים ומותגים.',image:'/assets/icon-shopping.webp',items:[
    {city:'לונדון',to:'לונדון (LHR)',hotelTo:'לונדון',tag:'הכול מהכול',reason:'אוקספורד סטריט, קובנט גארדן ושווקים.'},
    {city:'מילאנו',to:'מילאנו (MXP)',hotelTo:'מילאנו',tag:'אופנה',reason:'מותגים, אאוטלטים ורחובות קניות מרכזיים.'},
    {city:'פריז',to:'פריז (CDG)',hotelTo:'פריז',tag:'שופינג + קלאסיקה',reason:'בתי כלבו, בוטיקים ושכונות יפות.'},
    {city:'ניו יורק',to:'ניו יורק (JFK)',hotelTo:'ניו יורק',tag:'קניות בגדול',reason:'חנויות דגל, אאוטלטים ושכונות שונות.'},
  ]},
  'last-minute':{title:'רעיונות לדקה 90',subtitle:'כשאפשר להיות גמישים, מתחילים מיעדים עם טיסות קצרות ותדירות יחסית גבוהה — ואז בודקים מחיר חי.',image:'/assets/icon-deals.webp',note:'אין כאן “דילים” מומצאים. מחיר יוצג רק דרך ספק חי לאחר חיבור API / Affiliate.',items:[
    {city:'לרנקה',to:'לרנקה (LCA)',hotelTo:'לרנקה',tag:'קרוב ופשוט',reason:'יעד קצר שמתאים גם להחלטה מהירה.'},
    {city:'אתונה',to:'אתונה (ATH)',hotelTo:'אתונה',tag:'עיר קצרה',reason:'טיסה קצרה והרבה אפשרויות ללינה.'},
    {city:'בודפשט',to:'בודפשט (BUD)',hotelTo:'בודפשט',tag:'עיר פופולרית',reason:'מתאימה לסופ״ש ולחיפוש גמיש.'},
    {city:'בוקרשט',to:'בוקרשט (OTP)',hotelTo:'בוקרשט',tag:'עוד כיוון לבדיקה',reason:'יעד עירוני נגיש שכדאי להכניס להשוואה.'},
  ]},
  'north-america':{title:'צפון אמריקה',subtitle:'רעיונות לטיול גדול יותר — ערים, פארקים, שופינג וטיולי המשך.',image:'/assets/icon-flights.webp',items:[
    {city:'ניו יורק',to:'ניו יורק (JFK)',hotelTo:'ניו יורק',tag:'עיר ללא הפסקה',reason:'אטרקציות, אוכל, שופינג ומחזות זמר.'},
    {city:'אורלנדו',to:'אורלנדו (MCO)',hotelTo:'אורלנדו',tag:'פארקים ומשפחות',reason:'בסיס לחופשת פארקים ארוכה.'},
    {city:'לוס אנג׳לס',to:'לוס אנג׳לס (LAX)',hotelTo:'לוס אנג׳לס',tag:'מערב ארה״ב',reason:'עיר, חופים ונקודת פתיחה לרוד טריפ.'},
    {city:'טורונטו',to:'טורונטו (YYZ)',hotelTo:'טורונטו',tag:'קנדה עירונית',reason:'עיר גדולה ונוחה לשילוב עם המשך טיול.'},
  ]},
  beaches:{title:'חופים ואיים',subtitle:'יעדים שבהם החופשה מתחילה בים, שמש וקצב רגוע יותר.',image:'/assets/icon-beaches.webp',items:[
    {city:'לרנקה',to:'לרנקה (LCA)',hotelTo:'לרנקה',tag:'קרוב לים',reason:'חופשה קצרה וקלה ליד החוף.'},
    {city:'אתונה + איים',to:'אתונה (ATH)',hotelTo:'אתונה',tag:'עיר לפני האי',reason:'נקודת פתיחה נוחה לשילוב עם איים יווניים.'},
    {city:'ברצלונה',to:'ברצלונה (BCN)',hotelTo:'ברצלונה',tag:'עיר וחוף',reason:'יום בעיר ויום ליד הים בלי לבחור רק אחד.'},
    {city:'פלמה דה מיורקה',to:'פלמה דה מיורקה (PMI)',hotelTo:'פלמה דה מיורקה',tag:'אי ספרדי',reason:'חופים, מפרצים ואווירת קיץ.'},
  ]},
  food:{title:'אוכל וקולינריה',subtitle:'יעדים שבהם המסעדות, השווקים והטעמים הם חלק מרכזי מהטיול.',image:'/assets/icon-food.webp',items:[
    {city:'רומא',to:'רומא (FCO)',hotelTo:'רומא',tag:'איטליה בצלחת',reason:'פסטה, פיצה, שווקים וטרטוריות.'},
    {city:'ברצלונה',to:'ברצלונה (BCN)',hotelTo:'ברצלונה',tag:'טאפאס ושווקים',reason:'אוכל מקומי, שווקים וברים קטנים.'},
    {city:'אתונה',to:'אתונה (ATH)',hotelTo:'אתונה',tag:'יווני מקומי',reason:'טברנות, שווקים ואוכל פשוט וטוב.'},
    {city:'פריז',to:'פריז (CDG)',hotelTo:'פריז',tag:'קונדיטוריות וביסטרו',reason:'מאפים, שווקים ומסעדות בכל שכונה.'},
  ]},
  family:{title:'חופשה משפחתית',subtitle:'יעדים שנותנים הרבה אפשרויות ביום אחד ומתאימים לקצב של משפחה.',image:'/assets/icon-packages.webp',items:[
    {city:'אורלנדו',to:'אורלנדו (MCO)',hotelTo:'אורלנדו',tag:'פארקים',reason:'מבחר גדול של פארקים ומלונות למשפחות.'},
    {city:'לונדון',to:'לונדון (LHR)',hotelTo:'לונדון',tag:'עיר עם ילדים',reason:'מוזיאונים, אטרקציות, מופעים ותחבורה נוחה.'},
    {city:'פריז',to:'פריז (CDG)',hotelTo:'פריז',tag:'עיר + פארקים',reason:'אפשר לשלב עיר, אטרקציות וטיולי יום.'},
    {city:'וינה',to:'וינה (VIE)',hotelTo:'וינה',tag:'נוחה ומסודרת',reason:'תחבורה טובה, פארקים ואטרקציות משפחתיות.'},
  ]},
  nightlife:{title:'חיי לילה',subtitle:'יעדים שמתעוררים בערב עם ברים, מוזיקה, שכונות תוססות ואווירה.',image:'/assets/icon-evening.webp',items:[
    {city:'בודפשט',to:'בודפשט (BUD)',hotelTo:'בודפשט',tag:'ברים מיוחדים',reason:'רובע שביעי, ברים ואווירה עד מאוחר.'},
    {city:'ברלין',to:'ברלין (BER)',hotelTo:'ברלין',tag:'מוזיקה ומועדונים',reason:'מגוון גדול של סצנות וחיי לילה.'},
    {city:'פראג',to:'פראג (PRG)',hotelTo:'פראג',tag:'ערב במרכז',reason:'ברים ומקומות בילוי במרחקים קצרים.'},
    {city:'ברצלונה',to:'ברצלונה (BCN)',hotelTo:'ברצלונה',tag:'לילה ליד הים',reason:'ברים, מסעדות וחיי לילה עד שעות מאוחרות.'},
  ]},
};

export async function generateStaticParams(){return Object.keys(categories).map(slug=>({slug}));}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const category=categories[slug];
  if(!category)notFound();

  return <main>
    <section className="discover-hero">
      <div className="wrap discover-hero-inner">
        <div className="discover-hero-copy"><div className="eyebrow">רעיונות לפי סגנון</div><h1>{category.title}</h1><p>{category.subtitle}</p>{category.note&&<div className="source-note">{category.note}</div>}</div>
        <img src={category.image} alt=""/>
      </div>
    </section>

    <section className="section compact">
      <div className="wrap">
        <div className="section-head"><div><div className="eyebrow">אפשר להתחיל מכאן</div><h2>יעדים שמתאימים לקטגוריה</h2></div></div>
        <div className="discover-grid">
          {category.items.map(item=><article className="discover-card" key={item.city}>
            <span>{item.tag}</span><h3>{item.city}</h3><p>{item.reason}</p>
            <div className="discover-actions">
              <Link className="discover-primary" href={`/flights/results?from=${encodeURIComponent('תל אביב (TLV)')}&to=${encodeURIComponent(item.to)}`}><Plane size={16}/>חיפוש טיסות <ArrowUpRight size={15}/></Link>
              <Link className="discover-secondary" href={`/hotels/results?to=${encodeURIComponent(item.hotelTo)}`}><Hotel size={16}/>מלונות</Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  </main>;
}
