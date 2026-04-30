export default function Hero() {
  return (
    <main className="w-full flex items-center justify-around min-h-screen bg-[url('/bg-light.png')] dark:bg-[url('/bg-dark.png')] bg-cover bg-center ">
      <div className="w-full max-w-3xl ps-3 md:ps-5 relative backdrop-blur-xs">
          <div className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-orange-600 dark:bg-lime-500 rounded-full animate-orbit"></div>
          </div>
          <p className="uppercase tracking-wider text-orange-500 dark:text-green-400 mb-4">
            AI Powered Learning Platform
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-gray-200 font-bold leading-tight mb-6">
            Prepare Smarter with <br />
            AI-Powered Mock Tests
          </h1>
          <p className="text-gray-800/80 dark:text-gray-400 mb-16 text-lg">
            Practice unlimited AI-generated mock tests for UPSC, SSC, GATE,
            Banking and more. Improve faster with smart analytics and
            personalized learning paths.
          </p>
          {/* CTA Buttons */}
          <div className="flex gap-4 mb-10">
            <a href="/exam" className="bg-orange-400 dark:bg-green-500 hover:bg-orange-600 text-slate-100 dark:hover:bg-green-700 text-black font-semibold px-6 py-3 rounded-lg">
              Start Free Test
            </a>

            <a href="/learn" className="border dark:border-green-700 dark:hover:bg-green-700 hover:bg-orange-600 text-orange-400 dark:text-gray-300 hover:text-slate-50 px-6 py-3 rounded-lg">
              Learn with Us
            </a>
          </div>
                    {/* Stats */}
          <div className="flex gap-10 text-sm">

            <div>
              <p className="text-3xl font-bold dark:text-slate-200">1M+</p>
              <p className="text-gray-700 dark:text-gray-400">Questions Generated</p>
            </div>

            <div>
              <p className="text-3xl font-bold dark:text-slate-200">250K+</p>
              <p className="text-gray-700 dark:text-gray-400">Students Practicing</p>
            </div>

            <div>
              <p className="text-3xl font-bold dark:text-slate-200">50+</p>
              <p className="text-gray-700 dark:text-gray-400">Exams Supported</p>
            </div>

          </div>

      </div>
      <div className="hidden md:flex items-center ">
        <img src="/student1.png" alt="student" className="w-135 h-auto"/>
      </div>
    </main>
  );
}