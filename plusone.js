var plusOne = function(digits) {
    if(digits[digits.length - 1] === 9) {
        let valDigit = digits.length - 1;
        let nineQt = 0;
        let numComp = false;

        // Procura se existem outros noves atecedendo o último
        while(numComp != true) {
            if(digits[valDigit] === 9) {
                digits.pop();
                nineQt++;
                valDigit--;
            } else {
                numComp = true;
            }
        }

        // Confere se a array não está vazia depois da subtração de indexes
        if(digits.length == 0 ) {
            digits.push(1);
        } else {
            digits[digits.length - 1] = digits[digits.length - 1] + 1;
        }

        // Adiciona zeros correspondentes a quantidade de noves
        for(let add = 0; add < nineQt; add++) {
            digits.push(0);
        }

        return digits;
    } else {
        digits[digits.length - 1] = digits[digits.length - 1] + 1;
        return digits;
    }
}

var result = plusOne([1,2,3,4,5,6,7,8,9,9,9]);
console.log(result);
// output: [1,2,3,4,5,6,7,9,0,0,0]