
//定数resultがtrueであり続けるかぎり計算
const result = true;
while(result) {
  let answer = window.prompt(`日本の首都は？`);
  // answerが東京でない場合
  while (answer !== `東京`) {
  alert(`不正解です！`);
  break;
  }
  // answerが東京の場合
  while (answer === `東京`) {
  alert(`正解です！`);
  break;
  }
}
