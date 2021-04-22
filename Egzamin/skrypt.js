const btn = document.querySelector("#przycisk");

btn.addEventListener("click", function(){
    const radioInputs = document.querySelectorAll(".input");
    let checkNumber = 0; 

    radioInputs.forEach(function(input){
        checkNumber++

        if(input.checked){
            const wynik = document.querySelector("#cenaWynik");
            switch (checkNumber){
                case 1:
                    wynik.innerText = "25";
                    break;
                case 2:
                    wynik.innerText = "30";
                    break;
                case 3:
                    wynik.innerText = "40";
                    break;
                case 4:
                    wynik.innerText = "50";
                    break;
                default:
                    console.log("nie działa");
                    break;
            } 
        }
    })
})