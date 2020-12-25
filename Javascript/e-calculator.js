function two(){
    var s= "";
	document.getElementById("eq").style.display="flex";
    s+='<table>';
    var n=2
    for(var i=0;i<n;i++){
        s+='<tr>'
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>x</i>&nbsp;+</td>';
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>y</i>&nbsp;</td>';
        s+='<td>=<input type="text" class="t" name="eq'+i+'"></td>';
        s+='</tr>'
    }
    s+="</table>"
    document.getElementById("eq").innerHTML=s;
    solve.onclick = function() {
        var eq1=document.getElementsByName("eq0");
        var eq2=document.getElementsByName("eq1");
        var c=[[eval(eq1[0].value),eval(eq1[1].value),eval(eq1[2].value)],[eval(eq2[0].value),eval(eq2[1].value),eval(eq2[2].value)]];
        var n=2,i,j,k;
        var s="<div class='alert alert-info'><ul>"
        for(i=0;i<n;i++){
            s+="<li>"
            if(c[i][0]>0){
                s+=c[i][0]+"<i>x</i> "
            }
            else if(c[i][0]<0){
                s+="- "+c[i][0]*-1+"<i>x</i> "
            }
            if(c[i][1]>0){
                s+="+ "+c[i][1]+"<i>y</i> "
            }
            else if(c[i][1]<0){
                s+="- "+c[i][1]*-1+"<i>y</i> "
            }
            s+="= "+c[i][2]+"</li>"
        }
        s+="</ul>"
        for(i=0;i<n;i++){
            if (c[i][i]==0)
                continue;
        else{
            var f=c[i][i];
            for(k=0;k<=n;k++){
                c[i][k]=c[i][k]/f;
            }
            for(j=1;j<n-i;j++){
                var g=c[i+j][i];
                for(k=0;k<=n;k++){
                    c[i+j][k]-=g*c[i][k];
                }
            }
        }
        }
        y=c[0][1];
        for(k=0;k<=n;k++){
            var t=c[0][k];
            c[0][k]=c[0][k]-y*c[1][k];
        }
        x=c[0][2]/c[0][0];
        y=(c[1][2]-c[1][0]*x)/c[1][1];
        s+="<div class=container>"
        if (isFinite(x) && isFinite(y)){
            s+="<div class='alert alert-success'><strong>The roots are</strong>"
            s+="<br><div class='panel panel-primary'>"
            s+="<div class='panel-body'><i>x</i> = "+x+"<br><i>y</i> = "+y
            s+="</div></div></div>"
        }
        else{
            s+="<br><div class='alert alert-danger'>"
            s+="<strong>Error!</strong> "
            s+="System has Infinitely or No solutions! "
            s+="</div>"
        }
        s+="</div></div>"
        document.getElementById("res").innerHTML=s;

        }
}

