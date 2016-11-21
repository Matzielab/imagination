/**
 * imagination
 * by Matzielab.com
 *
 * This fancy, smancy, hocus, pocus, yummy piece of code was created by Mathias Eriksson.
 * Feel free to use it on your sites but you can in no way use it to make money,
 * in that case i want some of that money because i need to eat too. Maybe we could even eat together!
 *
 * If you decide to use this, tell me about it! I'd love to see how you put this to use.
 * Also shout out to Matzielab if you feel like it, or not it's up to your pretty face.
 *
 * Handshakes & highfives,
 * Matzie
 */

var Matzielab_Imagine = function(element, cssAttr)
{
	var b = 1;
	var state = "up"
	$(document).on('mousemove',function(e){
		var x = e.pageX === undefined ? e.originalEvent.layerX : e.pageX;
		var y = e.pageY === undefined ? e.originalEvent.layerY : e.pageY;

		var r = Math.floor(255*(x/$(window).innerWidth()));
		var g = 255-(Math.floor(255*(y/$(window).innerHeight())));

		if(b < 255 && state == "up")
		{
			b++;
		}
		else if(b <= 255 && state == "down" && b > 0)
		{
			b--;
		}
		else if(b >= 255 && state == "up")
		{
			b = 255;
			state = "down";
		}
		else if(b <= 0 && state == "down")
		{
			b = 1;
			state = "up";
		}

		$(element).css(cssAttr, 'rgb('+r+','+g+','+b+')');
	});
};