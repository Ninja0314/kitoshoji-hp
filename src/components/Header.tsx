import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900 tracking-wider">
          鬼頭商事
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="#mission" className="hover:text-blue-700 transition-colors">私たちの使命</Link>
          <Link href="#ma-strategy" className="hover:text-blue-700 transition-colors">当社の事業</Link>
          <Link href="#company" className="hover:text-blue-700 transition-colors">会社概要</Link>
        </nav>
      </div>
    </header>
  );
}

