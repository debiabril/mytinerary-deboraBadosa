import { useState } from "react"
import { Link as LinkRouter } from 'react-router-dom'
import links from '../utiles/links'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-purple-600"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="absolute right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
              <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-center min-h-[250px]">
            {
                links.map((link, index) => (<li key={index} className="border-b border-purple-400 my-8"><LinkRouter  to={link.to} className='navbar-link text-white drop-shadow-darkShadow hover:text-purple-800 hover:drop-shadow-none'> {link.title}
                </LinkRouter></li> ))
            } 
            </ul>
          </div>
        </section>
        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 30vh;
        top: 0;
        left: 0;
        background: indigo;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
      }`}</style>
    </div>
  );
}