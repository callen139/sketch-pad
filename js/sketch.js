size= 16;
option = 1;

var main = function()
{
	populate(size);
	colorSquare(option);
	choice();
};

var populate = function(size)
{
	var squareSize = 500/size;
	for (x = 0; x < size; x++)
	{
		for (var y = 0; y < size; y++)
		{

			$("<div>").addClass("square").css({"height":squareSize, "width":squareSize}).appendTo("#container");
		}
	}
};

var colorSquare = function(option)
{
	if(option == 1)
	{
		$('.square').on('mouseover', function(){
			$(this).addClass("option" + option);
		});
	}
	
	if(option == 2)
	{

	}
	
	if(option == 3)
	{

	}
};

var choice = function() {
	$('.choice').on('mousedown', function() {
		$(this).removeClass('rest');
		$(this).addClass('clicked');
	});

	$('.choice').on('mouseup', function() {
		$(this).removeClass('clicked');
		$(this).addClass('rest');
	});

	$('.choice').on('click', function() {
		option = $(this).data('value');
		//alert(option);
	});
}

$(document).ready(main);