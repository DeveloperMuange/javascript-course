let calculation = localStorage.getItem('calculation') || '';

      //Display calculation when the page first loads.
      displayCalculation();

      function updateCalculation (value){
        calculation += value;

        //Display calculation on the page instead of console
        displayCalculation();
        
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation () {document.querySelector('.js-calculation')
          .innerHTML = calculation;
      };