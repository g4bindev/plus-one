var plusOne = function(digits) {
    console.log("Tamanho do Array:", digits.length);
    console.log("Último index:", digits[digits.length - 1]);

    if(digits.length < 16) {
        digits = Number(digits.join("")) + 1;
        digits = String(digits).split("");
    } else {
        let pointInit = Math.round(((digits.length - 1) / 2) - 1);
        let pointFinal = digits.length - 1;
        let tamArr = pointFinal - pointInit;
        let arr = [];

        // Se o tamanho da array ainda for maior que 16, divide a diferença por 2
        if(tamArr > 16) {
            pointInit = Math.round((pointInit + pointFinal) / 2);
            tamArr = pointFinal - pointInit;
        }

        for(pointInit; pointInit < digits.length; pointInit++) {
            arr.push(digits[pointInit]);
        }

        arr = Number(arr.join("")) + 1;
        arr = String(arr).split("");

        while(tamArr != 0) {
            digits[pointFinal] = arr[tamArr];
            tamArr--;
            pointFinal--;
        }

        if(digits[digits.length - 1] == undefined) {
            digits.pop();
        }
    }

    return digits;
}

var result = plusOne([5,9,0,8,4,0,2,3,5,5,7,0,0,3,1,3,7,2,4,8,8,5,0,6,1,1,2]);
    
console.log(result);
// Result:          [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// Next Input:      [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]
// Expectet:        [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,7]
