'use client';

import {useMemo,useRef,useState,useEffect,type FormEvent} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {
  Search,MapPin,CalendarDays,Users,Plane,Hotel,PackageOpen,
  ArrowLeftRight,Minus,Plus,ChevronDown,Trash2
} from 'lucide-react';
import {airports,Airport} from '@/lib/data';

type Mode='flights'|'hotels'|'packages';
type Trip='round'|'oneway'|'multi';
type Segment={from:string;to:string;date:string};

const iso=(d:Date)=>{
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
};
const addDays=(n:number)=>{const d=new Date();d.setDate(d.getDate()+n);return iso(d)};
const airportText=(a:Airport)=>`${a.city} (${a.iata})`;

function AirportInput({label,value,onChange,placeholder}:{label:string;value:string;onChange:(v:string)=>void;placeholder:string}){
  const [open,setOpen]=useState(false);
  const [query,setQuery]=useState(value);
  const ref=useRef<HTMLDivElement>(null);

  useEffect(()=>setQuery(value),[value]);
  useEffect(()=>{
    const h=(e:MouseEvent)=>{if(ref.current&&!ref.current.contains(e.target as Node))setOpen(false)};
    document.addEventListener('mousedown',h);
    return()=>document.removeEventListener('mousedown',h);
  },[]);

  const hits=useMemo(()=>{
    const q=query.toLowerCase().replace(/[()]/g,' ').trim();
    if(!q)return airports.slice(0,8);
    return airports.filter(a=>`${a.city} ${a.iata} ${a.country} ${a.name}`.toLowerCase().includes(q)).slice(0,8);
  },[query]);

  return <div className="field airport-field" ref={ref}>
    <label><MapPin size={15}/>{label}</label>
    <input value={query} placeholder={placeholder} onFocus={()=>setOpen(true)} onChange={e=>{setQuery(e.target.value);onChange(e.target.value);setOpen(true)}} autoComplete="off"/>
    {open&&<div className="autocomplete">
      {hits.length?hits.map(a=><button key={`${a.iata}-${a.name}`} type="button" className="airport-option" onClick={()=>{const t=airportText(a);setQuery(t);onChange(t);setOpen(false)}}>
        <span className="iata">{a.iata}</span>
        <span className="airport-name"><strong>{a.city}, {a.country}</strong><small>{a.name}</small></span>
      </button>):<div className="empty-suggestion">לא מצאנו יעד תואם</div>}
    </div>}
  </div>;
}

