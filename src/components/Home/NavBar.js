import { Menu } from "lucide-react";
import { useEffect, useState } from "react";


export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 25) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return <header className={`w-full px-1 md:px-4 lg:px-6 py-2 fixed top-0 left-0 z-10 flex items-end justify-between ${isScrolled ? ' backdrop-blur-xl shadow-xl ' : ''}`}>
        <div className="flex gap-1 md:gap-3 items-center">
            <img src="/logo.png" alt="Logo" className="w-14 md:w-16"/>
            <img src="/brandName_Light.png" alt="Logo Text" className="w-28 h-6 md:w-44 md:h-10 dark:hidden"/>
            <img src="/brandName_Dark.png" alt="Logo Text" className="w-28 h-6 md:w-44 md:h-8 hidden dark:block"/>
        </div>
        <nav className="hidden md:flex text-gray-800  dark:text-gray-300 md:gap-4 lg:gap-6 text-xl backdrop-blur-xl font-[400] ">
          <a href="#about" className="hover:text-orange-400 dark:hover:text-lime-400">About</a>
          <a href="#exam" className="hover:text-orange-400 dark:hover:text-lime-400">Exams</a>
          <a href="#impact" className="hover:text-orange-400 dark:hover:text-lime-400">Features</a>
          <a href="#analytics" className="hover:text-orange-400 dark:hover:text-lime-400">Analytics</a>
          <a href="#contact" className="hover:text-orange-400 dark:hover:text-lime-400">Contact</a>
        </nav>
        <button className="hidden bg-orange-500 dark:bg-lime-700 font-semibold text-white px-4 py-2 rounded-lg md:inline-flex items-center gap-1 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
            Get Started
        </button>
        <button className=" md:hidden mr-1 p-2 rounded-lg dark:text-slate-200 backdrop-blur-xl shadow-xl border border-gray-400/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <Menu />
        </button>
    </header>
}