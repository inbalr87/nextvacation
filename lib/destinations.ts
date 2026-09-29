export type PopularDestination={slug:string;name:string;country:string;airport:string;tagline:string;image:string};

export const popularDestinations:PopularDestination[]=[
  {slug:'barcelona',name:'ברצלונה',country:'ספרד',airport:'BCN',tagline:'אדריכלות, אוכל, שופינג וחוף באותו טיול.',image:'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=85'},
  {slug:'london',name:'לונדון',country:'בריטניה',airport:'LHR',tagline:'שכונות, שופינג, תיאטרון ואווירה עירונית.',image:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85'},
  {slug:'paris',name:'פריז',country:'צרפת',airport:'CDG',tagline:'קפה, תרבות, שופינג ורחובות שאי אפשר להפסיק לצלם.',image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85'},
  {slug:'prague',name:'פראג',country:'צ׳כיה',airport:'PRG',tagline:'עיר יפה, קומפקטית ונוחה לחופשה קצרה.',image:'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1400&q=85'},
  {slug:'berlin',name:'ברלין',country:'גרמניה',airport:'BER',tagline:'אמנות, היסטוריה, שווקים וחיי לילה.',image:'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&q=85'},
  {slug:'vienna',name:'וינה',country:'אוסטריה',airport:'VIE',tagline:'אלגנטיות, בתי קפה, מוזיאונים ושווקים עונתיים.',image:'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1400&q=85'},
  {slug:'budapest',name:'בודפשט',country:'הונגריה',airport:'BUD',tagline:'דנובה, אוכל, מרחצאות וחיי לילה.',image:'https://images.unsplash.com/photo-1549877452-9c387954fbc2?auto=format&fit=crop&w=1400&q=85'},
  {slug:'madrid',name:'מדריד',country:'ספרד',airport:'MAD',tagline:'אוכל, אמנות, פארקים וקצב ספרדי.',image:'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=85'},
  {slug:'lisbon',name:'ליסבון',country:'פורטוגל',airport:'LIS',tagline:'תצפיות, טראמים, אוכל ואור נהדר לצילום.',image:'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=85'},
  {slug:'amsterdam',name:'אמסטרדם',country:'הולנד',airport:'AMS',tagline:'תעלות, שכונות יפות, מוזיאונים וקצב נעים.',image:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=85'},
  {slug:'rome',name:'רומא',country:'איטליה',airport:'FCO',tagline:'אוכל, היסטוריה ורחובות שמרגישים כמו סרט.',image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=85'},
  {slug:'florence',name:'פירנצה',country:'איטליה',airport:'FLR',tagline:'אמנות, אוכל וטוסקנה במרחק נגיעה.',image:'https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?auto=format&fit=crop&w=1400&q=85'},
  {slug:'bucharest',name:'בוקרשט',country:'רומניה',airport:'OTP',tagline:'עיר נגישה עם אוכל, בילויים וטיולי יום.',image:'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1400&q=85'},
  {slug:'palermo',name:'פלרמו',country:'איטליה',airport:'PMO',tagline:'סיציליה, שווקים, אוכל רחוב וים.',image:'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1400&q=85'},
  {slug:'athens',name:'אתונה',country:'יוון',airport:'ATH',tagline:'עיר, אוכל, היסטוריה ושמש.',image:'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1400&q=85'},
  {slug:'santorini',name:'סנטוריני',country:'יוון',airport:'JTR',tagline:'לבן, כחול, שקיעות ונוף לים.',image:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85'},
  {slug:'rhodes',name:'רודוס',country:'יוון',airport:'RHO',tagline:'עיר עתיקה, חופים ושמש יוונית.',image:'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?auto=format&fit=crop&w=1400&q=85'},
  {slug:'larnaca',name:'לרנקה',country:'קפריסין',airport:'LCA',tagline:'קרוב, פשוט ונוח לחופשת ים קצרה.',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85'},
  {slug:'ibiza',name:'איביזה',country:'ספרד',airport:'IBZ',tagline:'חופים, שקיעות, מסיבות ומפרצים יפים.',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85'},
  {slug:'new-york',name:'ניו יורק',country:'ארה״ב',airport:'JFK',tagline:'עיר ללא הפסקה, שופינג, אוכל ומופעים.',image:'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1400&q=85'},
  {slug:'orlando',name:'אורלנדו',country:'ארה״ב',airport:'MCO',tagline:'פארקים, משפחות וחופשות ארוכות יותר.',image:'https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1400&q=85'},
  {slug:'miami',name:'מיאמי',country:'ארה״ב',airport:'MIA',tagline:'חוף, צבע, שופינג ואווירה טרופית.',image:'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=1400&q=85'},
  {slug:'los-angeles',name:'לוס אנג׳לס',country:'ארה״ב',airport:'LAX',tagline:'עיר, חופים, קולנוע ורוד טריפ.',image:'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1400&q=85'},
  {slug:'las-vegas',name:'לאס וגאס',country:'ארה״ב',airport:'LAS',tagline:'מלונות, מופעים, אוכל וטיולי יום למדבר.',image:'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85'},
  {slug:'boston',name:'בוסטון',country:'ארה״ב',airport:'BOS',tagline:'עיר היסטורית, שכונות יפות וקצב נעים.',image:'https://images.unsplash.com/photo-1501979376754-9bc7f8456d8a?auto=format&fit=crop&w=1400&q=85'},
  {slug:'toronto',name:'טורונטו',country:'קנדה',airport:'YYZ',tagline:'עיר גדולה, אוכל מגוון ונקודת יציאה להמשך טיול.',image:'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=1400&q=85'},
  {slug:'thailand',name:'תאילנד',country:'תאילנד',airport:'BKK',tagline:'איים, ערים, אוכל ושילוב בין קצב רגוע לאנרגיה.',image:'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=85'},
  {slug:'tokyo',name:'טוקיו',country:'יפן',airport:'HND',tagline:'אוכל, שכונות, שופינג וטכנולוגיה.',image:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=85'},
  {slug:'osaka',name:'אוסקה',country:'יפן',airport:'KIX',tagline:'אוכל רחוב, חיי ערב ובסיס מעולה לקנסאי.',image:'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1400&q=85'},
];

export const destinationBySlug=(slug:string)=>popularDestinations.find(d=>d.slug===slug);
export const destinationByName=(name:string)=>popularDestinations.find(d=>d.name===name);
