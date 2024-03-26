//? Task - 25.03.2024
//* 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.
//* 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.
//* 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.
//* 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.
//* 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.
//* 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.


let txt=prompt("soz daxil edin:");

let txt_trim=txt.trim(); // umumi daxil edilen metn
let last_index=txt.indexOf(" ");
let txt_birinci_soz=txt_trim.substring(0,last_index); // evvel ve axir bosluqlar silindi, birinci soz secildi umumi metnden.

// 1-)
console.log("length:",txt.length);

// 2-)
console.log("2-)",txt_birinci_soz.includes(txt.charAt(1)));

//3-)
console.log("3-)",txt_birinci_soz.startsWith(txt.charAt(1)));

//4-)
console.log("4-)",txt_birinci_soz.endsWith(txt.charAt(1)));

//5-)
console.log("5-)",txt_birinci_soz.indexOf(txt.charAt(1)));

//6-)
console.log("6-)",txt_birinci_soz.includes(txt_birinci_soz.toUpperCase()));
