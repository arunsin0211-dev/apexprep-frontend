import { motion } from "framer-motion"
export default function Features() {

    return <section id="impact" className="py-12 bg-orange-100 dark:bg-[#112000] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full backdrop-blur shadow border border-gray-400/40 text-sm font-semibold mb-4 text-orange-500 dark:text-lime-500"> POWERFUL FEATURES </span>
            <h2 className="font-display text-3xl md:text-4xl dark:text-slate-100 font-bold mb-4">
                Why 
                <span className="gradient-text text-4xl md:text-5xl dark:text-orange-500 text-lime-500 italic"> ApexPrep AI </span> 
                Stands Out
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Experience the future of exam preparation with our cutting-edge AI technology.
            </p>
        </div>
        <div className=" w-full flex gap-3 md:gap-4 lg:gap-7 flex-wrap">
            {/* FEATURE - 1 */}
            <motion.div whileHover={{scale:1.05, translateY:-10}} className="backdrop-blur-xl group shadow hover:shadow-2xl shadow-orange-400/40 rounded-3xl p-8 max-w-sm border border-gray-400/40 gradient-border">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#818cf8]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <h3 className="font-display text-xl text-[#6366f1] font-bold mb-3">AI-Powered Questions</h3>
                <p className="text-gray-600 dark:text-gray-400">Dynamically generated questions using advanced AI models, ensuring fresh and relevant content every time.</p>
            </motion.div>

            {/* Feature - 2  */}
            <motion.div whileHover={{scale:1.05, translateY:-10}} className="backdrop-blur-xl group shadow hover:shadow-xl shadow-orange-400/40 rounded-3xl p-8 max-w-sm border border-gray-400/40 gradient-border">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10b981]/20 to-emerald-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-２a２ ２ ０ ０１-２ -２z" />
                    </svg>
                </div>
                <h3 className="font-display text-xl text-[#10b981] font-bold mb-3">Real-Time Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">Track your progress with detailed insights, performance trends, and personalized improvement suggestions.</p>
            </motion.div>

            {/* Feature - 3  */}
            <motion.div whileHover={{scale:1.05,translateY:-10}} className="backdrop-blur-xl group shadow hover:shadow-xl shadow-orange-400/40 rounded-3xl p-8 max-w-sm border border-gray-400/40 gradient-border">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f59e0b]/20 to-amber-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </div>
                <h3 className="font-display text-xl text-[#f59e0b] font-bold mb-3">Adaptive Difficulty</h3>
                <p className="text-gray-600 dark:text-gray-400">Smart algorithm adjusts question difficulty based on your performance, optimizing your learning curve.</p>
            </motion.div>

            {/* Feature - 4  */}
            <motion.div whileHover={{scale:1.05,translateY:-10}} className="backdrop-blur-xl hidden md:block group shadow hover:shadow-xl shadow-orange-400/40 rounded-3xl p-8 max-w-sm border border-gray-400/40 gradient-border">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="font-display text-xl text-purple-400 font-bold mb-3">Exam-Accurate Timing</h3>
                <p className="text-gray-600 dark:text-gray-400">Practice with exact time limits, marking schemes, and patterns matching official exam formats.</p>
            </motion.div>

            {/* Feature - 5  */}
            <motion.div whileHover={{scale:1.05,translateY:-10}} className="backdrop-blur-xl hidden md:block group shadow hover:shadow-xl shadow-orange-400/40 rounded-3xl p-8 max-w-sm border border-gray-400/40 gradient-border">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <h3 className="font-display text-xl text-cyan-400 font-bold mb-3">Subject-Wise Practice</h3>
                <p className="text-gray-600 dark:text-gray-400">Focus on specific subjects with targeted practice questions and explanations.</p>
            </motion.div>

            {/* Feature - 6  */}
            <motion.div whileHover={{scale:1.05,translateY:-10}} className="backdrop-blur-xl hidden md:block group shadow hover:shadow-xl shadow-orange-400/40 rounded-3xl p-8 max-w-sm border border-gray-400/40 gradient-border">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h3 className="font-display text-xl text-rose-400 font-bold mb-3">Progress Tracking</h3>
                <p className="text-gray-600 dark:text-gray-400">Save your test history, review mistakes, and track improvement over time with detailed reports.</p>
            </motion.div>
        </div>
      </div>
    </section>
}