/* Print Decreasing */

/*
    * * * *
    * * *
    * *  
    * 
*/

function printDecreasing() {
    for (let i = 5; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            process.stdout.write("* ");
        }
        console.log("\n");
    }
}

printDecreasing();