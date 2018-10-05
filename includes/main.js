$(document).ready(function(){
	
	"use strict";
	
	$(".content > .wrapper > .home-title").css('visibility', 'visible').animate({opacity: 1.0}, 1000);

	/*$('.animated-part').tilt({
	
	});*/
		
	$(".next-btn").click(function(){
		$("#plan-form").submit();
	});
	
	$("#plan-form").submit(function(e){	
		if($("input[name=q1]").val() === "" && $("input[name=q2]").val() === "" && $("input[name=q3]").val() === "" && $("input[name=q4]").val() === "" && $("input[name=q7]").val() === ""){	
			
			if($("input[name=q1]").val() === ""){
				$('input[name=q1]').effect("bounce", { times:3 }, 300);
			}

			if($("input[name=q2]").val() === ""){
				$('input[name=q2]').effect("bounce", { times:3 }, 300);
			}

			if($("input[name=q3]").val() === ""){
				$('input[name=q3]').effect("bounce", { times:3 }, 300);
			}

			if($("input[name=q4]").val() === ""){
				$('input[name=q4]').effect("bounce", { times:3 }, 300);
			}
			
			/*if($("input[name=q5]").val() === ""){
				$('input[name=q5]').effect("bounce", { times:3 }, 300);
			}

			if($("input[name=q6]").val() === ""){
				$('input[name=q6]').effect("bounce", { times:3 }, 300);
			}*/

			if($("input[name=q7]").val() === ""){
				$('input[name=q7]').effect("bounce", { times:3 }, 300);
			}	
			
		}
		else{
			var formData = new FormData(this);
			$.ajax({
				  data: formData,
				  cache:false,
				  contentType: false,
				  processData: false,
				  url: 'join.php',
				  type: 'POST',
				  success: function(data){
					  $("#plan-form").fadeOut("fast");
					  $(".results").html(data);
					  console.log(data);
				  },
				  complete: function(){

				  },
			 });
		}
		e.preventDefault();
	});
	
	
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
        document.body.appendChild(css);
    };

	


	
	$(".site-wrapper").on('mousemove', function(e) {
	  var w = $(".site-wrapper").width();
	  var h = $(".site-wrapper").height();
	  var offsetX = 0.5 - e.pageX / w;
	  var offsetY = 0.5 - e.pageY / h;

	  $(".site-wrapper > .content > .wrapper > .banner > .animated-part > img").each(function(i, el) {
		//$(".site-wrapper > .content > .wrapper > .banner > .animated-part > img").css("animation-play-state", "running");
		//$(".site-wrapper > .content > .wrapper > .banner > .animated-part > img").css("animation", "none");
		var offset = parseInt($(el).data('offset'));
		var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

		$(el).css({
		'-webkit-transform': translate,
		'transform': translate,
		'moz-transform': translate
		});
	  });
	});

	
	$(".menu-btn").click(function(){
		$(".menu").fadeIn(1000);
		$("html").addClass("disableScroll");
	});
	
	$(".close-btn").click(function(){
		$(".menu").fadeOut(1000);
		$("html").removeClass("disableScroll");
	});
	
	$(".top-section").height($(window).height());
	

	/*var animation = bodymovin.loadAnimation({
		container: document.getElementById('bm'),
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: 'includes/articulation.json'
	});*/
	
	$("img.wires").fadeIn(1500);
	$("img.charts").fadeIn(2000);
	$("img.tools-2").fadeIn(2200);
	$("img.layouts").fadeIn(2500);
	$("img.tablet").fadeIn(2900);
	$("img.laptop").fadeIn(3500);
	$("img.files").fadeIn(4200);
	$("img.tools").fadeIn(4900);
	$("img.fdrive").fadeIn(5500);
	$("img.camera").fadeIn(6200);
	$("img.envelope").fadeIn(8000);
	$("img.tablet-2").fadeIn(8500);
	$("img.lamp").fadeIn(9000);
	$("img.phone").fadeIn(9500);
	$("img.scissor").fadeIn(10000);
	
	$(".animated").each(function(){
		var $this = $(this);
		$(this).waypoint(function(direction) {
			if (direction ==='down') {
					if($this.attr('data-animation') === "fadeup")
					{
					   $this.addClass("fadeInUp");
					   $this.css("visibility", "visible");
					}
					if($this.attr('data-animation') === "fadedown")
					{
					   $this.addClass("fadeInDown");
					   $this.css("visibility", "visible");
					}
					if($this.attr('data-animation') === "fadeleft")
					{
					   $this.addClass("fadeInLeft");
					   $this.css("visibility", "visible");						
					}
					if($this.attr('data-animation') === "faderight")
					{
					   $this.addClass("fadeInRight");
					   $this.css("visibility", "visible");						
					}
				    else if($this.attr('data-animation') === "slideup")
					{
					   $this.addClass('slideInUp');
					   $this.css("visibility", "visible");					
					}
				    else if($this.attr('data-animation') === "slidedown")
					{
					   $this.addClass('slideInDown');
					   $this.css("visibility", "visible");
					}
				    else if($this.attr('data-animation') === "slideleft")
					{
					   $this.addClass('slideInLeft');
					   $this.css("visibility", "visible");						
					}
				    else if($this.attr('data-animation') === "slideright")
					{
					   $this.addClass('slideInRight');
					   $this.css("visibility", "visible");						
					}
					else if($this.attr('data-animation') === "bounce")
					{
					   $this.addClass("bounceIn");
					   $this.css("visibility", "visible");						
					}
					else if($this.attr('data-animation') === "shake")
					{
					   $this.addClass('shake');
					   $this.css("visibility", "visible");						
					}
					else if($this.attr('data-animation') === "flip")
					{
					   $this.addClass('flip');
					   $this.css("visibility", "visible");						
					}
					else if($this.attr('data-animation') === "rotate")
					{
					   $this.addClass('rotateIn');
					   $this.css("visibility", "visible");						
					}
					else if($this.attr('data-animation') === "zoomin")
					{
					   $this.addClass('zoomIn');
					   $this.css("visibility", "visible");						
					}
			}
		}, {
			offset: '90%'
		});
	
	});
	
	
	/*$(window).scroll(function() {
	  
	  if ($(this).scrollTop() > 1){
		  $("header").addClass("sticky-header");
	  }
	  else{
		  $("header").removeClass("sticky-header");
	  }
	});*/
	
});