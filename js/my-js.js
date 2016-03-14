// JavaScript Document
$(document).ready(function() {

// Page Loader Start
    $(window).load(function() {
        $(".loader").fadeOut(1000);
    });
// Page Loader Finish

// Main Page Appearance Classes Start
    $('.md-close').on('click', function(){
        $('#main-page').addClass('main-page-appear');
        $('#main-page').removeClass('main-page-disappear');
        callPlayer('yt-player', 'pauseVideo');
        $('#animation-program, #miniclub-program, #sports-program, #mice-program, #specialoccasions-program, #others-program, .tile-content, .tile-group2').animate({scrollTop:0}, 'slow');
        var str = $('#txtArea').val();
        $('#txtArea').val(str.substring(0, str.length - 40));
        $('#txtArea').focusout();
        var str = $('#txtArea2').val();
        $('#txtArea2').val(str.substring(0, str.length - 40));
        $('#txtArea2').focusout();
        var str = $('.formtext').val();
        $('.formtext').val(str.substring(0, str.length - 40));
        $(".modal_close").trigger('click');
    });
    $('.md-trigger').on('click', function(){
        $('#main-page').addClass('main-page-disappear');
        $('#main-page').removeClass('main-page-appear');
    });
// Main Page Appearance Classes Finish

// Date Fetch Start
    var monthNamesEN = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    var dayNamesEN = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var curr_day = dayNamesEN[d.getDay()];
    document.getElementById("date").innerHTML = curr_date;
    document.getElementById("month").innerHTML = monthNamesEN[curr_month];
    document.getElementById("year").innerHTML = curr_year;
    document.getElementById("day").innerHTML = curr_day;
// Date Fetch Finish   

// Weather Data Fetch Start    
    var d = new Date();
    var n = d.getDay();
    var weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var firstday = weekdays[n];
    var secondday = weekdays[n+1];
    var thirdday = weekdays[n+2];
    var fourthday = weekdays[n+3];
    var fifthday = weekdays[n+4];
    var sixthday = weekdays[n+5];
    var seventhday = weekdays[n+6];
                    
    $(".day-1").html(firstday);
    $(".day-2").html(secondday);
    $(".day-3").html(thirdday);
    $(".day-4").html(fourthday);
    $(".day-5").html(fifthday);
    $(".day-6").html(sixthday);
    $(".day-7").html(seventhday);

    var changeDayClassLong = function(i, dayClassLongString){
        $('.day-long-' + i).html(dayClassLongString)
    };
    for (i = 1; i <= 7; i++) {
        var dayClass = $('.day-' + i).html();
        switch (dayClass) {
            case "Sun":
                changeDayClassLong(i, 'Sunday')
                break;
            case "Mon":
                changeDayClassLong(i, 'Monday')
                break;
            case "Tue":
                changeDayClassLong(i, 'Tuesday')
                break;
            case "Wed":
                changeDayClassLong(i, 'Wednesday')
                break;
            case "Thu":
                changeDayClassLong(i, 'Thursday')
                break;
            case "Fri":
                changeDayClassLong(i, 'Friday')
                break;
            case "Sat":
                changeDayClassLong(i, 'Saturday')
                break;
        };
    };

    $.simpleWeather({
        location: '',
        woeid: '2343732',
        unit: 'c',
        success: function(weather) {
            var city = weather.city;
            var region = weather.region;
            var temperature = weather.temp + '&deg;' + weather.units.temp;
            var weatherText = weather.currently;
            var weatherCode = '<i class="icon-'+ weather.code +'"></i>';
            var temperatureTodayHigh = weather.forecast[0].high;
            var temperatureTodayLow = weather.forecast[0].low;
            var temperatureTodayText = weather.forecast[0].text;
            var temperatureTomorrowHigh = weather.forecast[1].high;
            var temperatureTomorrowLow = weather.forecast[1].low;
            var temperatureTomorrowText = weather.forecast[1].text;

            for (var i=0; i<=4; i++){
                var forecastHigh = weather.forecast[i].high;
                var forecastLow = weather.forecast[i].low;
                var forecastText = weather.forecast[i].text;
                var weatherForecastCode = '<i class="icon-' + weather.forecast[i].code + '"></i>';
                $('#weather_icon_' + i).html(weatherForecastCode);
                $('#forecast-high-' + i).html(forecastHigh);
                $('#forecast-low-' + i).html(forecastLow);
                $('#forecast-text-' + i).html(forecastText);
            };

            var forecastHigh5 = weather.forecast[3].high;
            var forecastLow5 = weather.forecast[3].low;
            var forecastText5 = weather.forecast[3].text;
            var weatherForecastCode5 = '<i class="icon-' + weather.forecast[3].code + '"></i>';

            var forecastHigh6 = weather.forecast[2].high;
            var forecastLow6 = weather.forecast[2].low;
            var forecastText6 = weather.forecast[2].text;
            var weatherForecastCode6 = '<i class="icon-' + weather.forecast[2].code + '"></i>';

            $(".now_weather_city").html(city);
            $(".now_weather_temp").html(temperature);
            $(".now_weather_text").html(weatherText);
            $(".now_weather_icon").html(weatherCode);
            $("#TempTodayHigh").html(temperatureTodayHigh);
            $("#TempTodayLow").html(temperatureTodayLow);
            $("#TempTodayText").html(temperatureTodayText);
            $("#TempTomorrowHigh").html(temperatureTomorrowHigh);
            $("#TempTomorrowLow").html(temperatureTomorrowLow);
            $("#TempTomorrowText").html(temperatureTomorrowText);

            $('#weather_icon_5').html(weatherForecastCode5);
            $('#forecast-high-5').html(forecastHigh5);
            $('#forecast-low-5').html(forecastLow5);
            $('#forecast-text-5').html(forecastText5);
            $('#weather_icon_6').html(weatherForecastCode6);
            $('#forecast-high-6').html(forecastHigh6);
            $('#forecast-low-6').html(forecastLow6);
            $('#forecast-text-6').html(forecastText6);
            },
        error: function(error)
            {
        $(".now_weather_city").html(error);
        $(".now_weather_temp").html(error);
        $(".now_weather_text").html(error);
        $(".now_weather_icon").html(error);
        }
    });
// Weather Data Fetch Finish

// Dynamic Wrapper Start
    var width = 0;
    $('.concept').each(function() {
        width += $(this).outerWidth( true );
    });
    $('.dynamic-wrapper').css('width', width + 450);
// Dynamic Wrapper Finish

// Lean Modal Start
    $("a[rel*=leanModal]").leanModal({
        closeButton: ".modal_close",
        top: 120,
    });
// Lean Modal Finish

// Transfer-Form-Catch-Click-Hide Start
    $("#transfer-form").submit(function(e) {
        e.preventDefault();
        this.reset();
    });
    $( '.transfer-form2' ).each(function(){
        this.reset();
    });

    $(document).ready(function() {
        $("#hidden_link").fancybox().trigger('click');
    });
    $("input.submit-transfer").click(function(){
        $("#transfer-info-button").click()
        return false;
    });
    $("input.submit-transfer2").click(function(){
        $("#transfer-info-button").click()
        return false;
    });

    $('.menu a').click(function(e){
        hideContentDivs();
        var tmp_div = $(this).parent().index();
        $('.main div.content').eq(tmp_div).show();
    });

    function hideContentDivs(){
        $('.main div.content').each(function(){
        $(this).hide();});
    }
    hideContentDivs();
// Transfer-Form-Catch-Click-Hide Finish

// Keyboards Start
    var availableTags = []; 
     
    $('.qwerty').keyboard({ 
        layout: 'turkish-q',
        usePreview:false,
        autoAccept:true,
    }) 
    .autocomplete({ 
      source: "availableTags", 
    }) 
    .addAutocomplete() 
    .addTyping();

    $('.qwerty2').keyboard({ 
        layout: 'turkish-q',
        usePreview:false,
        autoAccept:true,
    }) 
    .autocomplete({ 
      source: "availableTags", 
    }) 
    .addAutocomplete() 
    .addTyping();

    $('.qwerty3:eq(0)').keyboard({ 
        layout: 'turkish-q', 
        usePreview:false, 
        autoAccept:true,}) 
    .autocomplete({ 
      source: "availableTags", 
     }) 
    .addAutocomplete() 
    .addTyping();

    $(".qwerty3:eq(0)").focusout(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".scroll-span.filtered div").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(1000);
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
 
        // Update the count
        var numberItems = count;
        $("#filter-count").text("Number of Comments = "+count);
    });

    $('.qwerty4:eq(0)') 
    .keyboard({ 
        layout: 'turkish-q', 
        usePreview:false, 
        autoAccept:true,}) 
    .autocomplete({ 
      source: "availableTags", 
     }) 
    .addAutocomplete() 
    .addTyping();

    $('.qwerty5:eq(0)') 
    .keyboard({ 
        layout: 'turkish-q', 
        usePreview:false, 
        autoAccept:true,}) 
    .autocomplete({ 
      source: "availableTags", 
     }) 
    .addAutocomplete() 
    .addTyping();

    $(".qwerty5:eq(0)").focusout(function(){
 
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;
 
        // Loop through the comment list
        $(".filtered2 div").each(function(){
 
            // If the list item does not contain the text phrase fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(1000);
 
            // Show the list item if the phrase matches and increase the count by 1
            } else {
                $(this).show();
                count++;
            }
        });
    });
