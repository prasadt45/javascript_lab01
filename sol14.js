const post = { post: "This is a post" };
const comments = [{ content: "Good post" }, { content: "Thank you for the post" }];

const newObj = {
  ...post,
  comments: [...comments]
};

console.log(newObj);
