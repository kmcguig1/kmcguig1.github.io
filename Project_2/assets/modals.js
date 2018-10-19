//**Paris**

var Parismodal = document.querySelector(".Paris_modal");
    var Paristrigger = document.querySelector(".Paris_button");
    var PariscloseButton = document.querySelector(".Paris_close-button");

    function toggleParisModal() {
        Parismodal.classList.toggle("show-Paris_modal");
    }

    function windowOnClick(event) {
        if (event.target === Parismodal) {
            toggleParisModal();
        }
    }

    Paristrigger.addEventListener("click", toggleParisModal);
    PariscloseButton.addEventListener("click", toggleParisModal);
    window.addEventListener("click", windowOnClick);
	

//**London**

var Londonmodal = document.querySelector(".London_modal");
    var Londontrigger = document.querySelector(".London_button");
    var LondoncloseButton = document.querySelector(".London_close-button");

    function toggleLondonModal() {
        Londonmodal.classList.toggle("show-London_modal");
    }

    function windowOnClick(event) {
        if (event.target === Londonmodal) {
            toggleLondonModal();
        }
    }

    Londontrigger.addEventListener("click", toggleLondonModal);
    LondoncloseButton.addEventListener("click", toggleLondonModal);
    window.addEventListener("click", windowOnClick);

//**Rome**

var Romemodal = document.querySelector(".Rome_modal");
    var Rometrigger = document.querySelector(".Rome_button");
    var RomecloseButton = document.querySelector(".Rome_close-button");

    function toggleRomeModal() {
        Romemodal.classList.toggle("show-Rome_modal");
    }

    function windowOnClick(event) {
        if (event.target === Romemodal) {
            toggleRomeModal();
        }
    }

    Rometrigger.addEventListener("click", toggleRomeModal);
    RomecloseButton.addEventListener("click", toggleRomeModal);
    window.addEventListener("click", windowOnClick);

//**Tokyo**

var Tokyomodal = document.querySelector(".Tokyo_modal");
    var Tokyotrigger = document.querySelector(".Tokyo_button");
    var TokyocloseButton = document.querySelector(".Tokyo_close-button");

    function toggleTokyoModal() {
        Tokyomodal.classList.toggle("show-Tokyo_modal");
    }

    function windowOnClick(event) {
        if (event.target === Tokyomodal) {
            toggleTokyoModal();
        }
    }

    Tokyotrigger.addEventListener("click", toggleTokyoModal);
    TokyocloseButton.addEventListener("click", toggleTokyoModal);
    window.addEventListener("click", windowOnClick);

//**NYC**

var NYCmodal = document.querySelector(".NYC_modal");
    var NYCtrigger = document.querySelector(".NYC_button");
    var NYCcloseButton = document.querySelector(".NYC_close-button");

    function toggleNYCModal() {
        NYCmodal.classList.toggle("show-NYC_modal");
    }

    function windowOnClick(event) {
        if (event.target === NYCmodal) {
            toggleNYCModal();
        }
    }

    NYCtrigger.addEventListener("click", toggleNYCModal);
    NYCcloseButton.addEventListener("click", toggleNYCModal);
    window.addEventListener("click", windowOnClick);

//**Sydney**

var Sydneymodal = document.querySelector(".Sydney_modal");
    var Sydneytrigger = document.querySelector(".Sydney_button");
    var SydneycloseButton = document.querySelector(".Sydney_close-button");

    function toggleSydneyModal() {
        Sydneymodal.classList.toggle("show-Sydney_modal");
    }

    function windowOnClick(event) {
        if (event.target === Sydneymodal) {
            toggleSydneyModal();
        }
    }

    Sydneytrigger.addEventListener("click", toggleSydneyModal);
    SydneycloseButton.addEventListener("click", toggleSydneyModal);
    window.addEventListener("click", windowOnClick);
