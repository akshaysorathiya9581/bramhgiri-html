$(document).ready(function() {

    // Home page Banner js starts
    $('.banner-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        // Speed: 500,
        autoplaySpeed: 2000,
        infinite: true,
        prevArrow: $(".banner-pre-btn"),
        nextArrow: $(".banner-nxt-btn"),
    });
    // Home page Banner js ends

    // Home page Event slider js starts
    $('.event-slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    // Home page Event slider js ends

    // Gallery page Pagination Starts
    var start_g = 0;
    var nb_g = 16;
    var end_g = start_g + nb_g;
    var length_g = $('.gallery-inner .transit').length_g;

    var list_g = $('.gallery-inner .transit');

    list_g.hide().filter(':lt(' + (end_g) + ')').show();


    $('.next-tab-gallery').click(function(e) {
        e.preventDefault();

        $('.next-tab-gallery').parent().addClass('active');
        $('.prev-tab-gallery').parent().removeClass('active');

        if ($(this).hasClass('prev-tab-gallery')) {
            start_g -= nb_g;
        } else {
            start_g += nb_g;
        }

        if (start_g < 0 || start_g >= length_g) start_g = 0;
        end_g = start_g + nb_g;

        if (start_g == 0) list_g.hide().filter(':lt(' + (end_g) + ')').show();
        else list_g.hide().filter(':lt(' + (end_g) + '):gt(' + (start_g - 1) + ')').show();
    });

    $('.prev-tab-gallery').click(function(e) {
        e.preventDefault();
        $('.prev-tab-gallery').parent().addClass('active');
        $('.next-tab-gallery').parent().removeClass('active');

        if ($(this).hasClass('next-tab-gallery')) {
            start_g += nb_g;
        } else {
            start_g -= nb_g;
        }

        if (start_g < 0 || start_g >= length_g) start_g = 0;
        end_g = start_g + nb_g;

        if (start_g == 0) list_g.hide().filter(':lt(' + (end_g) + ')').show();
        else list_g.hide().filter(':lt(' + (end_g) + '):gt(' + (start_g - 1) + ')').show();
    });
    // Gallery page Pagination Ends

    // Adventure page Pagination Starts
    var start = 0;
    var nb = 4;
    var end = start + nb;
    var length = $('.adventure-section-main .main-content').length;

    var list = $('.adventure-section-main .main-content');

    list.hide().filter(':lt(' + (end) + ')').show();


    $('.next-tab').click(function(e) {
        e.preventDefault();

        $('.next-tab').parent().addClass('active');
        $('.prev-tab').parent().removeClass('active');

        if ($(this).hasClass('prev-tab')) {
            start -= nb;
        } else {
            start += nb;
        }

        if (start < 0 || start >= length) start = 0;
        end = start + nb;

        if (start == 0) list.hide().filter(':lt(' + (end) + ')').show();
        else list.hide().filter(':lt(' + (end) + '):gt(' + (start - 1) + ')').show();
    });

    $('.prev-tab').click(function(e) {
        e.preventDefault();
        $('.prev-tab').parent().addClass('active');
        $('.next-tab').parent().removeClass('active');

        if ($(this).hasClass('next-tab')) {
            start += nb;
        } else {
            start -= nb;
        }

        if (start < 0 || start >= length) start = 0;
        end = start + nb;

        if (start == 0) list.hide().filter(':lt(' + (end) + ')').show();
        else list.hide().filter(':lt(' + (end) + '):gt(' + (start - 1) + ')').show();
    });
    // Adventure page Pagination Ends


    // Datepicker js Starts
    if (window.location.pathname == '/booking-form.html') {

        (function($) {
            $('#datepicker-1').datetimepicker({
                "allowInputToggle": true,
                "showClose": true,
                "showClear": true,
                "showTodayButton": true,
                "format": "MM/DD/YYYY HH:mm:ss",
                "toolbarPlacement": "bottom",
            });
            $('#datepicker-2').datetimepicker({
                "allowInputToggle": true,
                "showClose": true,
                "showClear": true,
                "showTodayButton": true,
                "format": "MM/DD/YYYY HH:mm:ss",
                "toolbarPlacement": "bottom",
            });
        })(jQuery);
    }
    // Datepicker js Ends

    // counter About Us Page js start
    if (window.location.pathname == '/about.html') {
        var b_count = 0;
        $(window).scroll(function() {
            var ontop = $('#counter').offset().top - window.innerHeight;
            if (b_count == 0 && $(window).scrollTop() > ontop) {
                $('.counter-title').each(function() {
                    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        step: function(func) {
                            $(this).text(parseFloat(func).toFixed(size));
                        }
                    });
                });
                b_count = 1;
            }
        });
    }
    // counter About Us Page js ends

    // Booking form display age after select children js starts
    $("#children-select").change(function() {
        var Quantity = $('#children-select option:selected').val();
        var i;
        var main_tbody = $("#children-select");
        $("#append-age").empty();
        console.log('selected');

        for (i = 0; i < Quantity; i++) {
            increse_count = i + 1;
            var input = '<div class="col-md-6"><div class="form-group"><input type="number" class="form-control" placeholder="Age Of Children ' + increse_count + '"></div></div>';
            $("#append-age").append(input);
        }
    });
    // Booking form display age after select children js ends

});

