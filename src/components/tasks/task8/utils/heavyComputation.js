export function heavyComputation(num) {
  let x = 0;
  for (let i = 0; i < 1000000; i++) {
    x += (i * num) % 7;
  }
  return x;
}
