/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

const time = '07:05:45PM'

function timeConversion(str){
    const timeArr = str.split(':')
    const newTime = []
  
    const seconds = timeArr[2].slice(0,2)
    const minutes = timeArr[1]
    
    
    let hour = ''
        if(str.includes('AM')){
            if(timeArr[0] == '12'){
                hour = '00'               
            } else {
                hour = timeArr[0]               
            }
        }
        if(str.includes('PM')){
            if(timeArr[0] == '12'){
                hour = '12'                
            } else {
                hour = String((Number(timeArr[0])) + 12)           
            }
        }
        console.log(hour)
        newTime.push(hour)
        newTime.push(minutes)
        newTime.push(seconds)

        return newTime.join(':')

}

console.log(timeConversion(time))