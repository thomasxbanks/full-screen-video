jQuery(document).ready(function($) {
    // Using WURFL to detect devices
    var device_type = WURFL.form_factor.toLowerCase()
    var device_name = WURFL.complete_device_name.toLowerCase()
    var device_name = device_name.replace(/\ /g, "-")

    $('html').addClass(" " + device_type)
    $('html').addClass(" " + device_name)

    $('.hero_wrapper h1, .hero_wrapper p').css('opacity', 0)
    $('.hero_wrapper p').delay(500).animate({
        'opacity': 1
    }, 2000)
    $('.hero_wrapper h1').animate({
        'opacity': 1
    }, 2000)
})
