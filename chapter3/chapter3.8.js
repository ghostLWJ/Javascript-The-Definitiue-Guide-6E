// chapter3.8.js
// 型別轉換
/*
  JavaScript 預期是 boolean 值，你可以給它一個任何型別的值，需要的話 JavaScript 會自動轉換該值。
*/
console.log(typeof (10 + " object"));
console.log(typeof ("7" * "4"));
var n = 1 - "x";
console.log(n);
console.log(typeof (n + " object"));

// 詳見3.2表
/*
  基型至基型 (primitive-to-primitive) 的轉換相對直接。
*/

// 轉換與相等性
/*
  嚴格相等性運算子 (strict equality operator) === 進行測定相等性時，不會進行型別轉換
  另一重點，undefined 可以轉換為 boolean 時是 false 但不代表 undefined == false。
*/

// 明確的轉換
/*
  有時你會需要明確的 (explicit) 轉換。
  最簡單的方式：
    Boolean(), Number(), String(), Object() -> 不用 new 運算子來當做 wrapper 物件的建構式時，它們可作為轉換函式。
*/
console.log(typeof Number("3"));
console.log(typeof String(false));
console.log(typeof Boolean([]));
console.log(typeof Object(3));

/*
  任何值都有 toString() 方法，所產生的結果通常都跟 String() 函式回傳的結果相同。
  但 null 與 undefined 沒有該方法， 而 Object() 函式在這情況下不會拋出例外，而是傳回新創建的空物件，若用另種方法嘗試轉換為物件
  會產生 TypeError
*/

/*
  某些運算子會執行隱含的 (implicit) 型別轉換，
  例如 + 的運算元是字串，它會把另一個也轉為字串。
  另種 一元 + 運算子會將運算元轉為數字。
  而 一元 ！ 運算子會將運算元轉為 boolean 並逆轉其值
  x + "" -> String(x)
  +x -> Number(x)
  x-0 -> Number(x)
  !!X -> Boolean(x), 有兩個 !! 將之轉為原值 但還是 Boolean
*/

// Number.toString() 接受額外（非必需）的基數，指定轉換的底數 (radix) 或 基數 (base)
var n = 17;
var binary_string = n.toString(2);
var octal_string = "0" + n.toString(8);
var hex_string = "0x" + n.toString(16);
console.log(n);
console.log(binary_string);
console.log(octal_string);
console.log(hex_string);
console.log(n.toString(17)); // 當然你也可以指定別的基數，介於 2 至 36之間。

// 將數字以特殊的格式轉為字串
/*
  number-to-string
  toFixed() -> 指定小數點後要幾位
  toExponential() -> (指數記號） 指定小數點後要幾位，小數點前還有一位（代表指定的位數，還要在大1）
  toPrecision() ->  指定的有效位數，若指定的有效位數無法顯示所有整數部份，就會使用指數記號
  需要時會進行四捨五入，或是補零。
*/
var testNum = 123456.489;
console.log(testNum.toFixed(0));
console.log(testNum.toFixed(2));
console.log(testNum.toFixed(5));

console.log(testNum.toExponential(1));
console.log(testNum.toExponential(3));
console.log(testNum.toExponential(5));
console.log(testNum.toExponential(10));

console.log(testNum.toPrecision(4));
console.log(testNum.toPrecision(7));
console.log(testNum.toPrecision(10));