function three(){    
    var s= "";
	document.getElementById("eq").style.display="flex";
     s+='<table>';
    var n=3,i,j,k
    for(i=0;i<n;i++){
        s+='<tr>'
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>x</i>&nbsp;+</td>';
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>y</i>&nbsp;+</td>';
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>z</i>&nbsp;</td>';
        s+='<td>=<input type="text" class="t" name="eq'+i+'"></td>';
        s+='</tr>'
    }
    s+"</table>"
    document.getElementById("eq").innerHTML=s;
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        var eq1=document.getElementsByName("eq0");
        var eq2=document.getElementsByName("eq1");
        var eq3=document.getElementsByName("eq2");
        var c=[[eval(eq1[0].value),eval(eq1[1].value),eval(eq1[2].value),eval(eq1[3].value)],[eval(eq2[0].value),eval(eq2[1].value),eval(eq2[2].value),eval(eq2[3].value)],[eval(eq3[0].value),eval(eq3[1].value),eval(eq3[2].value),eval(eq3[3].value)]];
        var n=3,i,j,k;
        var s="<div class='alert alert-info'><ul>"
        for(i=0;i<n;i++){
            s+="<li>"
            if(c[i][0]>0){
                s+=c[i][0]+"<i>x</i> "
            }
            else if(c[i][0]<0){
                s+="- "+c[i][0]*-1+"<i>x</i> "
            }
            if(c[i][1]>0){
                s+="+ "+c[i][1]+"<i>y</i> "
            }
            else if(c[i][1]<0){
                s+="- "+c[i][1]*-1+"<i>y</i> "
            }
            if(c[i][2]>0){
                s+="+ "+c[i][2]+"<i>z</i> "
            }
            else if(c[i][2]<0){
                s+="- "+c[i][2]*-1+"<i>z</i> "
            }
            s+="= "+c[i][3]+"</li>"
        }
        
        s+="</ul>"
        for(i=0;i<n;i++){
            if (c[i][i]==0)
                continue;
            else{
                var f=c[i][i];
                for(k=0;k<=n;k++){
                    c[i][k]=c[i][k]/f;
                }
                for(j=1;j<n-i;j++){
                    var g=c[i+j][i];
                    for(k=0;k<=n;k++){
                        c[i+j][k]-=g*c[i][k];
                    }
                }
            }
        }
        for (j=n-1;j>=0;j--){
            for(i=j-1;i>=0;i--){
                var f=c[i][j];
                for(k=0;k<=n;k++){
                    c[i][k]-=c[j][k]*f;
                    }
                }
        }        
        var x=c[0][3]/c[0][0];
        var y=(c[1][3]-x*c[1][0])/c[1][1];
        var z=(c[2][3]-x*c[2][0]-y*c[2][1])/c[2][2];
	    s+="<div class=container>"
        if (isFinite(x) && isFinite(y) && isFinite(z)){
            s+="<div class='alert alert-success'><strong>The roots are</strong>"
            s+="<br><div class='panel panel-primary'>"
            s+="<div class='panel-body'><i>x</i> = "+x+"<br><i>y</i> = "+y
            s+="<br><i>z</i> = "+z
            s+="</div></div></div>"
        }
        else{
            s+="<br><div class='alert alert-danger'>"
            s+="<strong>Error!</strong> "
            s+="System has Infinitely or No solutions! "
            s+="</div>"
        }
        s+="</div></div>"
        document.getElementById("res").innerHTML=s;

    }
}

