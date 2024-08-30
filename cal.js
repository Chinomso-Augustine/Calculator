let calculation = "";
        function updateCalculation(value){
            calculation += value;
            showResult();
        }

        function showResult(){
            document.querySelector('.displayResult').innerHTML = `${calculation}`;
        }