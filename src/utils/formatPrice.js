// Price formatting for each Type

// Coin price type
export const coinPriceFormat = (price) => {
  const num = parseFloat(price);
  if (num !== 0) {
    let decimalCount = num;
    if (num >= 1) {
      decimalCount = num.toFixed(2);
    } else {
      let temp = num;
      let precision = 0;
      while (temp < 1) {
        temp *= 10;
        precision++;
      }
      decimalCount = num.toFixed(precision + 4);
    }
    return '$' + decimalCount;
  } else {
    return '$0.00';
  }
}