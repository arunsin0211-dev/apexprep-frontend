import {motion} from 'framer-motion';
export default function Exams(){

    return <section id="exam" className="py-12 bg-lime-100 dark:bg-[rgb(10,15,1)] relative">
        <div className="w-full mx-auto px-6">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 rounded-full backdrop-blur-sm shadow border border-gray-400/40 text-orange-500 dark:text-lime-400 text-sm font-semibold mb-4"> COMPREHENSIVE COVERAGE </span>
                <h2 className="font-display text-4xl dark:text-slate-200 md:text-5xl font-bold mb-4">Exams We <span className="bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#a5b4fc] bg-clip-text text-transparent">Cover</span></h2>
                <p className="text-gray-700 dark:text-gray-400 text-lg max-w-2xl mx-auto">From civil services to engineering, prepare for India's most competitive exams</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* <!-- UPSC --> */}
       <a href="/exam?exam=upsc_cse" className="bg-[#1a1a24]/10 dark:bg-[#1a1a24]/80 backdrop-blur-[20px] border border-[#6366f1]/10 rounded-3xl p-6 cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(179,92,5,0.5)] dark:hover:shadow-[0_25px_50px_rgba(99,102,241,0.25)] group">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
         </svg>
        </div>
        <h3 className="font-display dark:text-slate-200 text-lg font-bold mb-2">UPSC CSE</h3>
        <p className="dark:text-gray-400 text-slate-700 text-sm mb-4">Civil Services Prelims &amp; Mains</p>
        <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded-lg bg-orange-600/10 text-orange-500 text-xs">History</span> 
            <span className="px-2 py-1 rounded-lg bg-orange-600/10 text-orange-500 text-xs">Polity</span> 
            <span className="px-2 py-1 rounded-lg bg-orange-600/10 text-orange-500 text-xs">Economy</span>
        </div>
       </a>
       {/* <!-- SSC --> */}
       <a href="/exam?exam=ssc_cgl" className="bg-[#1a1a24]/10 dark:bg-[#1a1a24]/80 backdrop-blur-[20px] border border-[#6366f1]/10 rounded-3xl p-6 cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(179,92,5,0.5)] dark:hover:shadow-[0_25px_50px_rgba(99,102,241,0.25)] group">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
         </svg>
        </div>
        <h3 className="font-display dark:text-slate-200 text-lg font-bold mb-2">SSC</h3>
        <p className="dark:text-gray-400 text-slate-700 text-sm mb-4">CGL, CHSL, MTS &amp; More</p>
        <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">Reasoning</span> 
            <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">Quant</span> 
            <span className="px-2 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs">English</span>
        </div>
       </a>
       {/* <!-- GATE --> */}
       <a href="/exam?authority=gate" className="bg-[#1a1a24]/10 dark:bg-[#1a1a24]/80 backdrop-blur-[20px] border border-[#6366f1]/10 rounded-3xl p-6 cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(179,92,5,0.5)] dark:hover:shadow-[0_25px_50px_rgba(99,102,241,0.25)] group" >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
         </svg>
        </div>
        <h3 className="font-display dark:text-slate-200 text-lg font-bold mb-2">GATE</h3>
        <p className="dark:text-gray-400 text-slate-700 text-sm mb-4">ME, CS, CE, ECE &amp; More</p>
        <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs">Technical</span> 
            <span className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs">Aptitude</span>
        </div>
       </a>
       {/* <!-- Banking --> */}
       <a href="/exam?exam=banking" className="bg-[#1a1a24]/10 dark:bg-[#1a1a24]/80 backdrop-blur-[20px] border border-[#6366f1]/10 rounded-3xl p-6 cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(179,92,5,0.5)] dark:hover:shadow-[0_25px_50px_rgba(99,102,241,0.25)] group" >
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
        </div>
        <h3 className="font-display dark:text-slate-200 text-lg font-bold mb-2">Banking</h3>
        <p className="dark:text-gray-400 text-slate-700 text-sm mb-4">IBPS PO, SBI PO, RBI Grade B</p>
        <div className="flex flex-wrap gap-2"><span className="px-2 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">Banking</span> <span className="px-2 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs">Finance</span>
        </div>
       </a>
      </div>
        </div>
    </section>
}