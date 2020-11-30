const coinFlip = num_of_coin_flips => {
    heads = 0;
    tails = 0;
    for(i = 0; i < num_of_coin_flips; i++){
     randomNumber = Math.floor(Math.random() * 2);
     roundNum = Math.round(randomNumber* 100) / 100;
     roundNum === 0
     ? heads += 1
     : tails += 1;
    }
    return `There are ${heads} heads and ${tails} tails. That's a ${((heads / num_of_coin_flips) * 100)} % / ${((tails / num_of_coin_flips) * 100)} % split`
  }
  
  console.log(coinFlip(3))
