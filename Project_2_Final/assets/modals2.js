//**Directions**

var Directionmodal = document.querySelector(".Direction_modal");
    var DirectioncloseButton = document.querySelector(".Go");

    function toggleDirectionModal() {
        Directionmodal.classList.toggle("show-Direction_modal");
    }
    
    window.onload = toggleDirectionModal;

    function windowOnClick(event) {
        if (event.target === Directionmodal) {
            toggleDirectionModal();
        }
    }
    DirectioncloseButton.addEventListener("click", toggleDirectionModal);
    window.addEventListener("click", windowOnClick);

//**Final Modal**

var Finalmodal = document.querySelector(".Final_modal");
    var Finaltrigger = document.querySelector(".board_button");
    var FinalcloseButton = document.querySelector(".Final_close-button");

    function toggleFinalModal() {
        Finalmodal.classList.toggle("show-Final_modal");
    }

    function windowOnClick(event) {
        if (event.target === Finalmodal) {
            toggleFinalModal();
        }
    }

    Finaltrigger.addEventListener("click", toggleFinalModal);
    FinalcloseButton.addEventListener("click", toggleFinalModal);
    window.addEventListener("click", windowOnClick);
