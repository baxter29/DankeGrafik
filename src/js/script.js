$(document).ready(function()
{
	const slide = $('.slide')
	const bullets = $('.slider-bullet')
	let active = 0;
	changeSlide();

  
bullets.on("click",function(e)
{
	e.preventDefault();
	active = $(this).index();
	changeSlide();
})  
    

    function changeSlide() 
    {
    	/* скрыть все слайды по умолчанию */
		slide.fadeOut();
    	slide.eq(active).fadeIn(); 
    	
    	// если слайд равен 0 = показать
	
		bullets.removeClass('active');
		bullets.eq(active).addClass('active'); 
    }

});