// Temprature widget js starts
function updateTime() {
    document.querySelector('.info-date h1').innerText = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

const minTemperature = 20;
const maxTemperature = 35;
const factor = maxTemperature - minTemperature;

const spanDate = document.querySelector('.info-date span');
const currentTemperature = Math.floor(Math.random() * factor) + minTemperature;
const spanTemperature = document.querySelector('.weather-temperature');

spanDate.innerText = new Date().toLocaleDateString('en-GB');
spanTemperature.innerHTML = `${currentTemperature}&deg;`;
updateTime();

const now = new Date();
const difference = (60 - now.getSeconds());
const milliseconds = difference * 1000;

let timeout = setTimeout(() => {
    updateTime();
    setInterval(updateTime, 60000);
    clearTimeout(timeout);
}, milliseconds);
// Temprature widget js ends

/*****************************************
   -IMPORTANT: OPENWEATHER API WILL NOT 
   WORK WITH "HTTPS://"
   
   -IF NOT WORKING, MAKE SURE BROWSER
   ADDRESS BAR IS USING "HTTP://"
******************************************/
'use strict';

// Function gets a date in the future. Gets current date if numbersOfDaysToAdd = 0
var getFutureDate = function(day) {
        var someDate = new Date();
        var numberOfDaysToAdd = day;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

        var dd = someDate.getDate();
        var mm = someDate.getMonth();
        var y = someDate.getFullYear();
        var d = someDate.getDay();

        // convert month number to month name
        var month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';

        // convert day number into day name
        var day = new Array();
        day[1] = 'Monday';
        day[2] = 'Tuesday';
        day[3] = 'Wednesday';
        day[4] = 'Thursday';
        day[5] = 'Friday';
        day[6] = 'Saturday';
        day[0] = 'Sunday';

        var futureMonth = month[mm];
        var futureDay = day[d];

        var someFormattedDate = futureDay + ", " + futureMonth + ' ' + dd + ', ' + y;

        return someFormattedDate;
    }
    // Function evaluates "clouds" conditions between 1 and 100 and returns image index
var getClouds = function(clouds) {
    if (100 < clouds && clouds < 90) {
        // return Cloudy Object
        var condition = {
            cloudNumber: 6,
            cloudText: 'Cloudy'
        };
        return condition;
    } else if (89 < clouds && clouds < 60) {
        // return Mostly Cloudy
        var condition = {
            cloudNumber: 5,
            cloudText: 'Mostly Cloudy'
        };
        return condition;
    } else if (59 < clouds && clouds < 30) {
        // return Partly Cloudy
        var condition = {
            cloudNumber: 4,
            cloudText: 'Partly Cloudy'
        };
    } else if (29 < clouds && clouds > 20) {
        // return Mostly Sunny
        var condition = {
            cloudNumber: 3,
            cloudText: 'Mostly Sunny'
        };
        return condition;
    } else if (19 > clouds && clouds > 10) {
        // return Sunny to Mostly Sunny
        var condition = {
            cloudNumber: 2,
            cloudText: 'Sunny to Mostly Sunny'
        };
        return condition;
    } else {
        // return Sunny
        var condition = {
            cloudNumber: 1,
            cloudText: 'Sunny'
        };
        return condition;
    }
}

// Function: Handlebar Module / CRPA ("Crapa") (Create, Reference, Pass & Append)
var getWeather = function(theForecast) {
    // City Label
    $('#results').html(theForecast.city.name);
    // REFERENCE from HTML
    var source = $('#weather-spot').html();
    // compile to Handlebars
    var template = Handlebars.compile(source);

    // create loop to get x days worth of data.  "list" is key name.
    for (var i = 1; i < theForecast.list.length; i++) {
        // get future dates
        var futureDate = getFutureDate(i);
        var cloudsCondition = getClouds(theForecast.list[i].clouds);

        // build weather data object for Handlebars
        var weatherData = {
            now: futureDate,
            average: Math.round(theForecast.list[i].temp.day),
            high: Math.round(theForecast.list[i].temp.max),
            low: Math.round(theForecast.list[i].temp.min),
            morning: Math.round(theForecast.list[i].temp.morn),
            nighttime: Math.round(theForecast.list[i].temp.night),
            cloudInfo: cloudsCondition.cloudNumber,
            cloudInfoText: cloudsCondition.cloudText
        }

        // PASS weather data object to template via the variable "fullText"
        var fullText = template(weatherData);

        // APPEND fullText to the div.container
        $('.container').append(fullText);
    }
};

// Function: Call api.openweathermap.com
var APICall = function(theCity) {
    // get API url
    var weatherUrl = "//api.openweathermap.org/data/2.5/forecast/daily?q=" + theCity;
    // get API key
    var apiKey = "b0b34e0501286ae903bab8dde901b6ae";
    // get "unit" as imperial
    var unitType = "imperial";
    // get "cnt" as number of days up to 16 days
    var daysTotal = 8;

    // start jQuery-based API Call
    $.get({
        url: weatherUrl + "&APPID=" + apiKey + "&units=" + unitType + "&cnt=" + daysTotal,
        success: function(objectFromOWM) {
            getWeather(objectFromOWM);
        },
        error: function() {
            console.log("error");
        }
    });

};

// On button click, invoke APICall() and pass input text box value
$('#getWeather').on('click', function(e) {

    // prevent natural form submit event
    e.preventDefault();
    // check to see if search box has value
    if ($('#city-name').val().trim() === "" || $('#city-name').val().trim() === null) {
        // if search box is empty, do nothing
        return;
    } else {
        //  clear old results
        $('.section').remove();

        // get input box value and invoke APICall function
        var cityName = $('#city-name').val().trim();
        $('#city-name').val("");
        APICall(cityName);
    }
});




link = "https://api.openweathermap.org/data/2.5/weather?q=geyve&units=metric&apikey=dc989810ec5879216998f7685d8d2057";
var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function() {
    var obj = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        var temp = obj.main.temp;
        var temp2 = Math.ceil(temp);
        var feel = obj.main.feels_like;
        document.querySelector("#feel").innerHTML = "Feels Like:" + feel + "&#176;c";

        document.querySelector("#max").innerHTML = "Max:" + obj.main.temp_max + "&#176;c";
        document.querySelector("#min").innerHTML = "Min:" + obj.main.temp_min + "&#176;c";

        console.log(temp + " derece");
        console.log(feel);
        console.log(obj)
        var icon = obj.weather[0].icon;
        console.log(obj.weather[0].icon);
        console.log(obj.name);
        var name = document.querySelector("#tem").innerHTML = obj.name;
        var t = document.querySelector("#temp").innerHTML = temp2 + "&#176;c";
        var img = document.querySelector("#img");
        img.setAttribute("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png")


    } else {
        console.log("The city doesn't exist! Kindly check");
    }
}
request.send();