function four(){
    var s= "";
	document.getElementById("eq").style.display="flex";
    s+='<table>';
    var n=4,i,j,k
    for(i=0;i<n;i++){
        s+='<tr>'
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>w</i>&nbsp;+</td>';
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>x</i>&nbsp;+</td>';
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>y</i>&nbsp;+</td>';
        s+='<td><input type="text" class="t" name="eq'+i+'"><i>z</i>&nbsp;</td>';
        s+='<td>=<input type="text" class="t" name="eq'+i+'"></td>';
        s+='</tr>'
    }
    s+"</table>"
    document.getElementById("eq").innerHTML=s;
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        var eq1=document.getElementsByName("eq0");
        var eq2=document.getElementsByName("eq1");
        var eq3=document.getElementsByName("eq2");
        var eq4=document.getElementsByName("eq3");
        var c=[[eval(eq1[0].value),eval(eq1[1].value),eval(eq1[2].value),eval(eq1[3].value),eval(eq1[4].value)],[eval(eq2[0].value),eval(eq2[1].value),eval(eq2[2].value),eval(eq2[3].value),eval(eq2[4].value)],[eval(eq3[0].value),eval(eq3[1].value),eval(eq3[2].value),eval(eq3[3].value),eval(eq3[4].value)],[eval(eq4[0].value),eval(eq4[1].value),eval(eq4[2].value),eval(eq4[3].value),eval(eq4[4].value)]];
        var n=4,i,j,k;
        var s="<div class='alert alert-info'><ul>"
        for(i=0;i<n;i++){
            s+="<li>"
            if(c[i][0]>0){
                s+=c[i][0]+"<i>w</i> "
            }
            else if(c[i][0]<0){
                s+="- "+c[i][0]*-1+"<i>w</i> "
            }
            if(c[i][1]>0){
                s+="+ "+c[i][1]+"<i>x</i> "
            }
            else if(c[i][1]<0){
                s+="- "+c[i][1]*-1+"<i>x</i> "
            }
            if(c[i][2]>0){
                s+="+ "+c[i][2]+"<i>y</i> "
            }
            else if(c[i][2]<0){
                s+="- "+c[i][2]*-1+"<i>y</i> "
            }
            if(c[i][3]>0){
                s+="+ "+c[i][2]+"<i>z</i> "
            }
            else if(c[i][3]<0){
                s+="- "+c[i][2]*-1+"<i>z</i> "
            }
            s+="= "+c[i][4]+"</li>"
        }
        
        s+="</ul>"
        for(i=0;i<n;i++){
            if (c[i][i]==0)
                continue;
            else{
                var f=c[i][i];
                for(k=0;k<=n;k++){
                    c[i][k]=c[i][k]/f;
                }
                for(j=1;j<n-i;j++){
                    var g=c[i+j][i];
                    for(k=0;k<=n;k++){
                        c[i+j][k]-=g*c[i][k];
                    }
                }
            }
        }
        for (j=n-1;j>=0;j--){
            for(i=j-1;i>=0;i--){
                var f=c[i][j];
                for(k=0;k<=n;k++){
                    c[i][k]-=c[j][k]*f;
                    }
                }
        }        
        var w=c[0][4]/c[0][0];
        var x=(c[1][4]-w*c[1][0])/c[1][1];
        var y=(c[2][4]-w*c[2][0]-x*c[2][1])/c[2][2];
        var z=(c[3][4]-w*c[3][0]-x*c[3][1]-y*c[3][2])/c[3][3];
	    s+="<div class=container>"
        if (isFinite(x) && isFinite(y) && isFinite(z)){
            s+="<div class='alert alert-success'><strong>The roots are</strong>"
            s+="<br><div class='panel panel-primary'>"
            s+="<div class='panel-body'><i>w</i> = "+w+"<br><i>x</i> = "+x+"<br><i>y</i> = "+y
            s+="<br><i>z</i> = "+z
            s+="</div></div></div>"
        }
        else{
            s+="<br><div class='alert alert-danger'>"
            s+="<strong>Error!</strong> "
            s+="System has Infinitely or No solutions! "
            s+="</div>"
        }
        s+="</div></div>"
        document.getElementById("res").innerHTML=s;

    }
}

function quad(){
    var s= "";
	document.getElementById("eq").style.display="flex";
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
        var s="<div class=container>"
        s+="<div class='alert alert-success'>"
        var q=document.getElementsByName("q");
        var a=eval(q[0].value),b=eval(q[1].value),c=eval(q[2].value);
        var dis=b**2-4*a*c;
        if(isNaN(dis)){
            s+="<br><div class='alert alert-danger'>"
            s+="<strong>Error!</strong> "
            s+="Enter valid equation!"
            s+="</div>"
        }
        else{
            s+="<strong>The roots are</strong><br>"
            if(dis<0){
                dis=dis*(-1);
                dis=dis**0.5
                var r1=(-b)/(2*a),dis=dis/(2*a);
                s+="<i>x<sub>1</sub></i> = "+r1+" + "+dis+" <i>i</i><br>"
                s+="<i>x<sub>2</sub></i> = "+r1+" - "+dis+" <i>i</i>"
            }
            else if(dis>0){
                dis=dis**0.5
                var r1=(-b)/(2*a),dis=dis/(2*a),root1,root2;
                root1=r1+dis;
                root2=r1-dis;
                s+="<i>x<sub>1</sub></i> = "+root1+"<br>"
                s+="<i>x<sub>2</sub></i> = "+root2            
            }
            else{
                var r1=(-b)/(2*a);
                s+="<sub>x</sub> ="+r1;
            }
        }
        s+="</div></div>"
        document.getElementById("res").innerHTML=s

	}
}

