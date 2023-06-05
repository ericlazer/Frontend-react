// Price formatting for each Type

// Coin price type
export const coinPriceFormat = (price) => {
  const num = parseFloat(price);

  if (num >= 1e8) { // 100,000,000
    return '$' + (num / 1e9).toFixed(1) + 'B';
  } else if (num >= 1e6) { // 1,000,000
    return '$' + (num / 1e6).toFixed(1) + 'M';
  } else if (num >= 1e5) { // 100,000
    return '$' + (num / 1e3).toFixed(1) + 'K';
  } else if (num !== 0) {
    let decimalCount;
    if (num >= 1) {
      decimalCount = num.toFixed(2);
    } else {
      let temp = num;
      let precision = 0;
      let nonZeroCount = 0;
      while (nonZeroCount < 2) {
        temp *= 10;
        precision++;
        if (Math.floor(temp) !== 0) {
          nonZeroCount++;
        }
      }
      decimalCount = num.toFixed(precision);
    }
    const decimalDigits = decimalCount.includes('.') ? decimalCount.split('.')[1].length : 0;
    return '$' + parseFloat(decimalCount).toLocaleString('en', {minimumFractionDigits: decimalDigits});
  } else {
    return '$0.00';
  }
}

// Change percent type
export const percentFormat = (num) => {
  if (typeof num === "number") {
    return (Math.abs(num - 1) * 100).toFixed(2) + '%';
  }
  else {
    return num;
  }
}

// Change percent type
export const normalPercentFormat = (num) => {
  if (typeof num === "number") {
    return num.toFixed(2) + '%';
  } else {
    return num;
  }
}

// marketCap format
export const marketCapFormat = (num) => {
  if (typeof num === "number") {
    if (num >= 1000000000) {
      return '$' + (num / 1000000000).toFixed(2) + "B";
    } else if (num >= 1000000) {
      return '$' + (num / 1000000).toFixed(2) + "M";
    } else {
      return '$' + num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
  } else {
    return '$0.00';
  }
};

// marketCap format
export const numberFormat = (num) => {
  if (typeof num === "number") {
    if (num >= 1000000000) {
      return (num / 1000000000) + "B";
    } else if (num >= 1000000) {
      return (num / 1000000) + "M";
    } else {
      return num.toLocaleString();
    }
  } else {
    return 0;
  }
};

// Change unix timestamp to time format
export const formatUnixTimestamp = (unixTimestamp) => {
  // The Unix timestamp is in seconds, but JavaScript works with milliseconds,
  // so we need to multiply by 1000
  const date = new Date(unixTimestamp * 1000);

  const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  return date.toLocaleString('en-US', options);
}

// Ellipis form
export const truncateString = (str, num) => {
  if (str.length <= num) {
      return str
  }
  return str.slice(0, num) + '...'
}