// Keyboards Finish

// Agency Menu Slide-XY Start
    (function($){
        $(window).load(function(){
                
            $.mCustomScrollbar.defaults.theme="dark-thick"; //set "light-2" as the default theme
                
            $(".demo-y-custom").mCustomScrollbar({
                axis:"y",
                autoHideScrollbar: true,
            });
            $(".demo-y").mCustomScrollbar();
                
            $(".demo-x").mCustomScrollbar({
                axis:"x",
                advanced:{autoExpandHorizontalScroll:true},
                alwaysShowScrollbar: 2,
                contentTouchScroll: 200,
            });
                
            $(".demo-yx").mCustomScrollbar({
                axis:"yx"
            });
                
            $(".scrollTo a").click(function(e){
                e.preventDefault();
                var $this=$(this),
                    rel=$this.attr("rel"),
                    el=rel==="content-y" ? ".demo-y" : rel==="content-x" ? ".demo-x" : ".demo-yx",
                    data=$this.data("scroll-to"),
                    href=$this.attr("href").split(/#(.+)/)[1],
                    to=data ? $(el).find(".mCSB_container").find(data) : el===".demo-yx" ? eval("("+href+")") : href,
                    output=$("#info > p code"),
                    outputTXTdata=el===".demo-yx" ? data : "'"+data+"'",
                    outputTXThref=el===".demo-yx" ? href : "'"+href+"'",
                    outputTXT=data ? "$('"+el+"').find('.mCSB_container').find("+outputTXTdata+")" : outputTXThref;
                $(el).mCustomScrollbar("scrollTo",to);
                output.text("$('"+el+"').mCustomScrollbar('scrollTo',"+outputTXT+");");
            });
                
        });
    })(jQuery);
// Agency Menu Slide-XY Finish

// Agency Menu Slide Start
    $('.button-travel-guides').on('click', function(){
        var tg = $(this).closest('.slide-x').find('.travel-guides');
        $(this).closest('.slide-x').mCustomScrollbar("scrollTo",tg);
    });
    $('.button-speaking-hours').on('click', function(){
        var sh = $(this).closest('.slide-x').find('.speaking-hours');
        $(this).closest('.slide-x').mCustomScrollbar("scrollTo",sh);
    });
    $('.button-excursions').on('click', function(){
        var ex = $(this).closest('.slide-x').find('.excursions');
        $(this).closest('.slide-x').mCustomScrollbar("scrollTo",ex);
    });
    $('.button-additional-info').on('click', function(){
        var ai = $(this).closest('.slide-x').find('.additional-info');
        $(this).closest('.slide-x').mCustomScrollbar("scrollTo",ai);
    });
// Agency Menu Slide Finish

// Agency Menu Buttons Start
    $('.scroll-right').on('click', function(){
        $(this).parent().children('.slide-x').mCustomScrollbar("scrollTo",'-=900');
    });
    $('.scroll-top').on('click', function(){
        $(this).parent().children('.slide-x').mCustomScrollbar("scrollTo",'+=900');
    });
    $('.scroll-backtotop').on('click', function(){
        $(this).parent().children('.slide-x').mCustomScrollbar("scrollTo",'360');
    });
// Agency Menu Buttons Finish

// Youtube Function Caller Start
    /**
        * @author       Rob W <gwnRob@gmail.com>
        * @website      http://stackoverflow.com/a/7513356/938089
        * @version      20131010
        * @description  Executes function on a framed YouTube video (see website link)
        *               For a full list of possible functions, see:
        *               https://developers.google.com/youtube/js_api_reference
        * @param String frame_id The id of (the div containing) the frame
        * @param String func     Desired function to call, eg. "playVideo"
        *        (Function)      Function to call when the player is ready.
        * @param Array  args     (optional) List of arguments to pass to function func*/
    function callPlayer(frame_id, func, args) {
        if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
        var iframe = document.getElementById(frame_id);
        if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
            iframe = iframe.getElementsByTagName('iframe')[0];
        }

            // When the player is not ready yet, add the event to a queue
            // Each frame_id is associated with an own queue.
            // Each queue has three possible states:
            //  undefined = uninitialised / array = queue / 0 = ready
        if (!callPlayer.queue) callPlayer.queue = {};
        var queue = callPlayer.queue[frame_id],
            domReady = document.readyState == 'complete';

        if (domReady && !iframe) {
            // DOM is ready and iframe does not exist. Log a message
            window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
            if (queue) clearInterval(queue.poller);
        } else if (func === 'listening') {
            // Sending the "listener" message to the frame, to request status updates
            if (iframe && iframe.contentWindow) {
                func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
                iframe.contentWindow.postMessage(func, '*');
            }
        } else if (!domReady ||
                    iframe && (!iframe.contentWindow || queue && !queue.ready) ||
                    (!queue || !queue.ready) && typeof func === 'function') {
            if (!queue) queue = callPlayer.queue[frame_id] = [];
            queue.push([func, args]);
            if (!('poller' in queue)) {
                // keep polling until the document and frame is ready
                queue.poller = setInterval(function() {
                    callPlayer(frame_id, 'listening');
                }, 250);
                // Add a global "message" event listener, to catch status updates:
                messageEvent(1, function runOnceReady(e) {
                    if (!iframe) {
                        iframe = document.getElementById(frame_id);
                        if (!iframe) return;
                        if (iframe.tagName.toUpperCase() != 'IFRAME') {
                            iframe = iframe.getElementsByTagName('iframe')[0];
                            if (!iframe) return;
                        }
                    }
                    if (e.source === iframe.contentWindow) {
                        // Assume that the player is ready if we receive a
                        // message from the iframe
                        clearInterval(queue.poller);
                        queue.ready = true;
                        messageEvent(0, runOnceReady);
                        // .. and release the queue:
                        while (tmp = queue.shift()) {
                            callPlayer(frame_id, tmp[0], tmp[1]);
                        }
                    }
                }, false);
            }
        } else if (iframe && iframe.contentWindow) {
            // When a function is supplied, just call it (like "onYouTubePlayerReady")
            if (func.call) return func();
            // Frame exists, send message
            iframe.contentWindow.postMessage(JSON.stringify({
                "event": "command",
                "func": func,
                "args": args || [],
                "id": frame_id
            }), "*");
        }
        /* IE8 does not support addEventListener... */
        function messageEvent(add, listener) {
            var w3 = add ? window.addEventListener : window.removeEventListener;
            w3 ?
                w3('message', listener, !1)
            :
                (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
        }
    };
// Youtube Function Caller Finish

// Tour Prices and Remarks Animation Start
    $('.order').data( 'clicks', 0 );
    $(".order").on( 'click', function() {
        var clicks = +$( this ).data( 'clicks' );
        if( clicks % 2 === 0 ) {
            $(this).animate({height:'470px'});
        } else {
            $(this).animate({height:'40px'});
        }
        $( this ).data( 'clicks', clicks + 1 );
    });
// Tour Prices and Remarks Animation Finish

// Voucher Select Hide Script Start
    $('.voucher-link').on('click', function(){
        $('.voucher-select').addClass('voucher-menu-hidden');
    });
// Voucher Select Hide Script Finish

// Agency Section Deleted Carousel Start
    $(function(){
        $(".carousel").carousel({
            height: 365,
            auto: true,
            stop: false,
            period: 5000,
            effect: "fade",
            markers: {
                type: "square",
                position: "bottom-left",
            }
        });
    });
// Agency Section Deleted Carousel Finish

// Language Dropdown Start
    function createDropDown(){
        var source = $("#source");
        var selected = source.find("option[selected]");
        var options = $("option", source);
            
        $("body").append('<dl id="target" class="dropdown"></dl>')
        $("#target").append('<dt><a href="#">' + selected.text() + 
            '<span class="value">' + selected.val() + 
            '</span></a></dt>')
        $("#target").append('<dd><ul></ul></dd>')

        options.each(function(){
            $("#target dd ul").append('<li><a href="#">' + 
                $(this).text() + '<span class="value">' + 
                $(this).val() + '</span></a></li>');
        });
    };

    createDropDown();
            
    $(".dropdown dt a").click(function() {
        $(".dropdown dd ul").toggle();
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });
                        
    $(".dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown dt a").html(text);
        $(".dropdown dd ul").hide();
                
        var source = $("#source");
        source.val($(this).find("span.value").html())
    });
