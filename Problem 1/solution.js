/*Problem 1 This problem was asked by Microsoft.
Given a 2D matrix of characters and a target word,
write a function that returns whether the word can be
found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:
[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
and the target word 'FOAM',
you should return true, since it's the leftmost column.
Similarly, given the target word 'MASS', you should return true, since it's the last row.
*/


const matrix = 
[['F', 'A', 'C', 'I'],
['O', 'B', 'Q', 'P'],
['A', 'N', 'O', 'B'],
['M', 'A', 'S', 'S']];

function result(word){

    let matrixWord= word.toUpperCase();
    let indexLetter=null;
    let wordToCheck= ''; 
    let direction ='';



    // I loop through the prinpical array
    for(let i=0; i < matrix.length; i++){ 
        if(matrixWord.length > matrix[i].length){
            return `The word can only have ${matrix[i].length} characters`
        }
              
        // I loop through the internal arrays
        for(let j=0; j < matrix[i].length; j++){   
            
           //look for the first letter in the matrix (arr[i][j])
             if(matrixWord[0]=== matrix[i][j]){
               
                //check on the horizontal axis [j] the second letter of the word
                //checking the internal positions of the array
                //if true, I fix the position value j to compare the rest of the letters
               if(matrixWord[1]===matrix[i][j+1]){
                console.log('can be horizontal');
                indexLetter=i;
                direction ='horizontal';
                break;
                }
                
                //check on the vertical axis [i] checking the arrays that make up the matrix
                //checking the internal positions of the array
                //if true, I fix the position value i to compare the rest of the letters
                if(matrixWord[1]===matrix[i+1][j]){
                console.log('can be vertical');
                indexLetter=j;
                direction ='vertical';
                break;
                } 
            }  
        }
    }
    
        //Make a loop to concatenate all letters in the horizontal direction
        if(direction==="horizontal"){
            for(let k=0; k < matrixWord.length; k++){
                if(matrixWord[k]===matrix[indexLetter][k]){
                wordToCheck+=matrix[indexLetter][k];               
                }    
            }
        }
    
        //make a loop to concatenate all letters in the vertical direction
        if(direction==="vertical"){
            for(let k=0; k < matrixWord.length; k++){
                if(matrixWord[k]===matrix[k][indexLetter]){
                wordToCheck+=matrix[k][indexLetter];               
                }    
            }
        }

    //finally compare the word that I must search with the word concatenated in the chosen direction, to know the result
    if(wordToCheck===matrixWord){
        return true;
    }else{
        return false;
    }
    
};

const test=result('foam');
console.log(test);

