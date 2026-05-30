// higher_order.js — Bài B3

function pipe(...fns) {
  return (arg) => fns.reduce((value, fn) => fn(value), arg);
}

function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

async function retry(fn, maxAttempts = 3) {
  let attempt = 0;
  while (attempt < maxAttempts) {
    try {
      return await fn();
    } catch (error) {
      attempt += 1;
      if (attempt >= maxAttempts) throw error;
    }
  }
}

if (require.main === module) {
  const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => 'Kết quả: ' + x
  );
  console.log(process(5));

  const expensiveCalc = memoize((n) => {
    console.log('Đang tính...');
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
  });
  console.log(expensiveCalc(1000000));
  console.log(expensiveCalc(1000000));

  const search = debounce((query) => {
    console.log('Searching:', query);
  }, 500);
  search('a');
  search('ab');
  search('abc');
}

module.exports = { pipe, memoize, debounce, retry };
// ================= TEST =================

let count = 0;

retry(async () => {

    count++;

    console.log("Thử:", count);

    if (count < 3) {
        throw new Error("Lỗi!");
    }

    return "Thành công";

})
.then(result => console.log(result))
.catch(error => console.log(error.message));