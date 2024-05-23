// $(document).ready(function () {
//     const hide_all_contents = function () {
//         $('#signInSection').css('display', 'none');
//         $('#signUpSection').css('display', 'none');
//     };
//
//     hide_all_contents();
//
//     $('#signInSection').css('display', 'block');
//
//     $('#signUpbtn').click(function () {
//         alert("Hi");
//         hide_all_contents();
//         $('#signUpSection').css('display', 'block');
//     });
//
//     $('#signInbtn').click(function () {
//         alert("Hi");
//         hide_all_contents();
//         $('#signInSection').css('display', 'block');
//     });
//
// });

$(document).ready(function () {
    const hide_all_contents = function () {
        $('#signInSection').hide();
        $('#signUpSection').hide();
    };

    // Initially hide all sections except signInSection
    hide_all_contents();
    $('#signInSection').show();

    $('#signUpbtn').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        hide_all_contents();
        $('#signUpSection').show();
    });

    $('#signInbtn').click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        hide_all_contents();
        $('#signInSection').show();
    });
});
