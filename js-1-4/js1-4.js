'use strict';
const title = 
`===========================
  現在持っているのタスク一覧
===========================`;
const tasks = [
  { item: '机を片付ける', genre: '掃除'},
  { item: '牛乳を買う', genre: '買い物'},
  { item: '散歩する', genre: '運動'},
];

function answer () {  
  console.log(title); 
  Object.keys(tasks).forEach((value, index) => {
    console.log(`${index} : [内容]${tasks[index].item}` + `、` + `[ジャンル]${tasks[index].item}`);
  })
  const task = window.prompt('タスクを入力してください');
  const type = window.prompt('ジャンルを入力してください');
  tasks.push({item: task, genre: type });
  console.log(title); 
  tasks.forEach((value, index) => {
    console.log(`${index} : `, `[内容]${tasks[index].item} ` + `、` +  `[ジャンル]${tasks[index].genre}`);
  });
}
answer();
window.prompt('「確認,追加,削除,終了」の4つのいずれかを入力してください');
