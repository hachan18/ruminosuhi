// 生年月日から数秘術のライフパスナンバーを計算する関数
export const calculateLifePathNumber = (dob) => {
  // 生年月日を YYYY-MM-DD 形式で受け取る
  const date = new Date(dob);

  // 無効な日付チェック
  if (isNaN(date.getTime())) {
    throw new Error("無効な日付です");
  }

  let sum = 0;

  // 生年月日の数字をすべて足し合わせる
  const dateDigits = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`;
  for (let char of dateDigits) {
    sum += parseInt(char);
  }

  // 数字を一桁になるまで繰り返し足し合わせる
  while (sum >= 10) {
    sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
  }

  return sum;
};
