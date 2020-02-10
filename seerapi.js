console.log('seerapi.js loaded')

seerapi={ini:Date()}

if(typeof(define)!='undefined'){
    define(seerapi)
}

// in case there is a web context

seerapi.keyInput=document.getElementById("seerAPIkey")
if(seerapi.keyInput){
    if(localStorage.seerAPIkey){
        seerapi.keyInput.value=localStorage.seerAPIkey
    }
    seerapi.keyInput.onkeyup=ev=>{
        readCheck='<span style:"font-size:x-small">(then press Enter to save)</span>'
        if(ev.keyCode==13){
            console.log(`new seer key logged at ${Date()}`)
            localStorage.seerAPIkey=seerapi.keyInput.value
        }
        //debugger &#x2714;
    }
}