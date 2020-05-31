var europa: number = 4965.7 + 4626.4 + 4705.8 + 4615.2 + 4541.2 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
var nordamerika: number = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6167 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
var afrika: number = 1028 + 1041.9 + 1072.1 + 1072.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
var asien: number = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
var südamerika: number = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.3 + 1294.7 + 1279.7 + 1261.5;
var australien: number = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.3 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.3 + 2100.5;

var welt: number = europa + nordamerika + afrika + asien + südamerika + australien;


var eu: number = (europa / welt) * 100;
var na: number = (nordamerika / welt) * 100;
var af: number = (afrika / welt) * 100;
var as: number = (asien / welt) * 100;
var sa: number = (südamerika / welt) * 100;
var au: number = (australien / welt) * 100;

var eucomp: number = 4209.3 - 4965.7;
var nacomp: number = 6035.6 - 6600;
var afcomp: number = 1235.5 - 1028;
var ascomp: number = 16274.1 - 12954.7;
var sacomp: number = 1261.5 - 1132;
var aucomp: number = 2100.5 - 1993;

var eupro: number = (eucomp / europa) * 100;
var napro: number = (nacomp / nordamerika) * 100;
var afpro: number = (afcomp / afrika) * 100;
var aspro: number = (ascomp / asien) * 100;
var sapro: number = (sacomp / südamerika) * 100;
var aupro: number = (aucomp / australien) * 100;

console.group("europa");
console.log(`Die Emission von Europa ist:${europa}`, " kg CO2.");
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit: ${eu}`, "%.");
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 Die Emission um${eupro}`, "% verändert");
console.log(`2018 im Vergleich zu 2008 sind das ${eucomp}`, "kg CO2");
console.groupEnd();

console.group("nordamerika");
console.log(`Die Emission von Europa ist: ${nordamerika}`, "kg CO2");
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit:${na}`, "%.");
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 Die Emission um${napro}`, "% verändert");
console.log(`2018 im Vergleich zu 2008 sind das ${nacomp}`, "kg CO2");
console.groupEnd();

console.group("afrika");
console.log(`Die Emission von Europa ist: ${afrika}`, "kg CO2.");
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit: ${af}`, "%.");
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 Die Emission um${afpro}`, "% verändert");
console.log(`2018 im Vergleich zu 2008 sind das ${afcomp}`, "kg CO2");
console.groupEnd();

console.group("asien");
console.log(`Die Emission von Europa ist: ${asien}`, "kg CO2.");
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit: ${as}`, "%.");
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 Die Emission um${aspro}`, "% verändert");
console.log(`2018 im Vergleich zu 2008 sind das ${ascomp}`, "kg CO2.");
console.groupEnd();

console.group("südamerika");
console.log(`Die Emission von Europa ist: ${südamerika}`, "kg CO2.");
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit: ${sa}`, "%.");
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 Die Emission um${sapro}`, "% verändert");
console.log(`2018 im Vergleich zu 2008 sind das ${sacomp}`, "kg CO2");
console.groupEnd();

console.group("australien");
console.log(`Die Emission von Europa ist: ${australien}`, "kg CO2.");
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit: ${au}`, "%.");
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 Die Emission um${aupro}`, "% verändert");
console.log(`2018 im Vergleich zu 2008 sind das ${aucomp}`, "kg CO2");
console.groupEnd();