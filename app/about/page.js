import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">關於本站</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            歡迎來到Mimi的個人網站！這裡是我分享攝影作品和文字創作的天地。
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            本站主要展示我在台灣各地拍攝的自然風景照片，以及相關的文學創作。透過影像與文字的結合，我希望能夠傳達大自然的美麗與感動。
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            如果您對我的作品有興趣，歡迎與我聯繫或在社群媒體上關注我的最新動態。
          </p>
        </div>

        <div className="text-center">
          <a 
            href="/"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
          >
            返回首頁
          </a>
        </div>
      </div>
    </div>
  );
}
