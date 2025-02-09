/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function replaceText(elem,str){
    elem.textContent = str;}

function addTextTo(elem,str){
    elem.textContent += str;}

function moreBears(){
    animals.src ='http://placebear.com/400/200';
    animals.alt = 'A bear.';
    animals.title = 'A BEAR!';}

function setId(elem,str){
 elem.id = str;
 return elem;}

function setClass(elem,str){
    elem.className = str;
    return elem;}

function addAClass(elem, str){
 elem.classList.add(str);
 return elem;}

 function removeAClass(elem, str){
    elem.classList.remove(str);
    return elem;}

function newElement(name){
    const elem = document.createElement(name);
    return elem;}

function findElementById(id){
 return document.getElementById(id);} 

function findElementsByQuery(query){
    return document.querySelectorAll(query);}

function reverseList(query) {
    let list = document.querySelector(query);
    for (const item of list.children){
        list.prepend(item);}return list;}
    // let items = Array.from(list.children);
    // let babyList = document.createDocumentFragment();
    // for(let i = items.length -1; i>=0; i--){
    //     babyList.appendChild(items[i]);}
    //     list.appendChild(babyList);

function mover(moveThis, appendToThis){
    let toMove = document.querySelector(moveThis);
    let target = document.querySelector(appendToThis);
    target.appendChild(toMove)}

function filler(list, candidates){

}