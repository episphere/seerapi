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
        changeKey.innerText='(Enter to save)'
        changeKey.style.fontSize='small'
        if(ev.keyCode==13){
            console.log(`new seer key logged at ${Date()}`)
            localStorage.seerAPIkey=seerapi.keyInput.value
            changeKey.innerHTML='&#x2714;'
            changeKey.style.fontSize='medium'
        }
        //debugger &#x2714;
    }
}