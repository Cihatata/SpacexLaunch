$('#launched').hide()
$('.ui.black.animated.button').click(function () {
    $('.shape')
        .shape('set next side', '.three.side')
        .shape('flip left');
    $('#launched').hide()
    $('#willLaunched').show()


});
$('.ui.red.animated.button').click(function () {

    $('.shape')
        .shape('set next side', '.second.side')
        .shape('flip right');
    $('#launched').show();
    $('#willLaunched').hide();

});


$(document).ready(function () {


    //$('.timer').countdown('2020/01/01');

    $.get({

        url: "https://api.spacexdata.com/v3/launches/next", success: function (result) {
            let fli_num_next = result.flight_number;
            let miss_na_next = result.mission_name;
            let roc_na_next = result.rocket.rocket_name;
            let la_site_next = result.launch_site.site_name;
            let la_date_loc_next = result.launch_date_utc;


            $("#fli_num_next").html(JSON.stringify(fli_num_next));
            $("#mis_na_next").html(JSON.stringify(miss_na_next).replace(/^"(.*)"$/, '$1'))
            $('#roc_na_next').html(JSON.stringify(roc_na_next).replace(/^"(.*)"$/, '$1'))
            $('#launc_na_next').html(JSON.stringify(la_site_next).replace(/^"(.*)"$/, '$1'))

            let date = la_date_loc_next.slice(0, 10);
            let time = la_date_loc_next.slice(11, 19);

            $('.timer').countdown(date + ' ' + time, function (event) {
                $(this).html(event.strftime(
                    '' +
                    '<div class="time"><span>%w</span></div>'
                    + '<div class="time"><span>%d</span></div>'
                    + '<div class="time"><span >%H</span></div>'
                    + '<div class="time"><span >%M</span></div>'
                    + '<div class="time"><span >%S</span></div>' +
                    ''
                ));

            });
        }
    });
    $.get({

        url: "https://api.spacexdata.com/v3/launches/latest", success: function (result) {

            let fli_num_launched = result.flight_number;
            let miss_na_launched = result.mission_name;
            let roc_na_launched = result.rocket.rocket_name;
            let la_site_launched = result.launch_site.site_name;
            let la_date_loc_lauched = result.launch_date_utc;

            let date_Launched = la_date_loc_lauched.slice(0, 10);
            let time_Launched = la_date_loc_lauched.slice(11, 19);


            let launchmonth = parseInt(date_Launched.slice(5, 7)) - 1;
            let launchday = parseInt(date_Launched.slice(8, 10))
            let launchyear = parseInt(date_Launched.slice(0, 4))

            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

            $('#launchtime').html(launchday + ' ' + months[launchmonth] + ' ' + launchyear + ' ' + time_Launched + '(UTC +03:00) ')

            $("#fli_num_launched").html(JSON.stringify(fli_num_launched));
            $("#mis_na_launched").html(JSON.stringify(miss_na_launched).replace(/^"(.*)"$/, '$1'))
            $('#roc_na_launched').html(JSON.stringify(roc_na_launched).replace(/^"(.*)"$/, '$1'))
            $('#launc_na_launched').html(JSON.stringify(la_site_launched).replace(/^"(.*)"$/, '$1'))
        }
    });


});
