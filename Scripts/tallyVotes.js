const tallyVotes = (votes) => {
  return votes.reduce(
    (acc, name) => ({
      ...acc,
      [name]: acc[name] ? acc[name] + 1 : 1,
    }),
    []
  );
};

const votes = [
  "john",
  "johnny",
  "jackie",
  "johnny",
  "john",
  "jackie",
  "jamie",
  "jamie",
  "john",
  "johnny",
  "jamie",
  "johnny",
  "john",
];

console.log(tallyVotes(votes));
