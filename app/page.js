import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="flex flex-col items-center justify-center min-h-[40vh] text-center font-bold border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-bold mb-4 text-green-600 dark:text-green-400" aria-label="歡迎信息">
          Hi 我是Mimi
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-400">我是一個文學家</h2>
      </header>
      <section className="flex flex-col items-center justify-center min-h-[30vh]">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">作品專區</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/photo1.jpg"
                alt="寂靜森林"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">寂靜森林的低語</div>
              <p className="text-gray-600 dark:text-gray-400">
                在這片蒼翠的森林中，每一片葉子都訴說著大自然的故事。霧氣繚繞間，彷彿能聽見樹木的呢喃。
              </p>
            </div>
          </div>

          <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/photo2.jpg"
                alt="靜謐湖泊"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">湖面的倒影</div>
              <p className="text-gray-600 dark:text-gray-400">
                平靜的湖面如同一面鏡子，倒映著天空的萬千變化。在這裡，時間似乎停止了流動。
              </p>
            </div>
          </div>

          <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            <div className="h-48 overflow-hidden">
              <img
                src="/images/photo3.jpg"
                alt="秋日山景"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">山巒的詩篇</div>
              <p className="text-gray-600 dark:text-gray-400">
                層層疊疊的山巒在霧中若隱若現，宛如一首優美的詩篇，訴說著永恆的故事。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">關於我</h2>
          <div className="text-center mb-8">
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
              了解更多
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="個人照片"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">陳小明</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  你好！我是一名熱愛攝影和自然的攝影師。過去十年間，我走遍台灣的山川河流，用相機記錄下大自然最動人的瞬間。我相信每一張照片背後都有一個值得被訴說的故事。
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  除了風景攝影，我也致力於環境保護工作，希望通過我的作品喚起人們對自然的關注與珍惜。歡迎您瀏覽我的作品集，一起感受大自然的魅力。
                </p>
                <div className="mt-6 flex gap-4">
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Instagram</a>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Facebook</a>
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">聯絡方式</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>電話：(02) 2345-6789</li>
                <li>信箱：contact@mimi-photo.com</li>
                <li>地址：台北市信義區松仁路100號</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">營業時間</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>週一至週五：10:00 - 19:00</li>
                <li>週六：11:00 - 17:00</li>
                <li>週日：休息</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">訂閱電子報</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                訂閱我們的電子報，獲取最新攝影作品和活動資訊。
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="請輸入您的電子信箱"
                  className="px-4 py-2 border rounded-lg flex-1 dark:bg-gray-700 dark:border-gray-600"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  訂閱
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 Mimi Photography. 保留所有權利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
