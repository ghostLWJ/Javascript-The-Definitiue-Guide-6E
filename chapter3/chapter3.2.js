// chapter3.2.js
// 字串 (string)
/*
	字串是一組 16 位元值的「不可變有序序列」
	字串是不可變的 (immutable)
	值 代表 某個 Unicode 字元
	與陣列一樣，索引值從 0 開始
	*** 字串的長度，是表示含 16 位元值的個數 ***
	試以用 \ud835\udc52 來表示一個字 其長度為 2
*/

/*
	用 ''
	或 ""
	包起來都是字串
*/
var a;
a = "hi";
console.log("a = " + a + "\ta typeof = " + typeof a);
a = 'Hello';
console.log("a = " + a + "\ta typeof = " + typeof a);

/*
	當使用 ''
	包起來時，請特別注意字串內的 '
	務必使用反斜線 (backslash，\) 字元來「跳脫」 (escape)
*/

var b;
b = 'this\'s my string';
console.log(b);

// 字串處理
/*
	串接 (concatenate strings)
	+ 運算子用於數字上，它們會相加
	+ 運算子用於字串上，它會把第二個字串附加至第一個字串上
	注意： ES5 中，字串可被視為唯讀的陣列，你可以使用 []  來讀取個別字元，但無法改變它
*/

var s;
s  = "hello, " + "world";
console.log(s);
console.log(s[0]);
s[0] = "q";
console.log(s[0]);

// 範式比對
/*
	JavaScript 定義 RegExp() 建構式來創建代表某種文字範式 (textual patterns) 的物件。
	可用正規運算式 (regular expressions) 描述， JavaScript 採用 Perl 的正規運算式語法。
	字串和 RegExp 物件皆有運用正規運算式來做範式比對 (pattern matching) 或是搜尋與取代 (search-and-replace) 
	動作的方法。
	RegExp 不是基礎型別，它是特化物件，如同 Date 物件，備有實用的 API。
	RegExp 不是基礎型別，但還是有自己的字面值語法。由一對斜線 (slash) 之間的文字所構成。
	/^HTML/
	/[1-9][0-9]* /
	第二個斜線後可續接一或多個字母，用以修改範式的意義。
	/\bjavascript\b/i
*/