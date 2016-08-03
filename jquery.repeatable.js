/*
	jQuery Mouse Click Event Repeater
	https://github.com/davidbuchweitz/repeater
*/

jQuery.fn.repeatable = function()
{
	var step_delay = 300;
	var divisor = 1.25;
	var min_speed = 50;

	var timer = null;

	$(this).each(function()
	{
		var obj = $(this);

		obj.on('mousedown', function()
		{
			interval = step_delay;

			var stepper = function()
			{
			    obj.click();
			    clearInterval(timer);
			    interval = (interval < min_speed) ? min_speed : parseInt(interval/divisor);
			    timer = setInterval(stepper, interval);
			}

			timer = setInterval(stepper, interval);
		});

		obj.on('mouseup mouseleave', function()
		{
			clearInterval(timer);
		});
	});

	return this;
}
