let alarm ="";
let day ="saturday";

const myAlarm = {
    weekendAlarm: "no alarm",
    weekdayAlarm: "Get up at 7am"
};


if (day== "saturday" || day =="sunday"){
    alarm = myAlarm.weekendAlarm;
    console.log(myAlarm.weekendAlarm);
    }
else {
    alarm = myAlarm.weekdayAlarm;
    console.log(myAlarm.weekdayAlarm);
}




