$('.stage__body-graph-item').on('click', function(e){
    $(this).addClass('active')
    $('.stage__body-graph-item').not(this).removeClass('active')
    let attr = $(this).attr('data-tab')
    $('.stage__body-text-item').each(function(e){
        if ($(this).attr('data-tab') == attr){
            $(this).removeClass('none')
            setTimeout(() => {
                $(this).children('h2').removeClass('hid')
            }, 300);
            setTimeout(() => {
                $(this).children('span').removeClass('hid')
            }, 600);
            setTimeout(() => {
                $(this).children('p').removeClass('hid')
            }, 900);
        }else{
            $(this).addClass('none')
            $(this).children('h2').addClass('hid')
            $(this).children('span').addClass('hid')
            $(this).children('p').addClass('hid')
        }
    })
})


$(this).on('click', function(e){
    console.log(e)
    $('.stage__body-text-item').each(function(e, index){
        
    })
})