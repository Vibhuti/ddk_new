$(document).ready(function() {

    $('#total').click(function () {
        P.updatePrice();
    });

    $("#addToCart").click(function () {
        P.updatePrice();
        var totalPrice = parseInt(localStorage.amount, 10) + P.calculate();
        localStorage.amount = totalPrice.toFixed(2)
        localStorage.amount1 = totalPrice.toFixed(2);

        $("#totalPrice").text("$ " + totalPrice.toFixed(2));
    });
})

var P = {
    updatePrice: function () {
        $("#price").text("$ " + P.calculate());
    },

    getPizzaSize: function() {
        return $("#pSize option:selected").val();
    },

    getPizzaType: function() {
        return $("input:radio[name=selectedpizza]:checked").val();
    },

    getQuantity: function() {
        return parseInt($('#qty').val(), 10);
    },

    calculate: function() {
        var pSize = P.getPizzaSize();
        var pType = P.getPizzaType();
        var qty = P.getQuantity();
        var rate;

        if(pType == 'pepperoni') {
            if(pSize == 'small') {
                rate = 8.99;
            }
            else if(pSize == 'medium') {
                rate = 9.99;
            }
            else {
                rate = 10.99;
            }
        }

        else if(pType == 'vegetarian') {
            if(pSize == 'small') {
                rate = 9.99;
            }
            else if(pSize == 'medium') {
                rate = 10.99;
            }
            else {
                rate = 11.99;
            }
        }

        else if(pType == 'combo') {
            if(pSize == 'small') {
                rate = 10.99;
            }
            else if(pSize == 'medium') {
                rate = 11.99;
            }
            else {
                rate = 12.99;
            }
        }

        if ($('#extraCheese').is(':checked')) {
            rate = rate + 2;
        }

        rate = rate * qty;
        return rate;
    }
}
