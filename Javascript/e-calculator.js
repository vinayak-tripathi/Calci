
function two(){
    document.getElementById("eq").innerHTML
                        = "This is Linear equation in Two variables";
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        modal.style.display = "none";
    }
}
function three(){    
    var s= "";
	document.getElementById("eq").style.display="block";
    s+='<table>';
    s+='<tr>'
    s+='<td><input type="number" class="t"><i>x<sup>2</sup></i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="number" class="t"><i>x</i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="number" class="t">= 0</td>';
    s+='</tr>'
    s+='</table>'
    document.getElementById("eq").innerHTML=s;
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        
        modal.style.display = "none";
    }
}
function quad(){
    var s= "";
	document.getElementById("eq").style.display="block";
    s+='<table>';
    s+='<tr>'
    s+='<td><input type="number" class="t"><i>x<sup>2</sup></i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="number" class="t"><i>x</i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="number" class="t">= 0</td>';
    s+='</tr>'
    s+='</table>'
    document.getElementById("eq").innerHTML=s;
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        
		modal.style.display = "none";
		}
}
function cubic(){
    var s= "";
    s+='<table>';
    s+='<tr>'
    s+='<td><input type="number" class="t"><i>x<sup>3</sup></i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="number" class="t"><i>x<sup>2</sup></i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="number" class="t"><i>x</i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="number" class="t">= 0</td>';
    s+='</tr>'
    s+='</table>'
    document.getElementById("eq").innerHTML=s;
    var solve=document.getElementById("solve");
    solve.onclick = function() {
			modal.style.display = "none";
		}
}

function gene(){
    var ele = document.getElementsByName('type'); 
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
        if(ele[i].value=='two'){
            two();
        }
        else if(ele[i].value=='three'){
            three();
        }
        else if(ele[i].value=='quad'){
            quad();
        }
        else if(ele[i].value=='cubic'){
            cubic();
        }
     }
}
}
