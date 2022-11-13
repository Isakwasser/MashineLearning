process.stdin.setEncoding("utf8");

// This function reads only one line on console synchronously. After pressing `enter` key the console will stop listening for data.
export default function readlineSync() {
  return new Promise((resolve, reject) => {
    process.stdin.resume();
    process.stdin.on("data", function (data) {
      process.stdin.pause(); // stops after one line reads
      resolve(data);
    });
  });
}
