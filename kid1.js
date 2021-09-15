const kidsWithCandies1 = (candies, extraCandies) => {
  let res = [];
  let extra = extraCandies;
  let max = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    res.push(candies[i] + extra >= max);
  }

  return max;
};
console.log("---Option 1------");
console.log(kidsWithCandies1([2, 3, 5, 1, 3], 3));

function kidsWithCandies(candies, extraCandies) {
  let extra = extraCandies;
  let max = candies[0];
  let array = [];

  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > max) {
      max = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extra < max) {
      array.push("false");
    } else {
      array.push("true");
    }
  }
  return array;
}
console.log("---Option 1------");
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
