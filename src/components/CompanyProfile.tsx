export default function CompanyProfile() {
  const profile = [
    { label: "会社名", value: "鬼頭商事" },
    { label: "所在地", value: "東京都北区" },
    { label: "資本金", value: "100万円（準備金含む）" },
    { label: "設立年月日", value: "平成25年10月18日" },
    { label: "従業員数", value: "2名" },
    { label: "事業内容", value: "連続的企業買収による事業運営、その他不動産関連事業" },
  ];

  return (
    <section id="company" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">会社概要</h2>
            <div className="w-20 h-1.5 bg-blue-900 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {profile.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 sm:grid-cols-3 p-6 ${
                  index !== profile.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="text-gray-500 font-bold mb-1 sm:mb-0">
                  {item.label}
                </div>
                <div className="col-span-2 text-gray-900 font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

