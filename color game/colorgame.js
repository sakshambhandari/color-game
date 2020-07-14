var totalsquares=6;
var colors=generatecolors(totalsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=randomcolor();
var colordisplay=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("#header");
var resetbutton=document.querySelector("#reset");
var easybutton=document.querySelector("#easy");
var hardbutton=document.querySelector("#hard");

colordisplay.textContent=pickedcolor;

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	//adding event listeners
	squares[i].addEventListener("click", function()
	{
		var clickedcolor = this.style.backgroundColor; 	
		if(clickedcolor === pickedcolor){
			messagedisplay.textContent="Correct !"
			changecolor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			colordisplay.style.backgroundColor=clickedcolor;
			resetbutton.textContent="Play Again";
		}
		else{
			this.style.backgroundColor="#232323";
			messagedisplay.textContent="Try Again"
		}
	});
}

function changecolor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

//function pickcolor 
function randomcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generatecolors(num){
	var arr=[]
	for(var i=0;i<num;i++)
	{
		arr.push(randomize());
	}
	return arr;

}

//function randomcolor
function randomize(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetbutton.addEventListener("click",function(){
	colors=generatecolors(totalsquares);
	pickedcolor=randomcolor();
	colordisplay.textContent=pickedcolor;
	resetbutton.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
	messagedisplay.textContent="";
	colordisplay.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}

});

easybutton.addEventListener("click",function(){
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	totalsquares=3;
	colors=generatecolors(totalsquares);
	pickedcolor=randomcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});

hardbutton.addEventListener("click",function(){
	easybutton.classList.remove("selected");
	hardbutton.classList.add("selected");
	totalsquares=6;
	colors=generatecolors(totalsquares);
	pickedcolor=randomcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});