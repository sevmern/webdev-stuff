/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
  return "UP2246633";
}

function fn() {
  return 'Marie';
}

function sn() {
  return 'Wheatley';
}

function add(a,b) {
  return (a+b);
}

function subtract(a,b) {
  return (a-b);
}


function checkObject(obj) {
  obj.checked = true;
}

function checkObjectInside(obj){
  if (obj.data && typeof obj.data == 'object'){
    obj.data.checked = true;
  }
}

function arraySet(arr,i,n){
    if ( Number.isInteger(i) && i>=0 && i < arr.length){
      arr[i] = n;
    }
}

function addAll(arr){
  let sum = 0
  for (let num of arr){
    sum+= num;
  } return sum;
}

function larger(a,b){
  if (a>b){return a}
  if (b>a){return b}
  if (a=b){return a}
}

function largest(arr){
  if (arr.length > 0){
    let big = arr[0]
    for(let num of arr){
      if (num > big){big = num}
    }
    return big
  }
  else{return null}
}

function compare(a,b){
  if (a.length != b.length){return false;}
  for (let i = 0; i < a.length; i++){
    if (a[i] !== b[i]){return false;}
  } return true;
}

// //come back to this
// function addToAll(arr, n){
//   for(let i = 1; i <=n; i++){
//     arr[i] = arr[i]+ n
//   } return arr;

function addToAll(arr,n){
    for(let i = 0; i< arr.length; i++){
      arr[i] += n;
    }return arr;
  }

let remembered
function rememberThis(keepsake){
  remembered = keepsake;

}

function nArray(n){
  let restult = [];
  for (let i = 1; i <=n; i++){
    restult.push(i)
  }return  restult
}

function addAllOpt(arr){
  let sum = 0
  if (Array.isArray(arr) && arr.length > 0){
    
  for (let num of arr){
    sum+= num;
  } return sum;}
  else{ return 0}
}

function divisors(arr,div){
  return arr.filter(num => num%div === 0);
}

function multiples(n,m){
  let result = [];
  for(let i = 1; i<=n; i++){
    result.push(i*m);
  }return result;
}