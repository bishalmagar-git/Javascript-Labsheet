
//Imagine you have a clock, and you want to know what time it shows. 
//GetTime is like looking at the clock and reading the time it displays.

const curDate = new Date(); // Current time
const millisecondsSince1970 = curDate.getTime(); // Getting the time in milliseconds

    //Imagine you have a clock, and you want to change the time it shows. 
    //setTime is like turning the hands of the clock to the desired time.
    
    const currentDate = new Date(); // Current time
    const threeHoursLater = currentDate.getTime() + (3 * 60 * 60 * 1000); // Adding 3 hours in milliseconds
    currentDate.setTime(threeHoursLater); // Setting the new time



//Imagine you have a clock that shows the local time in your area, but you want to know what time 
//it is in a timezone that doesn't have daylight saving time or any regional variations. 
//toUTCString is like converting the time on your clock to the time on a universal clock that everyone agrees on.

const currenDate = new Date(); // Current time
const utcString = currenDate.toUTCString(); // Getting the UTC string representation