function cubic(){
    var s= "";
    s+='<table>';
    s+='<tr>'
    s+='<td><input type="text" class="t" name="q"><i>x<sup>3</sup></i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="text" class="t" name="q"><i>x<sup>2</sup></i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="text" class="t" name="q"><i>x</i>&nbsp;&nbsp;+</td>';
    s+='<td><input type="text" class="t" name="q">= 0</td>';
    s+='</tr>'
    s+='</table>'
    document.getElementById("eq").innerHTML=s;
    var solve=document.getElementById("solve");
    solve.onclick = function() {
        var cu=document.getElementsByName("q");
        var a=eval(cu[0].value),b=eval(cu[1].value),c=eval(cu[2].value), d=eval(cu[3].value);
        var s="<div class=container>"
        s+="<div class='alert alert-success'><strong>The roots are</strong><br>"
        if(a==0 ||(isNaN(a))){
            var ele = document.getElementsByName('type'); 
            ele[2].checked=true
            quad()
        }
        else{
            var a1=b/a
            var a2=c/a
            var a3=d/a
            var Q=(3*a2-a1*a1)/9
            var R=(9*a1*a2-27*a3-2*a1*a1*a1)/54
            var D=Q*Q*Q+R*R
            var pi=Math.PI
            
            if(D>0){
                var S=Math.cbrt(R+Math.sqrt(D))
                var T=Math.cbrt(R-Math.sqrt(D))
                var x1=S+T-(1/3)*a1
                var x_real=-0.5*(S+T)-(1/3)*a1
                var x_img=0.5*Math.sqrt(3)*(S-T)
                s+="<i>x<sub>1</sub></i> = "+x1+"<br>"
                s+="<i>x<sub>2</sub></i> = "+x_real+" + "+x_img+" <i>i</i><br>"
                s+="<i>x<sub>3</sub></i> = "+x_real+" - "+x_img+" <i>i</i><br>"
            }
            else if(D==0){
                var S=Math.cbrt(R+Math.sqrt(D))
                var T=Math.cbrt(R-Math.sqrt(D))
                var x1=S+T-(1/3)*a1
                var x_real=-0.5*(S+T)-(1/3)*a1
                s+="<i>x<sub>1</sub></i> = "+x1+"<br>"
                s+="<i>x<sub>2</sub></i> = "+x_real+"<br>"
                s+="<i>x<sub>3</sub></i> = "+x_real+"<br>"
            }
            else{
                var r=Math.sqrt(-Q*Q*Q)
                alert("Q=  "+Q+"        R=  "+R)
                alert("r:_---"+r)
                var cb_r=Math.cbrt(r)
                alert("cb_rt     "+cb_r)
                alert("R   "+R)
                var a
                if(R==0){
                     a=pi/2
                }
                else{
                    alert("atan:  "+Math.sqrt(-D)/R)
                    a=Math.atan(Math.sqrt(-D)/R)
                    alert("A:     "+a)
                }
                x1=cb_r*(Math.cos(a/3)+Math.cos((6*pi-a)/3))-a1/3
                x2=cb_r*(Math.cos((2*pi+a)/3)+Math.cos((4*pi-a)/3))-a1/3
                x3=cb_r*(Math.cos((2*pi-a)/3)+Math.cos((4*pi+a)/3))-a1/3
                s+="<i>x<sub>1</sub></i> = "+x1+"<br>"
                s+="<i>x<sub>2</sub></i> = "+x2+"<br>"
                s+="<i>x<sub>3</sub></i> = "+x3+"<br>"
            }
            s+="</div></div>"
            document.getElementById("res").innerHTML=s
        }
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
            else if(ele[i].value=='four'){
                four();
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
