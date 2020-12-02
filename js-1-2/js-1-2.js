
// while以下が真の時は処理を継続
while(true) {
  const answer = window.prompt('日本の首都は？');
  // answerが東京でない場合処理を継続
  if (answer !== '東京') {
    alert('不正解です！');
    continue;
  } 
  // answerが東京の場合処理を終了
  if (answer === '東京'){
    alert('正解です！');
    break;
  }
}
