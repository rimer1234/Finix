let shares = [];
let holding = [];

function addItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var hold = document.getElementById("holding");


    var share = candidate.value.toLocaleUpperCase();
    let i = ticker.indexOf(share);
    if (i == -1)
    {
        window.alert("Ticker not recognized! Please try another ticker.");
        return;
    }
    
    var dlr = parseFloat(hold.value);
    if (dlr <= 0)
    {
        window.alert("Please enter the amount invested.");
        return;
    }

    shares.push(share);
    holding.push(hold.value);

    updateCards();

    let co_name = name[i];

    var tr = document.createElement("tr");
    tr.setAttribute('id',candidate.value);
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(share));
    tr.appendChild(td);
    td = document.createElement("td");
    td.appendChild(document.createTextNode(co_name));
    tr.appendChild(td);
    td = document.createElement("td");
    td.appendChild(document.createTextNode("$"+hold.value));
    tr.appendChild(td);
    ul.appendChild(tr);
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");

    var share = candidate.value.toLocaleUpperCase();;
    let i = shares.indexOf(share);
    if (i == -1)
    {
        window.alert("Ticker not in portfolio!");
        return;
    }

    shares.splice(i, 1);
    holding.splice(i, 1);

    updateCards();

    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}

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

function updateCards()
{
    let os = 0;
    let es = 0;
    let cs = 0;
    let ss = 0;
    let tot_holding = 0;

    for (let i = 0; i < shares.length; i++)
    {
            let index = ticker.indexOf(shares[i]);
            if (index > -1)
            {
                let hold = parseFloat(holding[i]);
               
                os = os + parseFloat(overallscore[index]) * hold;
                es += parseFloat(envscore[index]) * hold;
                ss += parseFloat(socscore[index]) * hold;
                cs += parseFloat(corpscore[index]) * hold;
                tot_holding += hold;       
            }
    }

   if (tot_holding > 0)
   {
        os /= tot_holding;
        es /= tot_holding;
        ss /= tot_holding;
        cs /= tot_holding;
   
        element=document.getElementById("Name1");
        element.innerHTML=os.toFixed(1);
        element=document.getElementById("c1");
        changeColors(element, os.toFixed(1));
        
        element=document.getElementById("Name2");
        element.innerHTML=es.toFixed(1);
        element=document.getElementById("c2");
        changeColors(element, es.toFixed(1));
        
        element=document.getElementById("Name3");
        element.innerHTML=ss.toFixed(1);
        element=document.getElementById("c3");
        changeColors(element, ss.toFixed(1));
            
        element=document.getElementById("Name4");
        element.innerHTML=cs.toFixed(1);
        element=document.getElementById("c4");
        changeColors(element, cs.toFixed(1));
   }
   else
   {
        element=document.getElementById("Name1");
        element.innerHTML= "";
        element=document.getElementById("c1");
        element.style.backgroundColor = "#faf3f3";

        element=document.getElementById("Name2");
        element.innerHTML= "";
        element=document.getElementById("c2");
        element.style.backgroundColor = "#faf3f3";

        element=document.getElementById("Name3");
        element.innerHTML= "";
        element=document.getElementById("c3");
        element.style.backgroundColor = "#faf3f3";

        element=document.getElementById("Name4");
        element.innerHTML= "";
        element=document.getElementById("c4");
        element.style.backgroundColor = "#faf3f3";
   }
}