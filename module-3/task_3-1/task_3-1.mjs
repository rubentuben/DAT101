"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

const våkneTid = 6;
const tid = 7;
if (våkneTid === tid) {
  printOut("Ta bussen.");
} else if (tid === 8) {
  printOut("Ta toget.");
} else {
  printOut("Kjør bil.");
}


printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part4Tall = 0;
if (part4Tall > 0) {
  printOut("Positivt!");
} else if (part4Tall < 0) {
  printOut("Negativt!");
} else {
  printOut("Må være 0!");
}


printOut(newLine);

printOut("--- Part 6 og 7 -----------------------------------------------------------------------------------------");
/* Put your code below here!*/

const minsteStørrelse = 4;
const størsteStørrelse = 6;
const imageUserSize = Math.floor(Math.random() * 8) + 1;
printOut(`Image User Size = ${imageUserSize}`);
if (imageUserSize >= minsteStørrelse) {
  if (imageUserSize <= størsteStørrelse) {
    printOut("Takker!");
  } else {
    printOut("Bildet er for stort.");
  }
} else {
  printOut("Bildet er for lite.");
}

if (imageUserSize > størsteStørrelse) {
  printOut("Bildet er for stort.");
} else if (imageUserSize < minsteStørrelse) {
  printOut("Bildet er for lite.");
} else {
  printOut("Takker!");
}

printOut(newLine);

printOut("--- Part 8 og 9 -----------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut({monthName});
if (monthName.includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You don't need to take vitamin D");
}

switch(monthName){
  case "January":
  case "Mars":
  case "Mai":
  case "Juli":
  case "August":
  case "October":
  case "December":
    printOut("31 Days in month.");
    break;
  case "February":
    printOut("28 Days in month.");
    break;
  default:
    printOut("30 Days in month.");
}
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if(monthName === "March" || (monthName === "May")){
  printOut("Beklager, stengt for nå.!");
}else if( monthName === "April"){
  printOut("Beklager, stengt for nå, men gå inn i bygningen ved siden av. Der er det midlertidig galleri!");
}else{
  printOut("Velkommen!");
}


printOut(newLine);
