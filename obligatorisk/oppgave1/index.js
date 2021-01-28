// Main isDateValid function
function isDateValid(date) {
    split(date) // spliting up string to get date.
    if(length(date) && dots(date) && yearCheck(date) && monthCheck(date) && dayCheck(date)) {
        return true 
    } else {
        return false
    } 
}
// Check if 10 characters
function length(date) {
    if(date.length == 10){ // If length equels 10 true else false
        return true
    } else {
        return false
    }
}
// Dots at position 3 and 6
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
function dots(date) {
    var dot = []
    for (const i in date) {
        if(date[i] == ".") dot.push(i)
    }                                  // position 3 and 6
    if( JSON.stringify(dot) == JSON.stringify(["2","5"])) { // if dot is position 3 and 6 true
        return true
    } else { // if dot not at position 3 and 6 false
        return false
    }
}
// Split the date 
function split(date) {
    var splitted = []
    splitted.push(date.slice(0,2)) // Get the number 0 to 2
    splitted.push(date.slice(3,5)) // Get the number 3 to 5
    splitted.push(date.slice(6))   // Get the number 6 and out to 9
    return splitted                // Return what is just cuted
}
// Checks if year is a valid year
function yearCheck(date) {
    var year = split(date)[2]
    if(year >= "0000" && year <= "9999") {
        return true
    } else {
        return false
    }
}
// Checks if month is a valid month
function monthCheck(date) {
    var month = split(date)[1]
    if(month >= 1 && month <= 12) {
        return true
    } else {
        return false
    }
}
// Checks if day is valid to month and year "01"."01"."1000"
function dayCheck(date) {
    var day = split(date)[0]      // First number in array / DAY 
    var month = split(date)[1]    // Second number in array / MONTH
    var year = split(date)[2]     // Third number in array / YEAR
        // Months with 31 days    // Months with 28 days // Months with 30 days
    const numberOfDays = { 31: [ 1,3,5,7,8,10,12], 28:[2], 30:[4,6,9,11]}
    if(month == 2 && (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) && (day >= 1 && day <= 29)) {
        return true
    }
    for (var i in numberOfDays) {
        if(numberOfDays[i].includes(parseInt(month)) && (parseInt(day) >= 0 && parseInt(day) <= i)) {
            return true
        }  
    }
    return false
}