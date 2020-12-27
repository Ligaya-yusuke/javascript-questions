'use strict';

// // // 配列コントラクタ
// // // let array1 = new Array(5);
// // // let array1 = new Array(`リンゴ`,`バナナ`,`イチゴ`);


// // // 配列リテラル（こちらを基本的に使用)
// // // let array2 = [`リンゴ`,`バナナ`,`イチゴ`];
// // // let array2 = [5];

// // // console.log(array1);
// // // console.log(array2);

// // // let array = [];
// // // console.log(array);

// // // 配列要素の検索(indexOf)
// // // let items = ['バナナ', 'イチゴ', 'リンゴ', 'メロン'];
// // // let result = items.indexOf('リンゴ');
// // // console.log( result );
// // //2

// // //   // 配列へ追加
// // // let _3nen5kumi = ['kato','sato','suzuki','tanaka','hayama'];
// // // console.log(`夏休み前:` + _3nen5kumi);
// // // _3nen5kumi[5] =`maeda`;

// // // // -pushメソッドで追加
// // // _3nen5kumi.push(`yamada`);
// // // console.log(`冬休み前:`+_3nen5kumi);

// // // オブジェクト
// // // -プロパティの集合
// // // -プロパティ：名前と値の組み合わせ

// // // 関数

// // // const area1 = function(r) {
// // // // const area1 = (r) =>{}
// // //   return r * r * Math.PI;
// // // };

// // // 半径から円面積求める
// // const radius = 10;

// // // 関数定義を使う
// // // function area0fCircle(r){
// // //   return r * r * Math.PI;
// // // }
// // // console.log(area0fCircle(radius));

// // // const area1= function(r){
// // //   return r * r * Math.PI;
// // // };
// // // console.log(area1(radius));

// // // // アロー関数
// // // const area2 = (r) =>{
// // //   return r * r * Math.PI;
// // // };
// // // console.log(area2(radius));

// // let lists = [
 
// //   { name: 'バナナ', price: '100' },
// //   { name: 'リンゴ', price: '200' },
// //   { name: 'メロン', price: '400' },
// //   { name: 'ブドウ', price: '250' },

// // ];

// // // lists.forEach( function( value ) { 
// // //   console.log( value.price.name );
// // // });

// // lists.forEach( function(value, index, array){
// //   i=0
// //   i+=1
// //   console.log(`${i} : ` + lists[i]);
// //   // console.log(value);
// // });


// var fruits = [ "apple", "orange", "melon" ];
//  fruits.forEach( item => console.log( item ) );

//  fruits.forEach( item => {
//   console.log( "中身を１つ取り出します" );
//   console.log( item );
// });

// const fruit =[
//   { ['店']: 'first-shop', apple: '   400円'},
// ]

// // console.log(fruit[0].店 + fruit[0].apple);
// fruit['ご飯'] = '100円' 
// console.log(fruit)


// fruit.grape ='500yen';
// console.log(fruit);

// fruit.forEach(function(value, index){
//   console.log(`${index} : `, value);
// });

// const fruits = [
//   { store: 'first-shop', apple: '400yen', banana: '300yen', cake: '400yen' },
//   { store: 'second-shop', apple: '200yen', banana: '400yen', cake: '600yen' },
//   { store: 'third-shop', apple: '600yen', banana: '500yen', cake: '200yen' },
//   { store: 'fourth-shop', apple: '520yen', banana: '450yen', cake: '540yen' },
// ];

// console.log( fruits[0].store);

// const tasks =[
// {['内容']: '机を片付ける、', ['ジャンル']: '掃除'},
// ];

const tasks = [
  { item: '机を片付ける', genre: '掃除'},
];
Object.keys(tasks).forEach((value, index) => {
  console.log(`${index} : [内容]${tasks[index].item}` +` [ジャンル]${tasks[index].item}`);
})
const task = window.prompt('タスクを入力してください');
const type = window.prompt('ジャンルを入力してください');
tasks.push({item: task, genre: type });
tasks.forEach((value, index) => {
  console.log(`${index} : `, `[内容]${tasks[index].item} ` + `[ジャンル]${tasks[index].genre}`);
});


// tasks.push(tasks[index].genre) = 'b'
// console.log(tasks)

// Object.keys(tasks).forEach(function(value, index) {
//   tasks.push(tasks[index].item) = a;
//   // tasks.push(tasks[index].genre) = b;
//   console.log(tasks);

//   console.log(`${index} : [内容]${tasks[index].item}` + `[ジャンル]${tasks[index].genre}`);
// })
