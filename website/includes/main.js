$(document).ready(function(){
	
	"use strict";
	
	$("#group-1").fadeIn(1500);
	$("#form-btns").fadeIn(1500);
	
	$(".custom-checkbox").click(function(){
		$(this).parent().children('.select-input').attr("value", $(this).children(".title").html());
		$(".icon-cont > .icon").removeClass("active");
		$(this).children(".icon-cont").children(".icon").addClass("active");
	});
	
	$(".palettes").click(function(){
		$(".palettes").removeClass("active");
		$(this).addClass("active");
		$("#group-5 > input[name=colors]").attr("value", $(this).children(".title").html());
		if($("#form-btns").css("display") === "none"){
			//$("#form-btns").fadeIn(1000);			
		}
	});
	
	$("#steps input").each(function(){
		$(this).keyup(function(){
			//$("#form-btns").fadeIn(1000);
		});
	});
	
	$("#steps textarea").each(function(){
		$(this).keyup(function(){
			//$("#form-btns").fadeIn(1000);
		});
	});
	
	$("#form-btns").children("#btn-1").click(function(){
		if($(this).attr("data-step") === "1"){
			if($("input[name=q1]").val() !== "" && $("input[name=q2]").val() !== "" && $("textarea[name=q3]").val() !== "" && $("input[name=q4]").val() !== ""){
				$("#form-btns").fadeOut(0);
				$(".headline-steps").html("Tell us a little<br>bit about your brand");
				$("#group-1").fadeOut(100, function(){
					$("#group-0").children(".title").html("Thanks you for providing your information.");
					//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
					//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
					setTimeout(function() { $("#group-2").fadeIn(300); $("#form-btns").fadeIn(300); }, 2000);
					$("#form-btns").children("#btn-1").attr("data-step", "2");
					$("#form-btns").children("#btn-2").attr("data-step", "2");
					$(".pagination > .handler > .steps").html("Steps 2 of 5");
					$('<div class="active" id="2"></div>').appendTo($('.pagination > .handler > .bar'));
				});
			}
			else{
				if($("input[name=q1]").val() === ""){
					$('input[name=q1]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=q2]").val() === ""){
					$('input[name=q2]').effect("bounce", { times:3 }, 300);
				}
				
				if($("textarea[name=q3]").val() === ""){
					$('textarea[name=q3]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=q4]").val() === ""){
					$('input[name=q4]').parent().children(".custom-checkbox").effect("bounce", { times:3 }, 300);
				}
			}
		}
		else if($(this).attr("data-step") === "2"){
			if($("input[name=q5]").val() !== "" && $("textarea[name=q6]").val() !== "" && $("textarea[name=q7]").val() !== "" && $("textarea[name=q8]").val() !== ""){
				$("#form-btns").fadeOut(0);
				$(".headline-steps").html("Tell us a little<br>bit about your brand");
				$("#group-2").fadeOut(100, function(){
					$("#group-0").children(".title").html("Step 3");
					//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
					//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
					setTimeout(function() { $("#group-3").fadeIn(300); $("#form-btns").fadeIn(300);  }, 2000);	
					$("#form-btns").children("#btn-1").attr("data-step", "3");
					$("#form-btns").children("#btn-2").attr("data-step", "3");
					$(".pagination > .handler > .steps").html("Steps 3 of 5");
					$('<div class="active" id="3"></div>').appendTo($('.pagination > .handler > .bar'));
				});
			}
			else{
				if($("textarea[name=q6]").val() === ""){
					$('textarea[name=q6]').effect("bounce", { times:3 }, 300);
				}
				
				if($("textarea[name=q7]").val() === ""){
					$('textarea[name=q7]').effect("bounce", { times:3 }, 300);
				}
				
				if($("textarea[name=q8]").val() === ""){
					$('textarea[name=q8]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=q5]").val() === ""){
					$('input[name=q5]').parent().children(".custom-checkbox").effect("bounce", { times:3 }, 300);
				}
			}
		}
		else if($(this).attr("data-step") === "3"){
			if($("textarea[name=q9]").val() !== "" && $("textarea[name=q10]").val() !== "" && $("textarea[name=q11]").val() !== ""){
				$("#form-btns").fadeOut(0);
				$(".headline-steps").html("Tell us about<br>your website preferences");
				$("#group-3").fadeOut(100, function(){
					$("#group-0").children(".title").html("Step 4");
					//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
					//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
					setTimeout(function() { $("#group-4").fadeIn(300); $("#form-btns").fadeIn(300); }, 2000);	
					$("#form-btns").children("#btn-1").attr("data-step", "4");
					$("#form-btns").children("#btn-2").attr("data-step", "4");	
					$(".pagination > .handler > .steps").html("Steps 4 of 5");
					$('<div class="active" id="4"></div>').appendTo($('.pagination > .handler > .bar'));

				});
			}
			else{
				if($("textarea[name=q9]").val() === ""){
					$('textarea[name=q9]').effect("bounce", { times:3 }, 300);
				}
				
				if($("textarea[name=q10]").val() === ""){
					$('textarea[name=q10]').effect("bounce", { times:3 }, 300);
				}
				
				if($("textarea[name=q11]").val() === ""){
					$('textarea[name=q11]').effect("bounce", { times:3 }, 300);
				}
			}
		}
		else if($(this).attr("data-step") === "4"){
			if($("textarea[name=q12]").val() !== "" && $("textarea[name=q13]").val() !== "" && $("input[name=q14]").val() !== "" && $("input[name=q15]").val() !== "" && $("input[name=q16]").val() !== ""){
				$("#form-btns").fadeOut(0);
				$(".headline-steps").html("How do we<br>reach out to you?");
				$("#group-4").fadeOut(100, function(){
					$("#group-0").children(".title").html("Step 5");
					//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
					//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
					setTimeout(function() { $("#group-5").fadeIn(300); $("#form-btns").fadeIn(300); }, 2000);
					$("#form-btns").children("#btn-1").attr("data-step", "5");
					$("#form-btns").children("#btn-2").attr("data-step", "5");	
					$(".pagination > .handler > .steps").html("Steps 5 of 5");
					$('<div class="active" id="5"></div>').appendTo($('.pagination > .handler > .bar'));
					$("#form-btns").children("#btn-1").html("Finish");
				});
			}
			else{
				if($("textarea[name=q12]").val() === ""){
					$('textarea[name=q12]').effect("bounce", { times:3 }, 300);
				}
				
				if($("textarea[name=q13]").val() === ""){
					$('textarea[name=q13]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=q14]").val() === ""){
					$('input[name=q14]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=q15]").val() === ""){
					$('input[name=q15]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=q16]").val() === ""){
					$('input[name=q16]').parent().children(".custom-checkbox").effect("bounce", { times:3 }, 300);
				}
			}
		}
		else if($(this).attr("data-step") === "5"){
			if($("input[name=fname]").val() !== "" && $("input[name=lname]").val() !== "" && $("input[name=email]").val() !== "" && $("input[name=phone]").val() !== ""){
				$("form#steps").submit();

				$("#form-btns").fadeOut(0);
				$("#group-5").fadeOut(100, function(){
					setTimeout(function() { $("#results-cont").fadeIn(300); }, 2000);
				});
			}
			else{
				if($("input[name=fname]").val() === ""){
					$('input[name=fname]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=lname]").val() === ""){
					$('input[name=lname]').effect("bounce", { times:3 }, 300);
				}

				if($("input[name=email]").val() === ""){
					$('input[name=email]').effect("bounce", { times:3 }, 300);
				}
				
				if($("input[name=phone]").val() === ""){
					$('input[name=phone]').effect("bounce", { times:3 }, 300);
				}
			}
		}
	});
	
	$("#form-btns").children("#btn-2").click(function(){
		if($(this).attr("data-step") === "2"){
			$("#form-btns").fadeOut(0);
			$(".headline-steps").html("Tell us a little<br>bit about your brand");
			$("#group-2").fadeOut(100, function(){
				$("#group-0").children(".title").html("Thanks you for providing your information.");
				//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
				//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
				setTimeout(function() { $("#group-1").fadeIn(300); $("#form-btns").fadeIn(300); }, 2000);
				$("#form-btns").children("#btn-1").attr("data-step", "1");
				$("#form-btns").children("#btn-2").attr("data-step", "1");
				$(".pagination > .handler > .steps").html("Steps 1 of 5");
				$('.pagination > .handler > .bar > .active#2').remove();
			});
		}
		else if($(this).attr("data-step") === "3"){
			$("#form-btns").fadeOut(0);
			$(".headline-steps").html("Tell us a little<br>bit about your brand");
			$("#group-3").fadeOut(100, function(){
				$("#group-0").children(".title").html("Step 2");
				//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
				//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
				setTimeout(function() { $("#group-2").fadeIn(300); $("#form-btns").fadeIn(300);  }, 2000);	
				$("#form-btns").children("#btn-1").attr("data-step", "2");
				$("#form-btns").children("#btn-2").attr("data-step", "2");
				$(".pagination > .handler > .steps").html("Steps 2 of 5");
				$('.pagination > .handler > .bar > .active#3').remove();
			});
		}
		else if($(this).attr("data-step") === "4"){
			$("#form-btns").fadeOut(0);
			$(".headline-steps").html("Tell us about<br>your website preferences");
			$("#group-4").fadeOut(100, function(){
				$("#group-0").children(".title").html("Step 3");
				//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
				//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
				setTimeout(function() { $("#group-3").fadeIn(300); $("#form-btns").fadeIn(300); }, 2000);	
				$("#form-btns").children("#btn-1").attr("data-step", "3");	
				$("#form-btns").children("#btn-2").attr("data-step", "3");	
				$(".pagination > .handler > .steps").html("Steps 3 of 5");
				$('.pagination > .handler > .bar > .active#4').remove();
			});
		}
		else if($(this).attr("data-step") === "5"){
			$("#form-btns").fadeOut(0);
			$(".headline-steps").html("Tell us about<br>your website preferences");
			$("#group-5").fadeOut(100, function(){
				$("#group-0").children(".title").html("Step 4");
				//setTimeout(function() { $("#group-0").fadeIn(500); }, 500);	
				//setTimeout(function() { $("#group-0").fadeOut(500); }, 1500);	
				setTimeout(function() { $("#group-4").fadeIn(300); $("#form-btns").fadeIn(300); }, 2000);
				$("#form-btns").children("#btn-1").attr("data-step", "4");
				$("#form-btns").children("#btn-2").attr("data-step", "4");
				$(".pagination > .handler > .steps").html("Steps 4 of 5");
				$('.pagination > .handler > .bar > .active#5').remove();
				$("#form-btns").children("#btn-1").html("Next");
			});
		}
	});
	
	$('form#steps').submit(function(e){
		  
		 $("#results-cont").children(".results").html('Creating new user account please wait...');
		 $.ajax({
			  data: $(this).serialize(),
			  url: 'form.php',
			  type: 'POST',
			  success: function(data){
				  $("#results-cont").children(".results").html(data);
				  console.log(data);
			  },
			  complete: function(){
				 
			  },
		 });
		 e.preventDefault();
	 });
	
	
	$('input#type').rangeslider({
		polyfill : false,
		onInit : function() {
			this.output = $( '<div class="range-title-left" />' ).insertBefore( this.$range ).html( "Classic" );
			this.output = $( '<div class="range-title-right" />' ).insertBefore( this.$range ).html( "Modern" );
		},
		onSlide : function( /*position, value */){
			//this.output.html( value );
		}
	});
	
	$('input#type-2').rangeslider({
		polyfill : false,
		onInit : function() {
			this.output = $( '<div class="range-title-left" />' ).insertBefore( this.$range ).html( "Mature" );
			this.output = $( '<div class="range-title-right" />' ).insertBefore( this.$range ).html( "Youthful" );
		},
		onSlide : function( /*position, value */) {
			//this.output.html( value );
		}
	});
	
	$('input#type-3').rangeslider({
		polyfill : false,
		onInit : function() {
			this.output = $( '<div class="range-title-left" />' ).insertBefore( this.$range ).html( "Masculine" );
			this.output = $( '<div class="range-title-right" />' ).insertBefore( this.$range ).html( "Feminine" );
		},
		onSlide : function( /*position, value */) {
			//this.output.html( value );
		}
	});
	
	$('input#type-4').rangeslider({
		polyfill : false,
		onInit : function() {
			this.output = $( '<div class="range-title-left" />' ).insertBefore( this.$range ).html( "Playful" );
			this.output = $( '<div class="range-title-right" />' ).insertBefore( this.$range ).html( "Sophisticated" );
		},
		onSlide : function( /*position, value */) {
			//this.output.html( value );
		}
	});
	
	$('input#type-5').rangeslider({
		polyfill : false,
		onInit : function() {
			this.output = $( '<div class="range-title-left" />' ).insertBefore( this.$range ).html( "Economical" );
			this.output = $( '<div class="range-title-right" />' ).insertBefore( this.$range ).html( "Luxurious" );
		},
		onSlide : function( /*position, value */) {
			//this.output.html( value );
		}
	});
	
	$('input#type-6').rangeslider({
		polyfill : false,
		onInit : function() {
			this.output = $( '<div class="range-title-left" />' ).insertBefore( this.$range ).html( "Geometric" );
			this.output = $( '<div class="range-title-right" />' ).insertBefore( this.$range ).html( "Organic" );
		},
		onSlide : function( /*position, value */) {
			//this.output.html( value );
		}
	});
	
	$('input#type-7').rangeslider({
		polyfill : false,
		onInit : function() {
			this.output = $( '<div class="range-title-left" />' ).insertBefore( this.$range ).html( "Literal" );
			this.output = $( '<div class="range-title-right" />' ).insertBefore( this.$range ).html( "Abstract" );
		},
		onSlide : function( /*position, value */) {
			//this.output.html( value );
		}
	});
	
	
});