$(document).ready(function () {
	$(".performance-box.disabled").each(function() {
		if(moment().diff(moment($(this).find('p>small').eq(1).html(), 'dddd D MMMM YYYY hh:mmA','en'),'minutes')<30)
        	$(this).removeClass("disabled").attr("onClick","selectPerformance(this)");
    });

});