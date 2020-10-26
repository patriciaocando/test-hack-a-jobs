/* 
Given a list of numbers with only 3 unique numbers
(1, 2, 3), sort the list in O(n) time.

Example 1:
Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]
Challenge: Try sorting the list using constant space.
 */

//SORT METHOD
let arr =[3, 3, 2, 1, 3, 2, 1];

//const result = arr.sort((a,b)=>{return a-b});
//console.log(result);

//BUBBLE METHOD
function sortFunction(arr){
    let arrLong = arr.length;
    let arrCopy=[...arr];

    for(let i=0; i < arrLong; i++){
   
        for(let j = 0; j < arrLong - i; j++){

            if(arrCopy[j] > arrCopy[j + 1]){
                
                let aux = arrCopy[j + 1];
                arrCopy[j + 1]= arrCopy[j];
                arrCopy[j]= aux;  
            }
        }
    }
    return arrCopy;
}

let arrSorted = sortFunction(arr);
console.log(arrSorted);