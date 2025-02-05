import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
            首頁
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-gray-700 hover:text-gray-900">關於本站</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">聯絡資訊</Link>
          <Link href="/todos" className="text-gray-700 hover:text-gray-900">待辦事項</Link>
          <Link href="/chat-room" className="text-gray-700 hover:text-gray-900">聊天室</Link>
        </div>
      </div>
    </nav>
  );
} 