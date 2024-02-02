// JS code for sub-sections

$('.pop-up').hide();
var w=$(window).width();
function pop(key){
	var subsection='subsection/'+key+'.html';
	$('#phone-nav-back').hide();
	if($(window).width()<700){
		$(".menu-right ,.menu-left").css({'display':'none'});
	}
		$.get(subsection, function(data, status){
        	$(".body").hide().html(data).fadeIn(1000);
    	});
	$('#overlay').fadeOut(500);
	$('.pop-up').fadeIn(1000);

	$(".menu-left").addClass("menul");
	$(".menu-right").addClass("menur");
}


function closepop(){
	$('.pop-up').fadeOut(500);
	$('#overlay').fadeIn(1000);
	if($(window).width()<700){
		$(".menur ,.menul").css({'display':'block','top':'19em'});
		$(".menul ul li").css({'transform':'rotateY(15deg)','padding':'1px'});
		$(".menur ul li").css({'transform':'rotateY(-15deg)','padding':'1px'});
	}
	$(".menu-left").removeClass("menul");
	$(".menu-right").removeClass("menur");
}

$("#navigation :button").click(function() {
	$(".menur,.menul").css({'top':"0"});
	$(".menur ul li,.menul ul li").css({'transform':'rotateY(0deg)','padding':'5px'});
	$(".menur ,.menul,#phone-nav-back").fadeToggle();
});

/*
>>>>>>> FETCH_HEAD
//transition from  main page to any sub-sections
function home_to_section(des){
	$('#home').fadeOut(1000);
	$(des).fadeIn(2000);
};

//transition from sub -section to home page

function section_to_home(src){
	$(src).fadeOut(1000);
	$('#home').fadeIn(2000);
<<<<<<< HEAD
}
=======
}*/

