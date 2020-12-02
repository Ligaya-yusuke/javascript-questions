    //変数iが3から100まで１ずつ増加
    for (let i = 3; i <100; i++) {
      //変数iが3かつ5で割り切れるとFizzBuzzと表示 
      if (i % 3 === 0 && i % 5 === 0 ) {
          console.log("FizzBuzz " + i);
      //変数iが5で割り切れるとBuzzと表示
      } else if (i % 5 === 0) {
        console.log("Buzz " + i);
      //変数iが3で割り切れるとFizzと表示
      } else if (i % 3 === 0) {
        console.log("Fizz " + i);
      }
    }