export function SearchBox({
  mode='flights',compact=false,initialFrom='תל אביב (TLV)',initialTo
}:{
  mode?:Mode;compact?:boolean;initialFrom?:string;initialTo?:string
}){
  const router=useRouter();
  const defaultTo=initialTo || (mode==='hotels'?'בודפשט':'בודפשט (BUD)');
  const [trip,setTrip]=useState<Trip>('round');
  const [from,setFrom]=useState(initialFrom);
  const [to,setTo]=useState(defaultTo);
  const [depart,setDepart]=useState(addDays(30));
  const [ret,setRet]=useState(addDays(37));
  const [passengerOpen,setPassengerOpen]=useState(false);
  const [adults,setAdults]=useState(1);
  const [children,setChildren]=useState(0);
  const [rooms,setRooms]=useState(1);
  const [cabin,setCabin]=useState('economy');
  const [segments,setSegments]=useState<Segment[]>([
    {from:initialFrom,to:defaultTo,date:addDays(30)},
    {from:defaultTo,to:'רומא (FCO)',date:addDays(34)}
  ]);

  const total=adults+children;
  const swap=()=>{const a=from;setFrom(to);setTo(a)};
  const updateSegment=(i:number,key:keyof Segment,value:string)=>setSegments(v=>v.map((s,idx)=>idx===i?{...s,[key]:value}:s));
  const addSegment=()=>setSegments(v=>v.length>=4?v:[...v,{from:v[v.length-1]?.to||'',to:'',date:addDays(38+v.length*3)}]);
  const removeSegment=(i:number)=>setSegments(v=>v.length<=2?v:v.filter((_,idx)=>idx!==i));

  const submit=(e:FormEvent)=>{
    e.preventDefault();
    const p=new URLSearchParams({
      from,to,depart,ret:trip==='oneway'?'':ret,
      adults:String(adults),children:String(children),rooms:String(rooms),cabin,trip
    });
    if(trip==='multi')p.set('segments',segments.map(s=>`${s.from}|${s.to}|${s.date}`).join('~'));
    if(mode==='flights')router.push(`/flights/results?${p}`);
    if(mode==='hotels')router.push(`/hotels/results?${p}`);
    if(mode==='packages')router.push(`/packages?${p}#ideas`);
  };

  return <div className={`search-card ${compact?'compact-search':''}`}>
    <div className="search-tabs" aria-label="סוג חיפוש">
      <Link className={mode==='flights'?'active':''} href="/flights"><Plane size={16}/>טיסות</Link>
      <Link className={mode==='hotels'?'active':''} href="/hotels"><Hotel size={16}/>מלונות</Link>
      <Link className={mode==='packages'?'active':''} href="/packages"><PackageOpen size={16}/>טיסה + מלון</Link>
    </div>

    {mode!=='hotels'&&<div className="trip-row">
      <button type="button" className={trip==='round'?'trip-active':''} onClick={()=>setTrip('round')}>הלוך ושוב</button>
      <button type="button" className={trip==='oneway'?'trip-active':''} onClick={()=>setTrip('oneway')}>כיוון אחד</button>
      {mode==='flights'&&<button type="button" className={trip==='multi'?'trip-active':''} onClick={()=>setTrip('multi')}>מספר יעדים</button>}
    </div>}

    <form className={`search-grid mode-${mode} trip-${trip} ${trip==='multi'?'multi-mode':''}`} onSubmit={submit}>
      {trip==='multi'&&mode==='flights'?<div className="multi-city-list">
        {segments.map((segment,i)=><div className="multi-city-row" key={i}>
          <span className="segment-number">{i+1}</span>
          <AirportInput label="מאיפה" value={segment.from} onChange={v=>updateSegment(i,'from',v)} placeholder="עיר או שדה תעופה"/>
          <AirportInput label="לאן" value={segment.to} onChange={v=>updateSegment(i,'to',v)} placeholder="יעד הבא"/>
          <div className="field"><label><CalendarDays size={15}/>תאריך</label><input type="date" value={segment.date} min={iso(new Date())} onChange={e=>updateSegment(i,'date',e.target.value)}/></div>
          {segments.length>2&&<button type="button" className="segment-remove" onClick={()=>removeSegment(i)} aria-label="מחיקת מקטע"><Trash2 size={17}/></button>}
        </div>)}
        <button type="button" className="add-segment" onClick={addSegment} disabled={segments.length>=4}><Plus size={16}/>הוספת יעד</button>
      </div>:<>
        {mode!=='hotels'&&<div className="route-fields">
          <AirportInput label="מאיפה" value={from} onChange={setFrom} placeholder="עיר או שדה תעופה"/>
          <button className="swap-button" type="button" onClick={swap} aria-label="החלפת מוצא ויעד"><ArrowLeftRight size={18}/></button>
          <AirportInput label="לאן" value={to} onChange={setTo} placeholder="לאן טסים?"/>
        </div>}
        {mode==='hotels'&&<AirportInput label="יעד" value={to} onChange={setTo} placeholder="עיר או יעד"/>}
        <div className="field"><label><CalendarDays size={15}/>{mode==='hotels'?'צ׳ק-אין':'הלוך'}</label><input type="date" value={depart} min={iso(new Date())} onChange={e=>setDepart(e.target.value)}/></div>
        {(mode==='hotels'||trip==='round')&&<div className="field"><label><CalendarDays size={15}/>{mode==='hotels'?'צ׳ק-אאוט':'חזור'}</label><input type="date" value={ret} min={depart} onChange={e=>setRet(e.target.value)}/></div>}
      </>}

      {mode!=='hotels'&&<div className="field cabin-field">
        <label><Plane size={15}/>מחלקה</label>
        <select value={cabin} onChange={e=>setCabin(e.target.value)} aria-label="מחלקת טיסה">
          <option value="economy">תיירים</option>
          <option value="premium">תיירים פרימיום</option>
          <option value="business">עסקים</option>
          <option value="first">ראשונה</option>
        </select>
      </div>}

      <div className="field passenger-field">
        <label><Users size={15}/>נוסעים{mode!=='flights'?' וחדרים':''}</label>
        <button type="button" className="passenger-trigger" onClick={()=>setPassengerOpen(v=>!v)}>
          {total} {total===1?'נוסע':'נוסעים'}{mode!=='flights'?` · ${rooms} ${rooms===1?'חדר':'חדרים'}`:''}<ChevronDown size={16}/>
        </button>
        {passengerOpen&&<div className="passenger-popover">
          <Counter label="מבוגרים" sub="מגיל 12" value={adults} min={1} set={setAdults}/>
          <Counter label="ילדים" sub="עד גיל 11" value={children} min={0} set={setChildren}/>
          {mode!=='flights'&&<Counter label="חדרים" sub="מספר החדרים" value={rooms} min={1} set={setRooms}/>} 
          <button type="button" className="done-button" onClick={()=>setPassengerOpen(false)}>סיימתי</button>
        </div>}
      </div>

      <button className="search-submit" type="submit"><Search size={21}/><span>חיפוש</span></button>
    </form>
    <div className="search-note">אנחנו משווים הצעות · ההזמנה והתשלום מתבצעים באתר הספק</div>
  </div>;
}

function Counter({label,sub,value,min,set}:{label:string;sub:string;value:number;min:number;set:(v:number)=>void}){
  return <div className="counter-row"><div><strong>{label}</strong><small>{sub}</small></div><div className="counter"><button type="button" onClick={()=>set(Math.max(min,value-1))}><Minus size={15}/></button><span>{value}</span><button type="button" onClick={()=>set(value+1)}><Plus size={15}/></button></div></div>;
}
