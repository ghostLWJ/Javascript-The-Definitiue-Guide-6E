// chapter3.1.js
// Number
/*
	JavaScript 中的數字都以"浮點數值(Double)"表示。
	以64位元浮點格式表示數字，這代表可表示的
	最大 +-1.7976931348623157 * 10^308
	最小 +-5 * 10^-324

	JavaScript 的數字格式允許你精確表示任何介於 -9007199254740992(-2^53) 與 9007199254740992(2^53) 之間的整數。
	如果你用比這個大的整數，可能會在最後幾個位數喪失精準度。

	一個數字直接出現於 JavaScript 程式中，稱之為數字字面值(number literal)。
*/
console.log('超過 2 ^ 53 || -2 ^ 53 的整數會喪失精準度');
console.log('9007199254740992 + 10 = ' + 9007199254740992 + 10);

// 整數字面值
/*
	Base 10
		0
		3
		10000000
	Base 16
		0xff
		0Xff
		0xFF
		0XFF
	Base 8 ->ECMAScript 標準並未支援，不應使用開頭為0的整數字面值，strict 模式中明確禁止八進位字面值。
	0377
*/
console.log(0xff);
console.log(0Xff);
console.log(0xFF);
console.log(0XFF);
console.log(0377);

// 浮點字面值
/*
	可有小數點
		3.14
		2345.789
	可使用指數記號(exponential notation)
	[digits][.digits][(E|e)(+|-) digits]
	6.02e23 -> 6.02 * 10^23
	1.4738223E-32 -> 1.4738223 * 10^-32
*/

// JavaScript 中的算術運算
/*
	發生 overflow(溢位)、underflow(下溢)、除以零(divison by zero)的情形時，並不會產生錯誤訊息。
	數值運算結果 > 最大可表示的數字 -> 特殊的無限值(infinity value)以 Infinity表示。
	數值運算結果 < 最大可表示的數字 -> 特殊的負無限(negative infinity)以 -Infinity表示。
	運算的結果沒有明確定義的值，會得到"非數"值 -> NaN(not-a-number value)。
*/
console.log(0 / 0);
console.log(1 / 0);
console.log(-1 / 0);

console.log(1 / Infinity);
console.log(-1 / Infinity);

// Number 物件
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);

console.log(Number.MIN_VALUE / 2); // 0
console.log(-Number.MIN_VALUE / 2); // -0

// NaN
/*
	NaN 與任何值都不相等(包含 NaN 本身)
*/
console.log(NaN == NaN);
//若要比對則是利用 isNaN()
console.log(isNaN(NaN));
//或是 NaN != NaN
console.log(NaN != NaN);

// +0 -0
var zero = 0;
var negz = -0;
console.log(zero === negz);
console.log(1 / zero === 1 / negz); //正無限與負無限不相等

// 數字的精準度(precision)
var x = .3 - .2;
var y = .2 - .1;
console.log(x == y);
console.log(x == .1);
console.log(y == .1);

// Date
/*
	核心 JavaScript 包含一個 Date() 建構式，用來創建表示日期與時間的物件。
	Date 物件提供了簡單的日期計算
*/