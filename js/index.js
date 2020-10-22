$( function() {
    
    $('#banner').click(function() {
        let num = 90
        console.log('开始')
        active()

        function active() {
            let time = window.setInterval( () => {
                num--
            $('#logo').css({transform : `skewX(${num}deg)`})
            console.log(num)
            if( num <= 0 ) { clearInterval(time) }
        } , 40 )

        }

        
        // $('#logo').animate({transform: `skewX(${num}deg)`},3000,'swing')

        
    })

} )