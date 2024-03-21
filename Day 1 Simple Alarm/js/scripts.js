const currentTime = document.querySelector("h1"),
content = document.querySelector("content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

for (let i = 12; i > 0; i--) {
    i = i<10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
    
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
    
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}

setInterval(() =>{
    // getting hour, mins, secs
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

    if(h >= 12){
        h = h - 12;
        ampm =   "PM";
    }

    // if hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h;

    // adding 0 before hr, min, sec if this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // displaying time on the website
    currentTime.innerText = (`${h}: ${m}: ${s} ${ampm}`);
}, 1000);

function setAlarm() {
    let time = `${selectMenu[0].value}:${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert( "Please, Select a valid time to set Alarm!");
    }
    console.log(time);
}


setAlarmBtn.addEventListener("click", setAlarm);

// // function for setting alarm
// function setAlarm(){
//     const hours = parseInt(document.querySelector("#alarm-hour").value);
//     const minutes = parseInt(document.querySelector("#alarm-minute").value);
//     const meridiem = document.querySelector("#meridiem").value;
//     let alarmTime = hours; 

//     if(meridiem === "PM"){
//        alarmTime = alarmTime + 12;
//     }
    
//     // checking whether user has entered valid input or not
//     if (isNaN(alarmTime) || isNaN(minutes)){
//         alert("Please enter a valid number");
//     }else {
//          // converting time into milliseconds and adding it with current time
//         var alarmytime = new Date().getTime() + (alarmTime*60*60*1000) + (minutes * 60 * 1000);
//         // creating an alarm object
//         var alarmObject = {};
//         alarmObject.time = alarmytime;
//         alarmObject.status = false;
//         // pushing alarm into array
//         AlarmArray.push(alarmObject);
//         // showing success message
//         document.getElementById("success").style.display="block";
//         setTimeout(() => {
//             document.getElementById("success").style.display = "none";
//         },3000);
//     }
// }

// // function to stop/start alarm sound
// function playSound(){
//    const audio = document.getElementById("audio");
//    if(audio.paused){
//       audio.play();
//       this.textContent = 'Stop';
//    } else {
//       audio.pause();
//       this.textContent = 'Start';
//    }
// }

// // setting interval for checking the time and playing the alarm sound if required
// setInterval(function () {
//    var d = new Date();
//    var n = d.toLocaleString();
//    // iterating through each element of Alarm Array
//    for (var i=0;i<AlarmArray.length;i++){
//        // comparing current time with alarm time, if it's less then displaying on screen otherwise removing from array
//        // If alarm time is less than current time and status is false then set the status as true and play the sound
//        // If alarm time is less than current time and status is false, then set the status as true and play the sound
//        // If alarm is active and current time is greater than or equal to set alarm time then
//        if ((AlarmArray[i].status == true) && (d.getTime() >= AlarmArray[i].time)) {
//            playSound.call(document.getElementById('sound'));
//            AlarmArray[i].status = false;
//        }
//    }
// }, 1000);

