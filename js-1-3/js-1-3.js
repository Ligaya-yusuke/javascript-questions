console.log('===========================')
console.log('現在持っているのタスク一覧')
console.log('===========================')
const tasks = ['掃除', '買い物', '散歩'];
tasks.forEach(function(value, index){
  console.log(`${index} : `, value);
});

const answer = window.prompt('タスクを入力してください');
tasks.push(answer);
alert('新しいタスクを追加しました。');
console.log('===========================')
console.log('現在持っているのタスク一覧')
console.log('===========================')
tasks.forEach(function(value, index){
  console.log(`${index} : `, value);
});
window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
