function generateItems() {
  const list = [];
  for (let i = 1; i <= 1000; i++) {
    list.push(`Item ${i}`);
  }
  return list;
}

export const items = generateItems();
