import { Cpu, TrendingUp, Users } from "lucide-react";

export default function MASection() {
  return (
    <section id="ma-strategy" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">連続的企業買収とテクノロジー実装</h2>
          <div className="w-20 h-1.5 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              ロボットとAIによる<br />事業の再定義
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              日本の多くの中小企業が直面している「労働力不足」と「事業承継」の課題。
              私たちは、これらを課題として捉えるだけでなく、テクノロジーを実装することで
              世界に冠たる生産性の高い事業へと変革するチャンスと捉えています。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-900">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">ロボット・AIの導入</h4>
                  <p className="text-sm text-gray-600">ルーチンワークのロボットによる自動化とAIによる意思決定の高度化。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-900">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">事業承継の支援</h4>
                  <p className="text-sm text-gray-600">後継者不足に悩む企業の想いを受け継ぎ、次世代へと繋ぎます。</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <h3 className="text-xl font-bold mb-6 relative z-10">投資方針・コンセプト</h3>
            <ul className="space-y-6 relative z-10">
              <li className="border-l-4 border-blue-400 pl-4">
                <p className="font-bold mb-1">コンセプト</p>
                <p className="text-blue-100 text-sm">ロボットやAIの力を活用し、日本の労働力不足を解決し世界に冠たる生産性の高い事業を創ること</p>
              </li>
              <li className="border-l-4 border-blue-400 pl-4">
                <p className="font-bold mb-1">投資ターゲット</p>
                <p className="text-blue-100 text-sm">事業承継に課題を抱える中小企業を連続的に買収（買収後の売却は予定せず）。主にブルーカラー産業といわれる業種が対象</p>
              </li>
              <li className="border-l-4 border-blue-400 pl-4">
                <p className="font-bold mb-1">バリューアップ方針</p>
                <p className="text-blue-100 text-sm">ロボットとAIによって徹底的な効率化を図り、収益性を向上</p>
              </li>
            </ul>
            <TrendingUp size={120} className="absolute -bottom-8 -right-8 text-blue-800 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}

