//Accordian Logic
$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});

//Top Button Logic
var topbtn = document.getElementById("totop");
topbtn.addEventListener("click", gotop);

var t1 = 0;
window.onscroll = scroll1;

function scroll1() {
	var toTop = document.getElementById('totop');
	window.scrollY > 200 ? toTop.style.display = 'Block' : toTop.style.display = 'none';
}

function gotop() {
	var y1 = window.scrollY;
	y1 = y1 - 50;
	window.scrollTo(0, y1);
	if (y1 > 0) {
		t1 = setTimeout("gotop()", 10);
	} else {
		clearTimeout(t1);
	}
}

//Hamburger Logic
var ham = document.getElementById("hamburger-btn");
var hamfull = document.getElementById("hamfull");
var nav = document.getElementById("nav");
var body = document.querySelector("body");

ham.addEventListener("click", function () {
	nav.classList.toggle("block");
	ham.classList.toggle("active");
	hamfull.classList.toggle("fullscreen");
	body.classList.toggle("bodyh");
});