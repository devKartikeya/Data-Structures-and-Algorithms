/* Print Diamond */

/*
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/

function printDiamond() {
    for (let i = 0; i < 5; i++) {
        for (let x = 0; x < 5 - i - 1; x++) {
            process.stdout.write(" ");
        }
        for (let y = 0; y < 2 * i + 1; y++) {
            process.stdout.write("*")
        }
        console.log();
    }

    for (let i = 0; i < 4; i++) {
        for (let x = 0; x < i; x++) {
            process.stdout.write(" ");
        }
        for (let y = 0; y < 2 * (4 - i - 1) - 1; y++) {
            process.stdout.write("*")
        }
        console.log();
    }
}

printDiamond();