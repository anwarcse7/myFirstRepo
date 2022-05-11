let sum = 0;
let getNumber = function () {
    readline.question('Enter Integer number or type stop :', function (answer) {
        if (answer == 'stop') {
          console.log("Total result is: " + sum)
        } else {
            sum += parseFloat(answer);
            getNumber();
        }
    }); 
};

getNumber();