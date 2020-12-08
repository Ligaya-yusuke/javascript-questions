const title = 
`===========================
  現在持っているのタスク一覧
===========================`;
const tasks = ['掃除', '買い物', '散歩'];

function answer () {  
  console.log(title); 
  tasks.forEach((value, index) => {
  console.log(`${index} :  ${value}`);
  });
  const task = window.prompt('タスクを入力してください');
  tasks.push(task);
  alert('新しいタスクを追加しました。');
  console.log(title);
  tasks.forEach((value, index) => {
    console.log(`${index} :  ${value}`);
  });
}
answer();

window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
