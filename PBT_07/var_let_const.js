// PHIẾU BÀI TẬP 07 — A1, A2, A3 demo scripts

// A1 — Hoisting / TDZ / const behavior
console.log('--- A1 ---');
// Đoạn 1
console.log('Đoạn 1 output (expect undefined):', (function(){ try{ console.log(x); }catch(e){ console.log(e.toString()); } var x = 5; return x; })());

// Đoạn 2
console.log('Đoạn 2 output (expect ReferenceError):');
try{ console.log(y); } catch(e) { console.log('  Caught:', e.toString()); }
let y = 10;

// Đoạn 3
console.log('Đoạn 3 output (expect TypeError on reassign):');
try{ const z = 15; z = 20; console.log(z); } catch(e){ console.log('  Caught:', e.toString()); }

// Đoạn 4
console.log('Đoạn 4 output (expect [1,2,3,4]):');
const arr = [1,2,3]; arr.push(4); console.log(arr);

// Đoạn 5
console.log('Đoạn 5 output (block scope let):');
let a = 1;
{
    let a = 2;
    console.log('  Trong block:', a);
}
console.log('  Ngoài block:', a);

// A2 — Data types & coercion
console.log('\n--- A2 ---');
console.log('typeof null:', typeof null);
console.log('typeof undefined:', typeof undefined);
console.log('typeof NaN:', typeof NaN);
console.log('"5" + 3 =>', "5" + 3);
console.log('"5" - 3 =>', "5" - 3);
console.log('"5" * "3" =>', "5" * "3");
console.log('true + true =>', true + true);
console.log('[] + [] =>', [] + []);
console.log('[] + {} =>', [] + {});
console.log('{} + [] =>', {} + []);

// A3 — == vs === examples
console.log('\n--- A3 ---');
console.log('5 == "5" ->', 5 == "5");
console.log('5 === "5" ->', 5 === "5");
console.log('null == undefined ->', null == undefined);
console.log('null === undefined ->', null === undefined);
console.log('NaN == NaN ->', NaN == NaN);
console.log('0 == false ->', 0 == false);
console.log('0 === false ->', 0 === false);
console.log('"" == false ->', "" == false);

// End
console.log('\n(End of var_let_const.js)');
