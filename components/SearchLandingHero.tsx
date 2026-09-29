import type {ReactNode} from 'react';

type Props={title:string;subtitle:string;image:string;eyebrow?:string;children:ReactNode};
export function SearchLandingHero({title,subtitle,image,eyebrow,children}:Props){
  return <section className="search-landing-shell"><div className="wrap"><div className="search-landing-art" style={{backgroundImage:`url(${image})`}}><div className="search-landing-shade"/><div className="search-landing-copy">{eyebrow&&<span>{eyebrow}</span>}<h1>{title}</h1><p>{subtitle}</p></div></div><div className="search-overlap" id="search">{children}</div></div></section>;
}
