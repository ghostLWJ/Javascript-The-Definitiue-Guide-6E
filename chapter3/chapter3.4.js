// chpater3.4.js
// null 與 undefined
/*
	null -> 語言關鍵字
		用來代表數字、字串或物仲中「沒有值」 (no value)
	undefined (未定義) -> 預先定義的全域變數
		ES3 是一個可讀/可寫的變數
		ES5 更正了這個錯誤，是唯讀。
*/
console.log(typeof null);
console.log(typeof undefined);

// 如何使用 null 與 undefined
/*
	undefined 可視為代表系統層級的、非預期的、或是類似錯誤的「沒有值」，
	null 代表程式層級的、正常的、或預期中的「沒有值」。
	要將這種值指定給變數或特色，建議以 null 。
*/

console.log(null == undefined);