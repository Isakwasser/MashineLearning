export default function multiplyMatrix(
  m1: number[][],
  m2: number[][]
): number[][] {
  const m = m1.length;
  const n = m2[0].length;
  let ans: number[][] = [];
  for (let i = 0; i < m; i++) {
    const row: number[] = [];
    for (let j = 0; j < n; j++) {
      let temp = 0;
      for (let s = 0; s < m1[i].length; s++) {
        temp += m1[i][s] * m2[s][j];
      }
      row.push(temp);
    }
    ans = [...ans, row];
  }
  return ans;
}
