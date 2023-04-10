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

// Change percent type
export const percentFormat = (num) => {
  return (Math.abs(num - 1) * 100).toFixed(2) + '%';
}

// marketCap format
export const marketCapFormat = (num) => {
  if (num >= 1000000000) {
    return '$' + (num / 1000000000).toFixed(2) + "B";
  } else if (num >= 1000000) {
    return '$' + (num / 1000000).toFixed(2) + "M";
  } else {
    return '$' + num.toFixed(2);
  }
};