import React from 'react';
import './App.css';

function ResultPage({ lifePathNumber, handleBack }) {
  const lifePathInfo = {
    1: {
      description: "独立心が強く、自己主張ができるリーダータイプ。創造力と行動力にあふれ、常に新しい挑戦を求めます。時には頑固で、自分の考えに固執することもありますが、目標に向かって突き進む力を持っています。",
      career: "起業家、リーダー、クリエイター、革新者"
    },
    2: {
      description: "協調性に富んだ人。穏やかで感受性が強く、他人の気持ちを理解する力があります。パートナーシップやグループ内で調和を保つ役割を担います。静かなサポート役として目立たない部分で活躍します。",
      career: "カウンセラー、教師、調停者、アーティスト"
    },
    3: {
      description: "表現力豊かで創造的、社交的な性格。人との交流を楽しみ、話すことや書くことに長けています。自分の感情を表現し、他人にも影響を与えることができる魅力的な人物です。",
      career: "作家、演劇、マスコミ、マーケティング"
    },
    4: {
      description: "実務的で堅実、勤勉なタイプ。安定性と計画性を重視し、地道に努力することで成功を収めます。細かい作業を丁寧にこなし、計画的に物事を進める力があります。",
      career: "エンジニア、建設業、事務職、会計士"
    },
    5: {
      description: "自由で冒険心旺盛、変化を求めるタイプ。新しい経験をすることで成長し、自由な環境で活躍します。好奇心が旺盛で、退屈を嫌い、常に刺激を求めます。",
      career: "旅行業、広告業、スポーツ、ライター"
    },
    6: {
      description: "愛情深く、責任感が強い。家族やコミュニティに対する深い思いやりを持っており、周囲の人々をサポートします。調和を重視し、家庭的な役割を果たすことに喜びを感じます。",
      career: "介護士、教師、医師、保育士、アートセラピスト"
    },
    7: {
      description: "精神的に深い洞察力を持ち、知識を求める探求者。内向的で思索を重ね、哲学的な考え方をすることが多いです。物事を深く掘り下げ、真理を追求します。",
      career: "研究者、心理学者、ライター、占い師"
    },
    8: {
      description: "経済的な成功を追求するビジネス志向の人物。物質的な成功と権力を重視し、実務的な能力に優れています。冷静で計画的に事を進め、大きな目標に挑戦します。",
      career: "経営者、弁護士、銀行家、投資家"
    },
    9: {
      description: "人道的で寛大な心を持ち、世界を良くすることに貢献したいという強い意志があります。感受性が高く、人々を助けることで自分の使命を感じることが多いです。芸術や社会貢献に向いています。",
      career: "ボランティア、アーティスト、医療、政治家"
    },
    11: {
      description: "直感力に優れた霊的なリーダー。人々に影響を与える能力を持ち、深い精神的な教えを提供することができます。しばしば他人の模範となり、人々を導く役割を果たします。",
      career: "精神的指導者、教師、霊的リーダー、哲学者"
    },
    22: {
      description: "夢を実現する力を持つ建設的なビジョナリー。非常に高い目標を持ち、大きなプロジェクトを推進する能力があります。人々を導く強い意志と計画性を兼ね備えています。",
      career: "建設業、発展的企業家、政治家、プロジェクトマネージャー"
    },
    33: {
      description: "無償の愛と奉仕の象徴。周囲の人々に深い愛と理解を与える力を持ち、他者のために自分を犠牲にすることに満足を感じます。非常に直感的で、他者を癒す能力があります。",
      career: "ヒーラー、カウンセラー、教育者、社会福祉活動"
    },
  };

  return (
    <div className="result-container">
      <h2>あなたの
      <br />
      ライフパスナンバーは</h2>
      <h3 className="life-path-number">{lifePathNumber}</h3>
      <p>{lifePathInfo[lifePathNumber]?.description}</p>
      <p>
      <br />
        <strong>適職業:</strong>
        <br /> {lifePathInfo[lifePathNumber]?.career}
      </p>
      <br />
      <div className="image-container">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0C9Y6W5gLbWuqWhgw910I8pRWB7gkn82Ipq1z8zrOAKVaJJvUXaiJgnQEOIefCQUXg5_Ip0fGaSBCLswG7YdKo7xf0O2BI-L-lZvvbvpDgspl88TmdLxVCQqNl41A0OB_Bhem8zf1OdU/s800/job_illustrator_pc_woman.png" alt="icon" className="result-icon" />
      </div>
      <a href="/" className="back-button">戻る</a>
    </div>
  );
}

export default ResultPage;
