function changeColors(element,score){
	if (score>90)
		element.style.backgroundColor="green";
	else if (score > 80)
		element.style.backgroundColor="Yellow";
	else if (score > 60)
		element.style.backgroundColor="Orange";
	else
		element.style.backgroundColor="red";
}

function getTextBox(){
	tick = document.getElementById("Ticker").value.toLocaleUpperCase();
	let i = ticker.indexOf(tick);
	if (i > -1)
	{
		element=document.getElementById("T");
		element.innerHTML=ticker[i];
		element=document.getElementById("Name");
		element.innerHTML=name[i];
		
		element=document.getElementById("Name1");
		element.innerHTML=overallscore[i];
		element=document.getElementById("c1");
		changeColors(element, overallscore[i]);
		
		element=document.getElementById("Name2");
		element.innerHTML=envscore[i];
		element=document.getElementById("c2");
		changeColors(element, envscore[i]);
		
		element=document.getElementById("Name3");
		element.innerHTML=socscore[i];
		element=document.getElementById("c3");
		changeColors(element, socscore[i]);
		
		element=document.getElementById("Name4");
		element.innerHTML=corpscore[i];
		element=document.getElementById("c4");
		changeColors(element, corpscore[i]);
	}
	else
	{
		window.alert("Ticker not recognized! Please try another ticker.");
	}
}

function CardClick()
{
	listItem = document.getElementById("T");
	window.open("https://finance.yahoo.com/quote/" + listItem);
}