const data = [
  { language: "JavaScript" },
  { language: "JavaScript" },
  { language: "TypeScript" },
  { language: "TypeScript" },
  { language: "C++" },
  { language: "Python" },
  { language: "C" },
  { language: "Go" },
  { language: "C" },
  { language: "Python" },
  { language: "Go" },
];

const newData = data.reduce((acc, item) => {
  const index = acc.findIndex((aa) => aa.language === item.language);
  if (index < 0) {
    acc.push({ ...item, count: 1 });
  } else {
    acc[index].count++;
  }
  return acc;
}, []);

console.log(newData);
