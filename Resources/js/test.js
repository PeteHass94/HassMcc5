
function displayNav(){
  document.getElementById("hidden").style.display = "flex";
}
function hideNav(){
  document.getElementById("hidden").style.display = "none";
}

var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});
