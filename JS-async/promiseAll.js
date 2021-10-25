function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500);
  return "토끼";
};

const getTurtle = async () => {
  await sleep(3000);
  return "거북이";
};

async function process() {
  // 하나라도 에러 발생하면 Error
  //   const result = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  //   console.log(result);
  //   // 비구조 할당으로 편하게
  //   const [dog, rabbit, turtle] = await Promise.all([
  //     getDog(),
  //     getRabbit(),
  //     getTurtle(),
  //   ]);

  //race() 는 배열 중 가장 빨리 출력되는 것 반환
  //하나라도 가장 빨리 출력되는 것이 에러일 때만 Error 발생
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}

process();
