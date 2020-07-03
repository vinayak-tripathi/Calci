function insert(num){
    form.display.value=form.display.value+num
}
function c(){
    form.display.value=""
}
function equal(){
    var inp=form.display.value
    if(inp!=""){
    form.display.value=eval(inp)}
}
function back(){
    var inp=form.display.value
    form.display.value=inp.substring(0,inp.length-1)
}