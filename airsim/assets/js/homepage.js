$(document).ready(function() {

	var $navMainNav = $('nav#main_nav');

	$('div#menu_toggle .btn_wrap').click(function() {
		$navMainNav.toggle();

	});

	$(window).resize(function() {
		if($(window).width() > 800) {
			$navMainNav.show();
		}
	});

	setTimeout(function() {
		$('#user_location_map').jHERE({
	        enable: [],
	        zoom: 10,
	        center: { latitude: 59.437, longitude: 24.7536 },
	        type: 'map',
	        // API credentials from Nokia developer website
	        appId: 'URXmsqAlIxjr41aSiojS', // appId from the Nokia developer website,
	        authToken: '7w1lsMEuL9ToVILvmS8vLA'
	    });
	}, 1000);

	setUserInfoAccordeonExpandCollapseButtonsHandlers();


    function setUserInfoAccordeonExpandCollapseButtonsHandlers() {

        $('body').on('click', '.accordeon h1' , function(e){ 
            var $this = $(this);
            var $accordeonPanel = $this.next();
            var $collapseExpandBtn = $this.find('.fa');
            if($collapseExpandBtn.hasClass('fa-arrow-down')) {
                $collapseExpandBtn.removeClass('fa-arrow-down').addClass('fa-arrow-up');
                $accordeonPanel.slideDown(500);
            } else {
                $collapseExpandBtn.removeClass('fa-arrow-up').addClass('fa-arrow-down');
                $accordeonPanel.slideUp(500);
            }
        });
    }

});