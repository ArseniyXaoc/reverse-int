module.exports = 
function reverse (n) {
    let x = Math.abs(n)
    x = x.toString().split('').reverse().join('');
  return Number(x);
}


