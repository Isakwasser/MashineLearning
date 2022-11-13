export default function transponate(m: number[][]): number[][] {
  const ans: number[][] = [];
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (!ans[j]) {
        ans[j] = [];
      }
      ans[j][i] = m[i][j];
    }
  }
  return ans;
}