document.querySelector(".btn").addEventListener("click", () => {


    var res = document.querySelector(".form-control").value;


    link = "https://api.openweathermap.org/data/2.5/weather?q=" + res + "&units=metric&apikey=dc989810ec5879216998f7685d8d2057";
    var request = new XMLHttpRequest();
    request.open('GET', link, true);
    request.onload = function() {
        var obj = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var temp = obj.main.temp;
            var temp2 = Math.ceil(temp);
            var feel = obj.main.feels_like;
            document.querySelector("#feel").innerHTML = "Hissedilen:" + feel + "&#176;c";

            document.querySelector("#max").innerHTML = "Max:" + obj.main.temp_max + "&#176;c";
            document.querySelector("#min").innerHTML = "Min:" + obj.main.temp_min + "&#176;c";

            console.log(temp + " derece");
            console.log(feel);
            console.log(obj)
            var icon = obj.weather[0].icon;
            console.log(obj.weather[0].icon);
            console.log(obj.name);
            var name = document.querySelector("#tem").innerHTML = obj.name;
            var t = document.querySelector("#temp").innerHTML = temp2 + "&#176;c";
            var img = document.querySelector("#img");
            img.setAttribute("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png")


        } else {
            console.log("The city doesn't exist! Kindly check");
        }
    }
    request.send();


})