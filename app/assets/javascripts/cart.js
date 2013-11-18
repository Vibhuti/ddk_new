$(document)
    .foundation('abide', {
        patterns:{
            telephone:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            amx:/\d{4}[\-]\d{6}[\-]\d{5}/,
            visa:/\d{4}[\-]\d{4}[\-]\d{4}[\-]\d{4}/
        }
    });
$(document).ready(function() {
    $("#amount").html(localStorage.amount1);

    $('#credit').click(function () {
        $("#creditDetails").show();
    });

    $('#cash').click(function () {
        $("#creditDetails").hide();
        $("#cardNumber").attr("required", false);
    });

    $('#amex').click(function () {
        $("#cardNumber").attr("pattern", "\\d{4}[\\-]\\d{6}[\\-]\\d{5}");
        $("#cardNumber").attr("placeholder", "XXXX-XXXXXX-XXXXX");
    });

    $('#visa').click(function () {
        $("#cardNumber").attr("pattern", '\\d{4}[\\-]\\d{4}[\\-]\\d{4}[\\-]\\d{4}');
        $("#cardNumber").attr("placeholder", "XXXX-XXXX-XXXX-XXXX");
    });


    $('#finalize')
        .on('invalid', function () {
            var invalid_fields = $(this).find('[data-invalid]');
            console.log(invalid_fields);
        });
    $('#finalize')
        .on('valid', function (event) {
            var orderNumber = Math.floor((Math.random()*10000)+1);
            alert( "Thank you for ordering Grandma's Pizza. Your order number is " + orderNumber);
            localStorage.orderNumber = orderNumber;
            event.preventDefault();
            console.log('valid!');
        });
});


