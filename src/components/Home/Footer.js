import { Github, Linkedin, TwitterIcon, X } from "lucide-react";

export default function Footer() {

    return  <footer className="py-8 dark:bg-[#011801] bg-stone-950 border-t border-white/5">
     <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
       <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
         <div className="w-15 h-10 rounded-xl bg-gradient-to-br from-apex-accent to-apex-glow flex items-center justify-center">
          <img src="/logo.png" alt="ApexPrepAI Logo" className=""/>  
         </div>
          <img src="/brandName_Dark.png" alt="ApexPrepAI" className="w-45" />
        </div>
        <p className="text-gray-300 mb-6 max-w-sm">Your intelligent companion for competitive exam preparation. Practice smarter, score higher.</p>
        <div className="flex gap-4 text-slate-200">
            <a href="#" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-apex-accent/20 transition-colors">
                <TwitterIcon />
            </a> 
            <a href="#" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-apex-accent/20 transition-colors">
                <Github />
            </a> 
            <a href="#" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:bg-apex-accent/20 transition-colors">
                <Linkedin />
            </a>
        </div>
       </div>
       <div>
        <h4 className="font-display text-gray-300 text-xl font-semibold mb-4">Exams</h4>
        <ul className="space-y-2 text-gray-400">
         <li><a href="#" className="hover:text-white transition-colors">UPSC CSE</a></li>
         <li><a href="#" className="hover:text-white transition-colors">SSC CGL</a></li>
         <li><a href="#" className="hover:text-white transition-colors">GATE</a></li>
         <li><a href="#" className="hover:text-white transition-colors">Banking</a></li>
        </ul>
       </div>
       <div>
        <h4 className="font-display text-gray-300 text-xl font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-gray-400">
         <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
         <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
         <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
         <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
       </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
       <p>© 2024 ApexPrep AI. All rights reserved. Made with ❤️ for Indian Aspirants.</p>
      </div>
     </div>
    </footer>
}