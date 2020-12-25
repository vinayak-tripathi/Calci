var r=document.getElementById("r1").value;
var c=document.getElementById("c1").value;
var edit=0
function getInputValue(){
    var inputVal = document.getElementById("c1").value;
    document.getElementById("r2").value=inputVal;
}
function create() {
    var s= "";
    var r=document.getElementById("r1").value;
    var c=document.getElementById("c1").value
    document.getElementById("mat1").style.display="inline-block";
    s+='<h1 align="center">Matrix1</h1><table>';
    for(var i = 0; i < r; i++){
        s+='<tr>'
        for (var j=0;j<c;j++){
        s+='<td><input type="text" class="t" id="one'+i+j+'"></td>';
        }
        s+='</tr>'

    }
    document.getElementById("mat2").style.display="inline-block";
    s+='</table>'
    document.getElementById("mat1").innerHTML=s;
    var s= "";
    var r=document.getElementById("r2").value;
    var c=document.getElementById("c2").value
    s+='<h1 align="center">Matrix2</h1><table>';
    for(var i = 0; i < r; i++){
        s+='<tr>'
        for (var j=0;j<c;j++){
        s+='<td><input type="text" class="t" id="two'+i+j+'"></td>';
        }
        s+='</tr>'

    }
    s+='</table>'
    document.getElementById("mat2").innerHTML=s;
}
function wr(v){
    var r1=document.getElementById("r1").value;
    var c1=document.getElementById("c1").value;
    var mat1=[],mat2=[],mul=[]
    for(var i = 0; i < r1; i++){
        var a=[]
        for (var j=0;j<c1;j++){
        var na="one"+i+j+""
        var s=document.getElementById(na).value;
        a.push(parseFloat(s))//here
    }
    mat1.push(a)                
    }
    var r2=document.getElementById("r2").value;
    var c2=document.getElementById("c2").value;
    for(var i = 0; i < r2; i++){
        var a=[]
        for (var j=0;j<c2;j++){
        var na="two"+i+j+""
        var s=document.getElementById(na).value;
        a.push(parseFloat(s))//here also
    }
    mat2.push(a)                
    }
    var t='<table class=ans>'
        for(var i = 0; i < r1; i++){
            t+='<tr>'
            for (var j=0;j<c1;j++){
                t+='<td>'+mat1[i][j]+'</td>'  }
                t+='</tr>'
            }  
            t+='</table>' 
    document.getElementById("o-mat1").innerHTML=t
    var t='<table class=ans>'
        for(var i = 0; i < r2; i++){
            t+='<tr>'
            for (var j=0;j<c2;j++){
                t+='<td>'+mat2[i][j]+'</td>'  
            }
            t+='</tr>'
        }  
    t+='</table>' 
    document.getElementById("o-mat2").innerHTML=t
    document.getElementById("eq").innerHTML='='
    if(v=="m"){
        document.getElementById("op").innerHTML='x'
        if(r2==c1){
            for(var i=0;i<r1;i++){
                var a=[]
                for(var j=0;j<c2;j++){
                    var c=0;
                    for(var k=0;k<c1;k++){
                        c+=mat1[i][k]*mat2[k][j];
                    }
                    a.push(c)
                }
                mul.push(a)
            }
            var t='<table class=ans>'
                for(var i = 0; i < r1; i++){
                t+='<tr>'
                for (var j=0;j<c2;j++){
                    t+='<td>'+mul[i][j]+'</td>'  }
                    t+='</tr>'
            }  
            t+='</table>' 
            document.getElementById("res").innerHTML=t
        
        }
        else{
            document.getElementById("res").innerHTML="<b><i>The matrices cannot be Multiplied</i></b>"
            
        }	
    }
    else if(v=="a"){
        document.getElementById("op").innerHTML='+'
        if((r1==r2)&&(c1==c2)){
            for(var i=0;i<r1;i++){
                a=[]
                for(var j=0;j<c2;j++){
                    s=mat1[i][j]+mat2[i][j]
                    a.push(s)
                    }
                    mul.push(a)
            }
                var t='<table class=ans>'
                for(var i = 0; i < r1; i++){
                t+='<tr>'
                for (var j=0;j<c2;j++){
                    t+='<td>'+mul[i][j]+'</td>'  }
                    t+='</tr>'
            }  
            t+='</table>' 
            document.getElementById("res").innerHTML=t
        
        }
        else{
            document.getElementById("res").innerHTML="<p style='padding:20px;'><b><i>The matrices cannot be Added</i></b>";	
        }	
    }
    else if(v=="s"){
        document.getElementById("op").innerHTML='-'
        if((r1==r2)&&(c1==c2)){
            for(var i=0;i<r1;i++){
                a=[]
                for(var j=0;j<c2;j++){
                    s=mat1[i][j]-mat2[i][j]
                    a.push(s)
                    }
                    mul.push(a)
            }
                var t='<table class=ans>'
                for(var i = 0; i < r1; i++){
                t+='<tr>'
                for (var j=0;j<c2;j++){
                    t+='<td>'+mul[i][j]+'</td>'  }
                    t+='</tr>'
            }  
            t+='</table>' 
            document.getElementById("res").innerHTML=t
        
        }
        else{
            document.getElementById("res").innerHTML="<p style='padding:20px;'><b><i>The matrices cannot be Subtracted</i></b>";	
        }	
    }

    else if(v=="sm"){
        document.getElementById("op").innerHTML='-'
        if((r1==r2)&&(c1==c2)){
            for(var i=0;i<r1;i++){
                a=[]
                for(var j=0;j<c2;j++){
                    s=mat1[i][j]-mat2[i][j]
                    a.push(s)
                    }
                    mul.push(a)
            }
                var t='<table class=ans>'
                for(var i = 0; i < r1; i++){
                t+='<tr>'
                for (var j=0;j<c2;j++){
                    t+='<td>'+mul[i][j]+'</td>'  }
                    t+='</tr>'
            }  
            t+='</table>' 
            document.getElementById("res").innerHTML=t
        
        }
        else{
            document.getElementById("res").innerHTML="<p style='padding:20px;'><b><i>The matrices cannot be Subtracted</i></b>";	
        }	
    }
}
