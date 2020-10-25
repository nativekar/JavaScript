const maskCard = (creditCard) => {
  let maskedValue = "";
  if (creditCard.length < 6) {
    return creditCard;
  } else if (creditCard.length == 6) {
    const charAt2 = "#";
    const index = 1;    
    const masked =
      creditCard.substring(0, index).concat(charAt2).concat(creditCard.substring(index + 1));
    return masked;
  } else {
    const first4 = creditCard.substring(0, 1);
    const last5 = creditCard.substring(creditCard.length - 4);
    const mask = creditCard
      .substring(1, creditCard.length - 4)
      .replace(/\d/g, "#");
    maskedValue = first4.concat(mask).concat(last5);
  }
  return maskedValue;
};

const creditCard = "65432163354";
console.log(maskCard(creditCard));
