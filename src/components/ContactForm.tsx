export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">お問い合わせ</h2>
            <div className="w-20 h-1.5 bg-blue-900 mx-auto"></div>
            <p className="mt-6 text-gray-600">
              事業買収のご相談、不動産に関するお問い合わせなど、<br />
              以下のフォームよりお気軽にご連絡ください。
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                placeholder="鬼頭 太郎"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                placeholder="info@kitoshoji.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                お問い合わせ概要
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                placeholder="お問い合わせ内容をご記入ください"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-all shadow-lg"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

