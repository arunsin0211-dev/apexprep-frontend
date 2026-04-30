export default function Details(){

    return <section id="details" className="py-12 relative bg-[#D8F8F8]/60 dark:bg-[#0C1F10] bg-[radial-gradient(circle_at_20%_50%,rgb(251,146,60,0.6)_0%,transparent_40%),radial-gradient(circle_at_80%_20%,rgb(129,140,248,0.28)_0%,transparent_60%),radial-gradient(circle_at_40%_80%,rgb(99,102,241,0.35)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgb(32,72,23,0.6)_0%,transparent_40%),radial-gradient(circle_at_40%_80%,rgb(163,230,53,0.15)_0%,transparent_50%)]">
     <div className="px-3 md:px-6">
      <div className="text-center mb-16">
       <span className="inline-block px-4 py-2 rounded-full backdrop-blur-[20px] border border-[#6366f1]/10 text-orange-500 shadow shadow-gray-400/40 dark:text-lime-400  text-sm font-semibold mb-4"> ABOUT US </span>
       <h2 className="font-display text-slate-700 dark:text-slate-200 text-4xl md:text-5xl font-bold mb-4">
            Built by 
            <span className="bg-gradient-to-br from-[#6366f1] via-[#818cf8] dark:to-[#a5b4fc] to-[#10b981] bg-clip-text text-transparent"> Aspirant</span>
            , for Aspirants</h2>
       <p className="dark:text-slate-400 text-slate-700 max-w-4xl mx-auto">ApexPrep AI was born from the understanding that exam preparation shouldn't be about memorizing thousands of questions, but about smart, targeted practice that builds real understanding.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
       <div className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#6366f1] to-[#818cf8] mx-auto flex items-center justify-center mb-6 animate-pulse-glow">
         <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
         </svg>
        </div>
        <h3 className="font-display text-gray-700 dark:text-gray-300 text-xl font-bold mb-3">Our Mission</h3>
        <p className="dark:text-slate-400 text-slate-700">Democratize quality exam preparation with AI-powered tools accessible to every aspirant in India.</p>
       </div>
       <div className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#10b981] to-emerald-400 mx-auto flex items-center justify-center mb-6">
         <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
         </svg>
        </div>
        <h3 className="font-display text-gray-700 dark:text-gray-300 text-xl font-bold mb-3">Our Team</h3>
        <p className="dark:text-slate-400 text-slate-700">A passionate team of educators, engineers, and former aspirants working together.</p>
       </div>
       <div className="text-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#f59e0b] to-amber-400 mx-auto flex items-center justify-center mb-6">
         <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
         </svg>
        </div>
        <h3 className="font-display text-gray-700 dark:text-gray-300 text-xl font-bold mb-3">Our Technology</h3>
        <p className="dark:text-slate-400 text-slate-700">Cutting-edge AI models trained on lakhs of previous year questions and patterns.</p>
       </div>
      </div>
     </div>
    </section>
}