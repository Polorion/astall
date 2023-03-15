export function calculatePercentage(num, percent, plus = true) {
  if (plus) {
    return Math.ceil(num + (percent / 100) * num);
  } else {
    return Math.ceil(num - (percent / 100) * num);
  }
}
