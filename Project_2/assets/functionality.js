//**Suitcase**

$(document).ready(function () {
    $('.suitcase_button').on('click', function () {
        $('.suitcase').animate({
            opacity: '0',
        })
    });
});

$(document).ready(function () {
    $('.suitcase_button').on('click', function () {
        $('.Check1').animate({
            opacity: '1',
        })
    });
});

$(document).ready(function () {
    $('.suitcase_button').on('click', function () {
        $('.person1').animate({
            opacity: '0',
        })
    });
});

$(document).ready(function () {
    $('.suitcase_button').on('click', function () {
        $('.person2').animate({
            opacity: '1',
        })
    });
});

//**Passport**

$(document).ready(function () {
    $('.passport_button').on('click', function () {
        $('.passport').animate({
            opacity: '0',
        })
    });
});

$(document).ready(function () {
    $('.passport_button').on('click', function () {
        $('.Check3').animate({
            opacity: '1',
        })
    });
});

$(document).ready(function () {
    $('.passport_button').on('click', function () {
        $('.person3').animate({
            opacity: '1',
        })
    });
});

$(document).ready(function () {
    $('.passport_button').on('click', function () {
        $('.person2').animate({
            opacity: '0',
        })
    });
});

//**Car**

$(document).ready(function () {
    $('#car_button').on('click', function () {
        $('.car').animate({
            left: '2500px', 
        },800)
    });
});

$(document).ready(function () {
    $('#car_button').on('click', function () {
        $('.Check5').animate({
            opacity: '1',
        })
    });
});

$(document).ready(function () {
    $('#car_button').on('click', function () {
        $('.person3').animate({
            opacity: '0',
        },1200, function(){
            $('.person3' ).animate({
                opacity: '1',
            },200)
});
});
    });



//**Boarding Pass**

$(document).ready(function () {
    $('.bp_button').on('click', function () {
        $('#boarding_pass').animate({
            opacity: '0',
        })
    });
});

$(document).ready(function () {
    $('.bp_button').on('click', function () {
        $('.Check2').animate({
            opacity: '1',
        })
    });
});

$(document).ready(function () {
    $('.bp_button').on('click', function () {
        $('.person4').animate({
            opacity: '1',
        })
    });
});

$(document).ready(function () {
    $('.bp_button').on('click', function () {
        $('.person3').animate({
            opacity: '0',
        })
    });
});

//**Security**

$(document).ready(function () {
    $('.security_button').on('click', function () {
        $('.person').animate({
            left: '1200px',
        })
    });
});

$(document).ready(function () {
    $('.security_button').on('click', function () {
        $('.Check4').animate({
            opacity: '1',
        })
    });
});

//**Boarding**

$(document).ready(function () {
    $('.board_button').on('click', function () {
        $('.Check6').animate({
            opacity: '1',
        })
    });
});
