export function calculatePercentage(num, percent, add, plus = true) {
  if (plus) {
    return Math.ceil(num + (percent / 100) * num + add);
  } else {
    return Math.ceil(num - (percent / 100) * num + add);
  }
}
