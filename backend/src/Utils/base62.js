const CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function encode(num) {
  if (num === 0n) {
    return CHARSET[0];
  }

  let str = '';
  
  const base = 62n; 

  while (num > 0n) {
    let remainder = num % base;
    str = CHARSET[Number(remainder)] + str; 
    num = num / base;
  }
  return str;
}

function decode(str) {
  let num = 0n;
  const base = 62n;
  const len = str.length;

  for (let i = 0; i < len; i++) {
    const value = BigInt(CHARSET.indexOf(str[i]));

    if (value === -1n) {
      throw new Error('Invalid Base62 string');
    }

    num = num * base + value;
  }
  return num;
}

module.exports = {
    encode,
    decode
};