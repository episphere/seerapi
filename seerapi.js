console.log('seerapi.js loaded')

seerapi={
    ini:Date(),
    url:'https://api.seer.cancer.gov/rest/staging/cs/02.05.50/schemas'
}

seerapi.checkKey=async(key=seerapi.key)=>{ // check api key
    let h = 'something went wrong, please submit an issue'
    try{
        seerapi.schemas = await seerapi.getJSON(undefined,key)
        h=`<p style="color:green">SEER API key checked, ${seerapi.schemas.length} data schemas found.<br><span style="font-size:small">${Date()}</span></p>`
    }catch(err){
        h=`<p style="color:red">SEER API key not found or not valid: ${err.message}.<br><span style="font-size:small">${Date()}</span></p>`
        //debugger
    }
    
    if(document.getElementById('seerAPIdiv')){
        seerapi.div=document.getElementById('seerAPIdiv')
        seerapi.div.innerHTML=h
    }
    //debugger
    return seerapi.schemas
    // see https://api.seer.cancer.gov/usage for documentation

}

seerapi.deleteKey=async(key=seerapi.key)=>{ // check api key
    let h = `<p style="color:red">SEER API key removed.<br><span style="font-size:small">${Date()}</span></p>`
    localStorage.removeItem('seerAPIkey')
    seerapi.key=undefined
    if(document.getElementById('seerAPIdiv')){
        seerapi.div=document.getElementById('seerAPIdiv')
        seerapi.div.innerHTML=h
    }
    return h
    // see https://api.seer.cancer.gov/usage for documentation
}

seerapi.getJSON=async(url=seerapi.url,key=seerapi.key)=>{
    return (await fetch(url,{
        headers:{
           "X-SEERAPI-Key": key
        }
    })).json()
    //
}

if(typeof(define)!='undefined'){
    define(seerapi)
}

// in case there is a web context

seerapi.keyInput=document.getElementById("seerAPIkey")
if(seerapi.keyInput){
    if(localStorage.seerAPIkey){
        seerapi.keyInput.value=seerapi.key=localStorage.seerAPIkey
    }
    seerapi.keyInput.onkeyup=ev=>{
        changeKey.innerText='(Enter to save)'
        changeKey.style.fontSize='small'
        if(ev.keyCode==13){
            console.log(`new seer key logged at ${Date()}`)
            localStorage.seerAPIkey=seerapi.key=seerapi.keyInput.value
            changeKey.innerHTML='&#x2714;'
            changeKey.style.fontSize='medium'
        }
        //debugger &#x2714;
    }
}