"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const result_pt1 = 2 + 3 * (2 - 4) * 6;
printOut(result_pt1);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const millimeters = (25 * 1000) + (34 * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;
printOut(Math.round(sumPart2 * 100) / 100);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const part3Days = 3;
const part3Hours = 12;
const part3Minutes = 14;
const part3Seconds = 45;

const part3Answer = (part3Days * 24 * 60) +
                    (part3Hours * 60) +
                    part3Minutes +
                    (part3Seconds / 60);

printOut(part3Answer);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const totalMinutes = 6322.52;

const totalDays1 = totalMinutes / (24 * 60);
const days1 = Math.floor(totalDays1);

let remainder = totalDays1 - days1;

const totalHours = remainder * 24;
const hours = Math.floor(totalHours);

remainder = totalHours - hours;

const totalMinutesLeft = remainder * 60;
const minutes = Math.floor(totalMinutesLeft);

remainder = totalMinutesLeft - minutes;

const totalSeconds = remainder * 60;
const seconds = Math.floor(totalSeconds);

printOut(days1 + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds");

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(newLine);

const nokRate = 76 / 8.6;
const usdRate = 8.6 / 76;

const dollars = 54;

const nok = Math.round(dollars * nokRate);
const usd = Math.round(76 * usdRate);

printOut("54 USD = " + nok + " NOK");
printOut("76 NOK = " + usd + " USD");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

const text = "There is much between heaven and earth that we do not understand.";

printOut(text.length);
printOut(text.charAt(19));
printOut(text.substring(35, 43));
printOut(text.indexOf("earth"));

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut(5 > 3);
printOut(7 >= 7);
printOut("a" > "b");
printOut("1" < "a");
printOut("2500" < "abcd");
printOut("arne" !== "thomas");
printOut(2 === 5);
printOut(("abcd" > "bcd") === false);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut(Number("254"));
printOut(Number("57.23"));
printOut(Number("25 kroner"));

printOut(parseInt("254"));
printOut(parseFloat("57.23"));
printOut(parseFloat("25 kroner"));

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

const r = Math.floor(Math.random() * 360) + 1;

printOut(r);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

const totalDays = 131;

const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;

printOut("Weeks: " + weeks);
printOut("Days: " + days);