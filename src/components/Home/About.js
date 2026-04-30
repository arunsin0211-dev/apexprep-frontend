export default function About() {


  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gradient-to-br dark:from-[#041b04] dark:to-[#011801]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Students studying"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-slate-100">What is ApexPrep AI?</h2>

          <p className="text-lg text-gray-600 dark:text-slate-300 mb-6">
            ApexPrep AI is an intelligent exam preparation platform that
            simulates real competitive exam environments like UPSC CSE
            Prelims, SSC, GATE, and Banking exams.
          </p>

          <ul className="space-y-3 text-orange-600 dark:text-lime-400 ">
            <li>✔ Real exam pattern simulation</li>
            <li>✔ AI-generated and curated MCQs</li>
            <li>✔ Subject-specific or full mock tests</li>
            <li>✔ Instant score and performance analytics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}