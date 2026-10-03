                ///Feature 1///
function totalHours(hours,minutes){
    return hours+minutes/60
}
const timeForm=document.getElementById("time-form")
const distanceInput=document.getElementById("distance")
const speedInput=document.getElementById("speed")
const result=document.getElementById("result")


timeForm.addEventListener("submit",function(reset){
    reset.preventDefault()
    if(Number(speedInput.value)<=0){
        result.textContent="Not possible"
    }
    else{
    let time=Number(distanceInput.value)/Number(speedInput.value)
    console.log(time)
    let hours=Math.floor(time)
    let leftover=time-hours
    let minutes=Math.round(leftover*60)
    if (minutes===60){
        hours+=1
        minutes=0
    }
    result.textContent=" Estimated time: " + hours + " hours "+minutes+" minutes ";
}})

       ///Feature2///
       
const speedForm=document.getElementById("speed-form")
const speedDistanceInput=document.getElementById("speed-distance")
const speedHoursInput=document.getElementById("speed-hours")
const speedMinutesInput=document.getElementById("speed-minutes")
const result2=document.getElementById("speed-result")

speedForm.addEventListener("submit",function(event){
    event.preventDefault()
    const totalTime=totalHours(Number(speedHoursInput.value),Number(speedMinutesInput.value))
    if(totalTime<=0){
        result2.textContent="Try again"
    }
    else{const speed=Number(speedDistanceInput.value)/totalTime
   result2.textContent = "Speed: " + speed.toFixed(1) + " knots";
}})
                     ///Feature 3///     
     const distanceForm=document.getElementById("distance-form")
     const distanceSpeedInput=document.getElementById("distance-speed")
     const distanceHoursInput=document.getElementById("distance-hours")
     const distanceMinutesInput=document.getElementById("distance-minutes")
     const distanceResult=document.getElementById("distance-result")

     distanceForm.addEventListener("submit",function(event){
        event.preventDefault()
    const totalTime=totalHours(Number(distanceHoursInput.value),Number(distanceMinutesInput.value))
    if(totalTime<=0){
        distanceResult.textContent="Try again"
    }
    else{
    const distance=totalTime*Number(distanceSpeedInput.value)
    distanceResult.textContent = "Distance: " + distance.toFixed(1) + " NM";
     }})
