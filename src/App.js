import React, { useState } from 'react';
import './App.css';
import ResultPage from './ResultPage';

function App() {
  const [dob, setDob] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState(null);
  const [isResultVisible, setIsResultVisible] = useState(false);  // 結果画面の表示/非表示
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // メニューの開閉状態
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateLifePathNumber(dob);  // 数秘術の計算
    setLifePathNumber(result);  // 結果を状態にセット
    setIsResultVisible(true);  // 結果ページを表示
  };

  // 数秘術の計算方法
  const calculateLifePathNumber = (dob) => {
    const digits = dob.replace(/-/g, ''); // ハイフンを削除
    const sum = digits.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum % 9 === 0 ? 9 : sum % 9;
  };

  // メニューの開閉をトグルする関数
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // メニューの状態を反転させる
  };

  // メニューのリンクがクリックされた場合にメニューを閉じる
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };
    try {
      const response = await fetch('http://localhost:3000/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('お問い合わせが送信されました');
      } else {
        alert('送信に失敗しました');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('送信に失敗しました');
    }
  };

  return (
    <div className="App">
      <header className="App-header sticky-header">
        <div className="logo-container">
          <h1>Rの数秘術</h1>
        </div>

        {/* ハンバーガーメニューのボタン */}
        <button className="hamburger-button" onClick={toggleMenu}>
          &#9776;
        </button>
      </header>

      {/* 画像 */}
      <div className="image-container">
        <img src="https://user0514.cdnw.net/shared/img/thumb/aig-ai230706090-xl_TP_V.jpg" alt="Logo" className="App-logo" />
      </div>

      {/* ハンバーガーメニュー */}
      {isMenuOpen && (
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>ホーム</a></li>
            <li><a href="#numerology" onClick={closeMenu}>数秘術で占う</a></li>
            <li><a href="#numerology-info" onClick={closeMenu}>数秘術とは</a></li>
            <li><a href="#contact" onClick={closeMenu}>個人鑑定申込み</a></li>
          </ul>
        </nav>
      )}

      <main className="main-content">
        {!isResultVisible ? (
          <div className="form-container">
            <h2>生年月日を選択</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="date-input"
                required
              />
              <button type="submit" className="submit-button">占う</button>
            </form>
          </div>
        ) : (
          <ResultPage lifePathNumber={lifePathNumber} />
        )}
      </main>

      {/* 数秘術とは */}
      <section id="numerology-info" className="numerology-info">
        <h2>数秘術とは？</h2>
        <div>
  数秘術は、数字を通じて自分の本質や人生の目的を知る力強いツールです。
</div><br />
<div>
  あなたの生年月日や名前から導き出される「ライフパスナンバー」は、
</div><br />
<div>
  あなたの性格や運命の流れ、未来への道筋を明らかにします。
</div><br />
<div>
  この数字が持つ深い意味を理解することで、今後の人生に対する自信や明確なビジョンが得られ、
</div><br />
<div>
  もっと充実した毎日を送るための方向性を見つけることができます。
</div><br />
<div>
  あなたの運命を読み解き、新たな可能性を広げるための第一歩を踏み出してみませんか？
</div>
      </section>

      {/* 個人鑑定申込み */}
      <section id="contact" className="contact-info">
        <h2>個人鑑定申込み</h2>
        <form onSubmit={handleContactSubmit}>
          <label>
            名前:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            メールアドレス:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            お問い合わせ内容:
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="submit-button">送信する</button>
        </form>
      </section>
    </div>
  );
}

export default App;
