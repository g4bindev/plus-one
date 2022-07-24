var plusOne = function(digits) {
    console.log("Tamanho do Array:", digits.length);
    console.log("Último index:", digits[digits.length - 1]);

    if(digits.length < 16) {
        digits = Number(digits.join("")) + 1;
        digits = String(digits).split("");
    } else {
        let pointInit = Math.round((digits.length - 1) / 2);
        let pointFinal = digits.length - 1;
        let flag = pointFinal - pointInit;
        let arr = [];

        while(true) {
            if((arr.length - 1) < flag) {
                arr.push(digits[pointInit]);
                pointInit++;
            } if((arr.length - 1) == flag) {
                break;
            }
        }

        arr = Number(arr.join("")) + 1;
        arr = String(arr).split("");

        for(pointFinal; pointFinal > flag; pointFinal--) {
            if(pointFinal > arr.length - 1) {
                digits[pointFinal] = arr[flag];
                flag--;
            } else {
                break;
            }
        }
    }

    return digits;
}

var result = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);

console.log(result);

// Next Input:      [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]
// Expectet:        [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,7]