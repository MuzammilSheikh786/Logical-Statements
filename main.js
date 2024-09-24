"use strict";
//Logical Statements:
//(If,Else If,Else)
// let num3:number = 10
// let num4:number = 20
// if(num3===num4){
//     console.log("Both are equal");
// }
// else if(num3<num4){
//     console.log("num4 is greater");
// }
// else{
//     console.log("10 is not equal to 20");
// }
// let x = 8
// if(x==9){
//     console.log("my work is done");
// }
// else if(x==10){
//     console.log("work is not done");
// }
// else{
//     console.log("I do my work tomorrow");
// }
// Student Result Card
let studentPercentage = 89;
if (studentPercentage >= 80) {
    console.log("A-one Grade");
}
else if (studentPercentage < 80 && studentPercentage >= 70) {
    console.log("A grade");
}
else if (studentPercentage >= 60 && studentPercentage < 70) {
    console.log("B grade");
}
else if (studentPercentage >= 50 && studentPercentage < 60) {
    console.log("C grade");
}
else if (studentPercentage >= 40 && studentPercentage < 50) {
    console.log("D grade");
}
else {
    console.log("Fail");
}
