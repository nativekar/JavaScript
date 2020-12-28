const wordCountInSentence = (sentence) => {
  const breakUp = sentence.split(" ");
  const wordArr = [];
  let wordCount = 0;
  for (let i = 0; i < breakUp.length; i++) {
    wordArr.push(breakUp[i].match(/[^A-Za-z-.,;?]+/g));
    if (wordArr[i] === null) {
      wordCount++;
    }
  }
  return wordCount;
};

const sentence = "0bcd 3dfh; good? 3ea a1 bad good-bad.";
console.log(wordCountInSentence(sentence));
