'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={href} onClick={onClick} className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium">
    {children}
  </a>
);

const ServiceCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
    <div className="text-emerald-600 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
  </div>
);

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Vše pro stavby s.r.o. | Moderní Stavební Firma";
    const faviconUrl = "https://www.vseprostavby.cz/favicon.ico";
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#uvod", text: "Úvod" },
    { href: "#sluzby", text: "Služby" },
    { href: "#nase-prace", text: "Naše práce" },
    { href: "#o-nas", text: "O nás" },
    { href: "#kontakt", text: "Kontakt" },
  ];

  const services = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: "Novostavby RD na klíč" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.44.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.44.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.44-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.44-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>, title: "Rekonstrukce a opravy" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>, title: "Zateplování fasád" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 21.5 18 18l3.5-3.5L18 11l3.5-3.5L18 4l3.5-3.5"/><path d="M10.5 2.5 8 5l-2.5-2.5"/><path d="m13.5 9.5 2.5 2.5-2.5 2.5"/><path d="M2 12h10"/><path d="m5 19 3-3-3-3"/></svg>, title: "Zemní a výkopové práce" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>, title: "Střechy na klíč" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/><path d="M14 12v-2a2 2 0 1 0-4 0v2"/><path d="M4 15h16"/><path d="M4 19h16"/></svg>, title: "Obklady, dlažby a sanita" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/><path d="M9 18h6"/></svg>, title: "Základové desky" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.44.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.44.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.44-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.44-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>, title: "Realizace oplocení" },
  ];

  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
           <a href="#uvod" className="flex items-center space-x-2">
                <Image src="/images/logo-line-house.png" alt="Vše pro stavby Logo" width={50} height={50} />
                <span className="font-bold text-xl text-gray-800">Vše pro stavby <span className="text-emerald-600">s.r.o.</span></span>
            </a>

          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
            ))}
             <a href="#kontakt" className="bg-emerald-600 text-white font-bold py-2 px-4 rounded-full hover:bg-emerald-700 transition-colors duration-300">Poptávka</a>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.text}</NavLink>
            ))}
             <a href="#kontakt" onClick={closeMenu} className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-full hover:bg-emerald-700 transition-colors duration-300">Poptávka</a>
          </div>
        </div>
      </header>

      <main>
        <section id="uvod" className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white text-center">
          <Image 
            src="/images/project-tanvald-finished-house.jpg" 
            alt="Dokončený rodinný dům" 
            layout="fill" 
            objectFit="cover" 
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 px-6 py-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Stavební práce v Libereckém kraji</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">Výstavba rodinných domů na klíč, rekonstrukce, zateplování fasád a mnohem více.</p>
            <a href="#sluzby" className="mt-8 inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition-all duration-300 text-lg shadow-lg">Zjistit více</a>
          </div>
        </section>

        <section id="sluzby" className="py-20 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naše Služby</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Poskytujeme komplexní stavební služby od základů až po střechu.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} icon={service.icon} title={service.title} />
              ))}
            </div>
          </div>
        </section>

        <section id="nase-prace" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naše Práce</h2>
              <p className="text-gray-600 mt-2">Prohlédněte si ukázky našich dokončených projektů.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image src="/images/project-tanvald-finished-house.jpg" alt="Projekt Tanvald" width={800} height={600} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                 <Image src="/images/project-residential-renovation.jpg" alt="Rezidenční rekonstrukce" width={800} height={600} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="o-nas" className="py-20 bg-slate-100">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O nás</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">Jsme stavební firma, která vznikla v roce 2014. Spolehlivost, kvalita a flexibilita jsou pro nás na prvním místě. Ke každému zákazníkovi přistupujeme individuálně a snažíme se mu nabídnout co nejlepší řešení jeho požadavků.</p>
                <p className="text-gray-600 leading-relaxed">Soustředíme se na profesionální přístup a precizní provedení všech stavebních prací, abychom zaručili maximální spokojenost našich klientů.</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                 <Image src="/images/project-residential-renovation.jpg" alt="Detail fasády" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-20 bg-emerald-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontaktujte nás</h2>
            <p className="max-w-2xl mx-auto mb-10">Máte dotaz nebo zájem o nezávaznou poptávku? Neváhejte se nám ozvat.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
              <div className="flex items-start space-x-4 p-4 bg-emerald-800/50 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 <div><h3 className="font-semibold">Telefon</h3><a href="tel:+420739010119" className="hover:underline">+420 739 010 119</a></div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-emerald-800/50 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                 <div><h3 className="font-semibold">Email</h3><a href="mailto:info@vseprostavby.cz" className="hover:underline">info@vseprostavby.cz</a></div>
              </div>
               <div className="flex items-start space-x-4 p-4 bg-emerald-800/50 rounded-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                 <div><h3 className="font-semibold">Adresa</h3><p>Podhorská 1253/64a<br/>466 01 Jablonec nad Nisou<br/>IČ: 03138371</p></div>
              </div>
            </div>
          </div>
        </section>
      </main>

       <footer className="bg-slate-900 text-slate-400">
        <div className="container mx-auto px-6 py-8 text-center">
           <p>&copy; {new Date().getFullYear()} Vše pro stavby s.r.o. Všechna práva vyhrazena.</p>
        </div>
        <div className="bg-slate-950 py-4 px-6 text-center text-sm text-slate-500">
          <p>
            Vytvořeno s láskou od{' '}
            <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-300">
              DigitalFusion
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
