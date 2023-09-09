let a=[ 
        "Initializing Hack tool..",
        "Connecting to facebook...",
        "Connecting to server 1..",
        "Connecting failed.Retrying...",
        "Connecting to server 2...",
        "Connected successfully..",
        "Username iamaayushma..",
        "Trying Brute Force..",
        "200k passwords tried..",
        "Match not found..",

        " Another 200k passwords tried..",
        "Match found..",
        "Accessing Account...",
        "Hack successful.."

]
 
const sleep =(seconds)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ resolve(true)},seconds*1000)
}) 
}
const showhack=async(message)=>{
    await sleep(2)
    console.log(message)
   // document.getElementById("text").innerHTML += message + "<br>";
}
    


(async()=> {
    for( let i=0;i<a.length;i++){
        await showhack(a[i])
    }
})()