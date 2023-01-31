"use strict";
let time = new Date();
let age = 35;

function ShowAlert(content){
    alert( content?content: typeof time);
    time = 4474875465988745
    alert( content?content: typeof time);
}
function ShowPrompt(content){
    prompt( 'What is the time right now ?' ,time);
}
function ShowConfirm(content){
    confirm( 'What is the time right now ?');
}