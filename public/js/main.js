const time =document.querySelector("#date")
console.log("hello");

function date(){
    
    const date = new Date()
      
    const Days =["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const Months=["JAN","FEB","MAR","APR","MAY","JUN","AUG","SEP","OCT","NOV","DEC"]
    
    const time1=date.toLocaleTimeString().slice(0, 4);
    const time2=date.toLocaleTimeString().slice(-2);

    const month= date.getMonth()
    const day=date.getDay()
    const dateNumber=date.getDate()

    time.innerText=`${Days[day]} | ${Months[month-1]} ${dateNumber} | ${time1} ${time2}`

    // console.log(date.toLocaleTimeString());
    // console.log(time1);
    // console.log(time2);
    // console.log(`${Days[day]} | ${Months[month-1]} ${dateNumber} | ${time1+time2}`);
}

date();
// setInterval(()=>{
//     date();
// },1000)