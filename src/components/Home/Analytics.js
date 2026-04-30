export default function Analytics(){

    return <section id="analytics" className="py-12 bg-slate-100 dark:bg-[#03100F] relative overflow-hidden">
     <div className="px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
       <div><span className="inline-block px-4 py-2 rounded-full bg-[#1a1a24]/10 dark:bg-[#1a1a24]/80 backdrop-blur-[20px] border border-[#6366f1]/10 text-[#6366f1] text-sm font-semibold mb-4"> SMART ANALYTICS </span>
        <h2 className="font-display text-slate-700 dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Track Your Journey to <span className="bg-gradient-to-br from-[#6366f1] via-[#818cf8] to-[#a5b4fc] bg-clip-text text-transparent">Success</span></h2>
        <p className="text-gray-700 dark:text-gray-400 text-lg mb-8">Our intelligent analytics engine provides deep insights into your preparation, identifying strengths and areas for improvement with surgical precision.</p>
        <div className="space-y-6">
         <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#10b981]/20 flex items-center justify-center flex-shrink-0">
           <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
           </svg>
          </div>
          <div>
           <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-1">Performance Trends</h4>
           <p className="text-gray-700 dark:text-gray-400 text-sm">Visualize your progress over time with detailed charts and graphs</p>
          </div>
         </div>
         <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center flex-shrink-0">
           <svg className="w-6 h-6 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a２ ２ ０ ０１-２ -２z" />
           </svg>
          </div>
          <div>
           <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-1">Subject Analysis</h4>
           <p className="text-gray-700 dark:text-gray-400 text-sm">Understand your performance across different subjects and topics</p>
          </div>
         </div>
         <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#6366f1]/20 flex items-center justify-center flex-shrink-0">
           <svg className="w-6 h-6 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
           </svg>
          </div>
          <div>
           <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-1">AI Recommendations</h4>
           <p className="text-gray-700 dark:text-gray-400 text-sm">Get personalized study suggestions based on your weak areas</p>
          </div>
         </div>
        </div>
       </div>
       {/* <!-- Analytics Preview Card --> */}
       <div className="relative">
        <div className="bg-[#1a1a24]/10 dark:bg-[#1a1a24]/80 backdrop-blur-[20px] border border-[#6366f1]/10 rounded-3xl px-3 py-6 md:p-6 gradient-border">
         <div className="flex items-center justify-between mb-6">
          <h3 className="font-display font-semibold dark:text-slate-200 text-lg">Performance Dashboard</h3>
          <span className="text-sm text-gray-700 dark:text-gray-400">Last 30 days</span>
         </div>
         {/* <!-- Mock Chart --> */}
         <div className="h-48 flex items-end justify-between gap-2 mb-6">
          <div className="flex-1 bg-[#6366f1]/20 rounded-t-lg" style={{height: '60%'}}></div>
          <div className="flex-1 bg-[#6366f1]/30 rounded-t-lg" style={{height: '75%'}}></div>
          <div className="flex-1 bg-[#6366f1]/40 rounded-t-lg" style={{height: '65%'}}></div>
          <div className="flex-1 bg-[#6366f1]/50 rounded-t-lg" style={{height: '80%'}}></div>
          <div className="flex-1 bg-[#6366f1]/60 rounded-t-lg" style={{height: '70%'}}></div>
          <div className="flex-1 bg-[#6366f1]/70 rounded-t-lg" style={{height: '85%'}}></div>
          <div className="flex-1 bg-[#6366f1]/90 rounded-t-lg animate-pulse" style={{height: '92%'}}></div>
         </div>
         <div className="grid grid-cols-3 gap-2 md:gap-4">
          <div className="text-center p-3 rounded-xl dark:bg-[#12121a] bg-[#12121a]/15 ">
           <div className="text-2xl font-bold text-[#10b981]">
            89%
           </div>
           <div className="text-xs dark:text-gray-400 text-gray-700">
            Accuracy
           </div>
          </div>
          <div className="text-center p-3 rounded-xl dark:bg-[#12121a] bg-[#12121a]/60 ">
           <div className="text-2xl font-bold text-[#f59e0b]">
            142
           </div>
           <div className="text-xs text-gray-300">
            Tests
           </div>
          </div>
          <div className="text-center px-1 py-3 md:p-3 rounded-xl bg-[#6366f1]/20 dark:bg-[#12121a]">
           <div className="text-2xl font-bold text-[#6366f1]">
            Top 5%
           </div>
           <div className="text-xs text-gray-700 dark:text-gray-400">
            Rank
           </div>
          </div>
         </div>
        </div>
        {/* <!-- Floating Elements --> */}
        <div className="absolute -top-4 -right-4 bg-[#1a1a24]/10 dark:bg-[#1a1a24]/80 backdrop-blur-[20px] border border-[#6366f1]/10 rounded-2xl px-4 py-3 animate-float">
         <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#10b981]/20 flex items-center justify-center">
           <svg className="w-4 h-4 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
           </svg>
          </div><span className="text-sm text-slate-700 dark:text-slate-300 font-semibold">+12% this week</span>
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
}