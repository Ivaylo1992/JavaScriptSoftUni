function solution(arg) {
  const functions = {
    upvote: () => (this.upvotes += 1),
    downvote: () => (this.downvotes += 1),
    score: () => {
      const { upvotes, downvotes } = this;
      const balance = upvotes - downvotes;
      const totalVotes = downvotes + upvotes;
      const diff = (upvotes / totalVotes) * 100;

      let status = "new";

      if (totalVotes < 10) {
        status = "new";
      } else if (diff > 66) {
        status = "hot";
      } else if (balance >= 0 && totalVotes > 100) {
        status = "controversial";
      } else if (balance < 0) {
        status = "unpopular";
      }

      let additionalSum = 0;
      if (totalVotes > 50) {
        additionalSum =
          upvotes > downvotes
            ? Math.ceil(upvotes * 0.25)
            : Math.ceil(downvotes * 0.25);
      }
      return [
        upvotes + additionalSum,
        downvotes + additionalSum,
        balance,
        status,
      ];
    },
  };

  return functions[arg]();
}

let post = {
  id: "3",
  author: "emil",
  content: "wazaaaaa",
  upvotes: 100,
  downvotes: 100,
};

solution.call(post, "upvote");
solution.call(post, "downvote");
let score = solution.call(post, "score"); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
  solution.call(post, "downvote"); // (executed 50 times)
}

score = solution.call(post, "score"); // [139, 189, -50, 'unpopular']
console.log(score);
