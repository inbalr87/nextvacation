import {SearchBox} from '@/components/SearchBox';
import {FlightResultsClient} from '@/components/FlightResultsClient';

type SP=Promise<{[key:string]:string|string[]|undefined}>;
const get=(q:Awaited<SP>,k:string,d:string)=>typeof q[k]==='string'?q[k] as string:d;
const cabinName=(v:string)=>({economy:'תיירים',premium:'תיירים פרימיום',business:'עסקים',first:'ראשונה'}[v]||'תיירים');

export const metadata={title:'תוצאות טיסות'};

export default async function Page({searchParams}:{searchParams:SP}){
  const q=await searchParams;
  const from=get(q,'from','תל אביב (TLV)');
  const to=get(q,'to','בודפשט (BUD)');
  const depart=get(q,'depart','');
  const ret=get(q,'ret','');
  const adults=get(q,'adults','1');
  const trip=get(q,'trip','round');
  const cabin=get(q,'cabin','economy');
  const rawSegments=get(q,'segments','');
  const segments=rawSegments?rawSegments.split('~').map(s=>s.split('|')).filter(s=>s.length>=3):[];
  const firstFrom=segments[0]?.[0]||from;
  const firstTo=segments[0]?.[1]||to;

  return <main>
    <section className="results-search-wrap"><div className="wrap"><SearchBox mode="flights" compact initialFrom={firstFrom} initialTo={firstTo}/></div></section>
    <section className="results-heading"><div className="wrap"><div><div className="eyebrow">תוצאות חיפוש</div>
      {trip==='multi'?<><h1>מסלול עם <span>{segments.length}</span> מקטעים</h1><div className="multi-summary">{segments.map((s,i)=><span key={i}>{s[0]} ← {s[1]} · {s[2]}</span>)}</div></>:<><h1>{from} <span>←</span> {to}</h1><p>{depart}{ret?` עד ${ret}`:''} · {adults} {adults==='1'?'נוסע':'נוסעים'} · {cabinName(cabin)}</p></>}
    </div></div></section>
    {trip==='multi'&&<div className="wrap"><div className="demo-data-note multi-demo-note"><strong>מספר יעדים מוכן בממשק.</strong> תוצאות Multi-city אמיתיות יופיעו לאחר חיבור API שתומך במסלולים מרובי מקטעים. כרגע הכרטיסים למטה מדגימים את מבנה התוצאות לפי המקטע הראשון.</div></div>}
    <section className="section compact"><div className="wrap"><FlightResultsClient from={firstFrom} to={firstTo} trip={trip}/></div></section>
  </main>;
}
