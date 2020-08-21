const characterCount = (sampleInputData) => {
  const simplifiedData = sampleInputData.split("\n");
  const K = parseInt(simplifiedData[0]);
  const N = parseInt(simplifiedData[1]);
  let iterator,
    count = 0;
  for (iterator = 0; iterator <= N; iterator++) {
    let n = iterator;
    while (n > 0) {
      if (n % 10 === K) {
        count++;
      }
      n = Math.floor(n / 10);
    }
  }
  return count;
};

const dataSet = "2\n35";
console.log(characterCount(dataSet));
