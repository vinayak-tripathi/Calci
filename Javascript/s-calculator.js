function insert(num){
    form.display.value=form.display.value+num
    form.hide.value=form.hide.value+num
}
function c(){
    form.display.value=""
    form.hide.value=""
}
function back(){
    var size = form.hide.value.length,i;
    var inp=form.display.value
    var inp_hid=form.hide.value
    for (i =size-1;i>=0;i--){
        if((inp_hid[i-1]=='M')||(inp_hid[i]=='f')||(inp_hid[i-1]=='(')||(inp_hid[i]==')')){
            form.hide.value=inp_hid.substring(0,i)
            break
        }
    }

    form.display.value=inp.substring(0,inp.length-1)
    form.hide.value=form.hide.value.substring(0,size-1)
}
function pi(){
    form.display.value+="π"
    form.hide.value+="Math.PI" 
}
function e(){
    form.display.value+="e"
    form.hide.value+="Math.E" 
}
function sqrt(){
    form.display.value+="√("
    form.hide.value+="Math.sqrt("
}
function cubrt(){
    form.display.value+="∛("
    form.hide.value+="Math.cbrt("
}
function sq(){
    form.display.value+="²" 
    var num=form.hide.value
    var size = form.hide.value.length,i;
    for(i=size-1;i>=0;i--){
        if ((num[i]=='+')||(num[i]=='*')||(num[i]=='(')||(num[i]=='-')||(num[i]=='/')){
            x=num.substring(i+1,size)
            form.hide.value=num.substring(0,i+1)
            break
        }
    }
    form.hide.value+="Math.pow("+x+",2)"
}
function cu(){
    form.display.value+="³" 
    var num=form.hide.value
    var size = form.hide.value.length,i;
    for(i=size-1;i>=0;i--){
        if ((num[i]=='+')||(num[i]=='*')||(num[i]=='(')||(num[i]=='-')||(num[i]=='/')||(i==0)){
            x=num.substring(i+1,size)
            form.hide.value=num.substring(0,i+1)
            break
        }
    }
    form.hide.value+="Math.pow("+x+",3)"
}
function equal(){
    var inp=form.hide.value
    if(inp!=""){
        form.display.value=eval(inp)
        form.hide.value=eval(inp)

    }
}

/*
√	∛	xy
x²	x³	ex
sin	sin-1	ln()
cos	cos-1	log()
π	tan	tan-1	( )
Deg	Rad	e	x!
*/