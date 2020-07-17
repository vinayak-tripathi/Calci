

function two(){
    document.getElementById("eq").innerHTML
                        = "This is Linear equation in Two variables";
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        modal.style.display = "block";
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
        
        modal.style.display = "block";
    }
}
function quad(){
    var s= "";
	document.getElementById("eq").style.display="block";
    s+='<table>';
    s+='<tr>'
    s+='<td><input type="text" class="t" name="q"><i>x<sup>2</sup></i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="text" class="t" name="q"><i>x</i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="text" class="t" name="q">= 0</td>';
    s+='</tr>'
    s+='</table>'
    document.getElementById("eq").innerHTML=s;
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        
        var q=document.getElementsByName("q");
        var a=eval(q[0].value),b=eval(q[1].value),c=eval(q[2].value);
        var dis=b**2-4*a*c;
        if(dis<0){
            dis=dis*(-1);
            dis=dis**0.5
            var r1=(-b)/(2*a),dis=dis/(2*a);
            document.getElementById("res").innerHTML="Root 1 = "+r1+" + "+dis+" <i>i</i><br>Root 2 = "+r1+" - "+dis+" <i>i</i>";
        }
        else if(dis>0){
            dis=dis**0.5
            alert("Vinayak")
            var r1=(-b)/(2*a),dis=dis/(2*a),root1,root2;
            alert("Vinayak")
            root1=r1+dis;
            root2=r1-dis;
            alert("Vinayak")
            document.getElementById("res").innerHTML="Root 1 = "+root1+"<br>Root 2 = "+root2;            
        }
        else{
            var r1=(-b)/(2*a);
            document.getElementById("res").innerHTML="Root ="+r1;
        }
        // var s= "";
        // s+='<tr>'
        // s+='<td>'+a+'<i>x<sup>2</sup></i>&nbsp;&nbsp;+&nbsp;&nbsp;</td>';
        // s+='<td>'+b+'<i>x</i>&nbsp;&nbsp;+&nbsp;&nbsp;</td>';
        // s+='<td>'+c+'&nbsp;&nbsp;= 0</td>';
        // s+='</tr>'
        // s+='</table>'
        // document.getElementById("res").innerHTML=s;
		modal.style.display = "block";
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
			modal.style.display = "block";
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
