/* Print Inverted Pyramid */

/*
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/

function printReversePyramid() {
    for (let i = 0; i < 5; i++){
        for (let x = 0; x < i; x++){
            process.stdout.write(" ");
        }
        for (let y = 0; y < 2*(5 - i - 1) - 1; y++){
            process.stdout.write("*")
        }
        console.log();
    }
}

printReversePyramid()