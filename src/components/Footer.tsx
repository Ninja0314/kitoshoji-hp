export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold mb-6 tracking-wider">鬼頭商事</div>
        <p className="text-gray-400 text-sm mb-8">
          東京都北区<br />
          ロボットとAIの力で日本の生産性を世界一へ
        </p>
        <div className="border-t border-gray-800 pt-8 text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Kito Shoji Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