// Language Dropdown Finish

// Fancy-box Related Scripts Start
/*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                speedOut : 0
            }
        }
    });


    $('.fancybox-transfer-iframe').on("click", function (e) {
        e.preventDefault(); // avoids calling preview.php
        $.ajax({
            type: "POST",
            cache: false,
            url: this.href, // preview.php
            data: $("#postp").serializeArray(), // all form fields
            success: function (data) {
            // on success, post (preview) returned data in fancybox
            $.fancybox(data, {
                // fancybox API options
                fitToView: false,
                width: 905,
                height: 505,
                autoSize: false,
                closeClick: false,
                openEffect: 'none',
                closeEffect: 'none'
            }); // fancybox
            } // success
        }); // ajax
    }); // on

    $(".fancybox-ajax").fancybox({
        type: 'ajax',
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        width: 800,
        height:600,
    });

    $(".fancybox-transfer-ajax").fancybox({

        type: 'ajax',
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        margin: [-350,0,0,0],
    });

    // Disable opening and closing animations, change title type
    $(".fancybox-effects-b").fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        helpers : {
            title : {
                type : 'over'
            }
        }
    });

    // Set custom style, close if clicked, change title type and overlay color
    $(".fancybox-effects-c").fancybox({
        wrapCSS    : 'fancybox-custom',
        closeClick : true,

        openEffect : 'none',

        helpers : {
            title : {
                type : 'inside'
            },
            overlay : {
                css : {
                    'background' : 'rgba(238,238,238,0.85)'
                }
            }
        }
    });

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
        padding: 0,

        openEffect : 'elastic',
        openSpeed  : 150,

        closeEffect : 'elastic',
        closeSpeed  : 150,

        closeClick : true,

        helpers : {
            overlay : null
        }
    });

    $(".fancybox-mainad").fancybox({
        padding: 0,
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
    });

    $("#calendar_button").fancybox({
        padding: 0,
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
    });

    $("#transfer-info-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        margin: [-350,0,0,0],
    });

    $("#taxi-info-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        padding:0,
    });

    $("#helptext-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
    });

    $("#faqtext-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
    });

    $(".fancybox-user-reviews").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        width:400,
        height:600,
    });

    $("#shuttle-info-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        padding:0,
    });

    $("#travel-tips-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        padding:0,
    });

    $("#about-turkey-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        padding:0,
    });

    $("#about-region-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        padding:0,
    });

    $("#doctor-info-button").fancybox({
        openEffect : 'elastic',
        openSpeed  : 550,
        closeEffect : 'elastic',
        closeSpeed  : 550,
        padding:0,
    });

    /*
     *  Button helper. Disable animations, hide close button, change title type and content
     */

    $('.fancybox-buttons').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
            title : {
                type : 'inside'
            },
            buttons : {}
        },

        afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });


    /*
     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
     */

    $('.fancybox-thumbs').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,
        arrows    : false,
        nextClick : true,

        helpers : {
            thumbs : {
                width  : 50,
                height : 50
            }
        }
    });

    /*
     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
    */
    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            padding: 0,
            openEffect : 'elastic',
            openSpeed  : 550,
            closeEffect : 'elastic',
            closeSpeed  : 550,
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });

    /*
     *  Open manually
     */

    $("#fancybox-manual-a").click(function() {
        $.fancybox.open('1_b.jpg');
    });

    $(".fancybox-manual-b").click(function() {
        $.fancybox.open({
            href : 'iframe.html',
            type : 'iframe',
            padding : 0,
            width:900,
            height:500
        });
    });

    $(".pdf").click(function(){
        $.fancybox({
        type: 'iframe',
        padding: 0,
        autoSize: false,
        content: '<embed src="'+this.title+'#nameddest=self&page=1&toolbar=0&statusbar=0&messages=0&navpanes=0&view=FitH,0&zoom=80,0,0" type="application/pdf" height="99%" width="99%" style="margin-top:-30px"/>',
        beforeClose: function() {
        $(".fancybox-inner").unwrap();
        },
                    helpers: {
                        overlay: {
                        opacity: 0.3
                        } // overlay
                    } 
        }); //fancybox
        return false;
      }); //click

    $(".fancypdf").click(function(){
         $.fancybox({
           type: 'html',
           padding: 0,
           autoSize: false,
           content: '<embed src="'+this.href+'#nameddest=self&page=1&view=FitH,0&zoom=80,0,0" type="application/pdf" height="99%" width="100%" style="margin-top:75px;"/>',
           beforeClose: function() {
             $(".fancybox-inner").unwrap();
           }
         }); //fancybox
         return false;
    }); //click 
   
// Fancy-box Related Scripts Finish

// Today's Transfer's Section Script Start
    $('.daily-transfers-menu ul li a').click(function(e){
        hideContentDivs();
        var tmp_div = $(this).parent().index();
        $('.main div.content').eq(tmp_div).show();
    });

    function hideContentDivs(){
        $('.daily-transfers-main div.daily-transfers-item').each(function(){
        $(this).hide();});
    };
    hideContentDivs();

    $('.transfer-link').on('click', function(){
        $('.daily-transfers-menu').addClass('daily-transfers-menu-hidden');
    });
// Today's Transfer's Section Script Finish








});