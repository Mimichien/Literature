import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'green',
      color: 'white',
      padding: '1rem',
      position: 'sticky',
      top: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
        我的網站
      </Link>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>首頁</Link>
        <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>關於本站</Link>
        <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>聯絡資訊</Link>
        <Link href="/todos" style={{ color: 'white', textDecoration: 'none' }}>待辦事項</Link>
        <Link href="/chat-room" style={{ color: 'white', textDecoration: 'none' }}>聊天室</Link>
      </div>
    </nav>
  );
} 