$(document).ready(function()
{
	// берем массив всех слайдов
	const slide = $('.slide')
	// массив всех 'пулек'
	const bullets = $('.slider-bullet')
	// тот слайд который нужно отобразить
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


// // scrolling 
// function scrollTop(clickElem , scrollElem)
// {
// 	$(clickElem).on('click',function()
// {
// 	$('html, body').animate({scrollTop: $(scrollElem).offset().top} , 500);
// })
// }
	
// scrollTop('.logo','.footer');



});

