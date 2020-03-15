// ----------------плавный скрол-----------------
$(document).ready(function () {
    $("#MyMenu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $('label.btn_cal').on('click', calculate);
});


$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 1) {
        $('header').addClass('header-fixed');
    } else {
        $('header').removeClass('header-fixed');
    }
});

if (~['Android', 'iPhone', 'iPod', 'iPad', 'BlackBerry'].indexOf(navigator.platform)) {
    $('.navbar-collapse').on('click', 'a', function (e) {
        $(e.delegateTarget).collapse('toggle');
    });

}

var calculate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    let element = $(e.currentTarget);
    element.toggleClass('active');
    let checkBoxes = this.$('.btn__dlock .btn_cal.active');
    let totalSum = 0;
    let couponSum = 0;
    this.$('path').hide();
    for (let i = 0; i < checkBoxes.length; i++) {
        let label = $(checkBoxes[i]);
        let dataCode = label.attr('data-code');
        let dataValue = parseFloat(label.attr('data-value'));
        let dataValueCoupon = parseFloat(label.attr('data-value-coupon'));

        if (!isNaN(dataValue)) {
            totalSum += dataValue;
        }

        if (!isNaN(dataValueCoupon)) {
            couponSum += dataValueCoupon;
        }

        if (dataCode) {
            this.$('path.' + dataCode).show();
        }
    }

    this.$('.female-sum').html(totalSum + ' р');
    this.$('.female-sum-coupon').html(couponSum + ' р');
}