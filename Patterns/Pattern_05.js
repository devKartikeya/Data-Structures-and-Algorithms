/* Print Reverse Increasing */

/*
            *
          * *
        * * *
      * * * *
    * * * * *
*/

function printReverseIncreasing(){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5 - i - 1; j++){
            process.stdout.write(" ");
        }
        for (let k = 0; k < i + 1; k++){
            process.stdout.write("*")
        }
        console.log();
    }
}

printReverseIncreasing()