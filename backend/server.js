const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

app.use(cors()); // CORSを有効にして、Reactからリクエストを受け入れ
app.use(express.json()); // JSONボディを解析

app.post('/send-contact', (req, res) => {
  const { name, email, message } = req.body;

  // Nodemailerの設定
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    　user: process.env.GMAIL_USER,  // 環境変数から取得
      pass: process.env.GMAIL_PASS,  // 環境変数から取得
    },
  });

  const mailOptions = {
    from: email,  // フォームで入力されたメールアドレス
    to: '',  // あなたのメールアドレス
    subject: 'お問い合わせフォーム',
    text: `名前: ${name}\nメールアドレス: ${email}\nメッセージ: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error: ' + error.message);
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
