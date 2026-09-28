import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
export const metadata:Metadata={title:{default:'החופשה הבאה | טיסות, מלונות וחופשות',template:'%s | החופשה הבאה'},description:'מנוע חיפוש והשוואה לטיסות, מלונות וטיסה + מלון. מחפשים במקום אחד וממשיכים לספק כדי לבצע את ההזמנה.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body><div className="demo-banner"><strong>גרסת MVP</strong><span> · נתוני החיפוש והמחירים באתר הם להדגמה בלבד עד לחיבור ספקים חיים</span></div><Header/>{children}<Footer/></body></html>}
