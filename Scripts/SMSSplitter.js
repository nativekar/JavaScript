const fetchSegments = (message) => {
  const length = message.length;
  let outputArr = [];
  const segmentLength = 160;
  if (length < segmentLength) {
    outputArr.push(message);
  } else {
    const breakPoint = Math.ceil(length / segmentLength);
    console.log(breakPoint);
    for (let x = 1; x <= breakPoint; x++) {
      const finalVal = `${message.slice(0, segmentLength - 6)}
        (${x}/${breakPoint}) ${message.slice(segmentLength - 6)}`;
      outputArr.push(finalVal);
    }
  }
  return outputArr;
};

const message =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis partu sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore ver rup. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa.";

console.log(fetchSegments(message));
