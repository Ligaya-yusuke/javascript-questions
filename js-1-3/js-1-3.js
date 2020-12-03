console.log('===========================')
console.log('現在持っているのタスク一覧')
console.log('===========================')
let task = ['掃除', '買い物', '散歩'];
for(i=0; i < task.length; i++) {
  console.log(`${i} : ` + task[i]);
};

const answer = window.prompt('タスクを入力してください');
task.push(answer);
alert('新しいタスクを追加しました。');
console.log('===========================')
console.log('現在持っているのタスク一覧')
console.log('===========================')
for(i=0; i < task.length; i++) {
  console.log(`${i} : ` + task[i]);
}
window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
