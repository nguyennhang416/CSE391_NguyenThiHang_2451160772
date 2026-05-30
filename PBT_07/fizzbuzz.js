// fizzbuzz.js — Bài B4

function classicFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let out = '';
        if (i % 3 === 0) out += 'Fizz';
        if (i % 5 === 0) out += 'Buzz';
        console.log(out || i);
    }
}

function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let out = '';
        for (const r of rules) {
            if (i % r.divisor === 0) out += r.word;
        }
        console.log(i + ' => ' + (out || i));
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { classicFizzBuzz, customFizzBuzz };
}
// Gọi hàm chạy thử
classicFizzBuzz();
