export function calculatePercentage(num, percent, plus = true) {
  console.log(num, percent);
  if (plus) {
    return Math.ceil(num + (percent / 100) * num);
  } else {
    return Math.ceil(num - (percent / 100) * num);
  }
}
