export type Flight = {
  id:string; airline:string; code:string; airlineColor:string; depart:string; arrive:string; returnDepart:string; returnArrive:string;
  durationMins:number; returnDurationMins:number; price:number; direct:boolean; stops:number; via?:string; baggage:string; provider:string; score:number;
};

export const flights:Flight[] = [
  {id:'w6-1',airline:'Wizz Air',code:'W6',airlineColor:'#ca278c',depart:'10:10',arrive:'12:45',returnDepart:'14:20',returnArrive:'18:35',durationMins:215,returnDurationMins:255,price:479,direct:true,stops:0,baggage:'תיק קטן כלול',provider:'ספק A',score:91},
  {id:'ly-1',airline:'EL AL',code:'LY',airlineColor:'#2052a3',depart:'07:20',arrive:'09:55',returnDepart:'19:10',returnArrive:'23:20',durationMins:215,returnDurationMins:250,price:689,direct:true,stops:0,baggage:'תיק יד כלול',provider:'ספק B',score:86},
  {id:'a3-1',airline:'Aegean',code:'A3',airlineColor:'#1c3e8a',depart:'05:30',arrive:'11:15',returnDepart:'11:50',returnArrive:'17:40',durationMins:345,returnDurationMins:350,price:612,direct:false,stops:1,via:'אתונה',baggage:'תיק יד כלול',provider:'ספק C',score:79},
  {id:'iz-1',airline:'Arkia',code:'IZ',airlineColor:'#e83f39',depart:'13:40',arrive:'16:20',returnDepart:'08:30',returnArrive:'12:45',durationMins:220,returnDurationMins:255,price:735,direct:true,stops:0,baggage:'תיק קטן כלול',provider:'ספק D',score:82},
  {id:'fr-1',airline:'Ryanair',code:'FR',airlineColor:'#173a8d',depart:'16:50',arrive:'19:25',returnDepart:'06:05',returnArrive:'10:15',durationMins:215,returnDurationMins:250,price:524,direct:true,stops:0,baggage:'תיק קטן כלול',provider:'ספק E',score:84},
  {id:'os-1',airline:'Austrian',code:'OS',airlineColor:'#d71920',depart:'06:15',arrive:'12:10',returnDepart:'17:25',returnArrive:'23:05',durationMins:355,returnDurationMins:340,price:648,direct:false,stops:1,via:'וינה',baggage:'תיק יד כלול',provider:'ספק F',score:77},
];

export type Hotel = {id:string;name:string;stars:number;rating:number;reviews:number;area:string;distance:string;price:number;total:number;breakfast:boolean;cancel:boolean;provider:string;image:string;tags:string[]};
export const hotels:Hotel[] = [
  {id:'h1',name:'Danube Boutique Hotel',stars:4,rating:9.1,reviews:1248,area:'מרכז העיר',distance:'450 מ׳ מהמרכז',price:427,total:2989,breakfast:true,cancel:true,provider:'ספק A',image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',tags:['מיקום מצוין','ארוחת בוקר']},
  {id:'h2',name:'Central Market Residence',stars:4,rating:8.8,reviews:862,area:'הרובע החמישי',distance:'700 מ׳ מהמרכז',price:389,total:2723,breakfast:false,cancel:true,provider:'ספק B',image:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80',tags:['ביטול חינם','מרכזי']},
  {id:'h3',name:'Parliament View Hotel',stars:5,rating:9.3,reviews:1983,area:'דנובה',distance:'1.1 ק״מ מהמרכז',price:612,total:4284,breakfast:true,cancel:true,provider:'ספק C',image:'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80',tags:['נוף לנהר','ספא']},
  {id:'h4',name:'City Nest Budapest',stars:3,rating:8.5,reviews:623,area:'ארז׳בטווארוש',distance:'1.4 ק״מ מהמרכז',price:315,total:2205,breakfast:false,cancel:false,provider:'ספק D',image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',tags:['תמורה טובה','קרוב למטרו']},
  {id:'h5',name:'Rose Garden Suites',stars:4,rating:8.9,reviews:744,area:'הרובע השביעי',distance:'1.7 ק״מ מהמרכז',price:348,total:2436,breakfast:true,cancel:true,provider:'ספק E',image:'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',tags:['סוויטות','ארוחת בוקר']},
];

export const destinations = [
  {city:'רומא',iata:'FCO',subtitle:'עיר, אוכל וסופ״ש קצר',image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80'},
  {city:'בודפשט',iata:'BUD',subtitle:'עיר קלה וכיפית לחופשה',image:'https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=900&q=80'},
  {city:'לונדון',iata:'LON',subtitle:'שופינג, מחזות זמר ואווירה',image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80'},
  {city:'אתונה',iata:'ATH',subtitle:'אוכל, שמש והיסטוריה',image:'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=900&q=80'},
];

export type Airport = {city:string;country:string;iata:string;name:string};
export const airports:Airport[] = [
  {city:'תל אביב',country:'ישראל',iata:'TLV',name:'נמל התעופה בן גוריון'},
  {city:'אילת',country:'ישראל',iata:'ETM',name:'נמל התעופה רמון'},
  {city:'בודפשט',country:'הונגריה',iata:'BUD',name:'Budapest Ferenc Liszt'},
  {city:'רומא',country:'איטליה',iata:'FCO',name:'Rome Fiumicino'},
  {city:'מילאנו',country:'איטליה',iata:'MXP',name:'Milan Malpensa'},
  {city:'לונדון',country:'בריטניה',iata:'LHR',name:'London Heathrow'},
  {city:'לונדון',country:'בריטניה',iata:'LGW',name:'London Gatwick'},
  {city:'פריז',country:'צרפת',iata:'CDG',name:'Paris Charles de Gaulle'},
  {city:'ברצלונה',country:'ספרד',iata:'BCN',name:'Barcelona El Prat'},
  {city:'אתונה',country:'יוון',iata:'ATH',name:'Athens International'},
  {city:'לרנקה',country:'קפריסין',iata:'LCA',name:'Larnaca International'},
  {city:'פראג',country:'צ׳כיה',iata:'PRG',name:'Václav Havel Prague'},
  {city:'וינה',country:'אוסטריה',iata:'VIE',name:'Vienna International'},
  {city:'אמסטרדם',country:'הולנד',iata:'AMS',name:'Amsterdam Schiphol'},
  {city:'ברלין',country:'גרמניה',iata:'BER',name:'Berlin Brandenburg'},
  {city:'בוקרשט',country:'רומניה',iata:'OTP',name:'Bucharest Otopeni'},
  {city:'ניו יורק',country:'ארה״ב',iata:'JFK',name:'John F. Kennedy International'},
  {city:'אורלנדו',country:'ארה״ב',iata:'MCO',name:'Orlando International'},
  {city:'לוס אנג׳לס',country:'ארה״ב',iata:'LAX',name:'Los Angeles International'},
  {city:'טורונטו',country:'קנדה',iata:'YYZ',name:'Toronto Pearson International'},
  {city:'פלמה דה מיורקה',country:'ספרד',iata:'PMI',name:'Palma de Mallorca Airport'},
];
