const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// { id, title, body}
const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어 title",
    body: "리덕스 미들웨어 body",
  },
  {
    id: 2,
    title: "redux-thunk",
    body: "yeah~",
  },
  {
    id: 3,
    title: "redux-saga 도 배우자!",
    body: "너무 많당..",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
