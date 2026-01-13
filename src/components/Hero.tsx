export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            ロボットとAIの力で、<br />
            <span className="text-blue-900">日本の生産性を世界一へ。</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            鬼頭商事は、テクノロジーを駆使して労働力不足を解決し、<br className="hidden md:block" />
            次世代の日本を担う生産性の高い事業を創造します。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#ma-strategy" 
              className="w-full sm:w-auto bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all shadow-lg text-center"
            >
              企業買収方針
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -z-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="100" cy="0" r="80" fill="#1E3A8A" />
        </svg>
      </div>
    </section>
  );
}

