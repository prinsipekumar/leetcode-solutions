async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

async function demo() {
  console.log("Start");
  await sleep(2000);
  console.log("After 2 seconds");
}
demo();
