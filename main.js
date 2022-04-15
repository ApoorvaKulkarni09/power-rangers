
var canvas = new fabric.Canvas("myCanvas")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{ fabric.Image.fromURL(get_image, function (IMG) {
	block_image_object = IMG ;


	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:block_y,
		left:block_x
	});
	canvas.add(block_image_object);
})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image('rr1.png')
		console.log(" red ranger ")
	}
	if(keyPressed == '71')
	{ 
		new_image('gr.png')
	     console.log(" green ranger ")
		block_x = 200;
		
	}
	
	if(keyPressed == '89')
	{    new_image('yr.png')
	    console.log("yellow ranger " )
		block_x =350;
		
	}
	if(keyPressed == '80')
	{    new_image('pr.png')
	    console.log(" pink ranger ")
		block_x = 600;
		
	}
	if(keyPressed == '66')
	{     new_image('br.png')
	      console.log("blue ranger")
		block_x = 700;
	r
	}
	
}

