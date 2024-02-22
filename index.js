//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//const copyOfDrivers = drivers.slice(0, 2);

/*const returnFirstTwoDrivers(function() {
    return copyOfDrivers
})*/

//declare variable returnFirstTwoDrivers with const
//assign anonymous function to it
//function should take one argument: an array containing the names of Scuber's drivers
//should return a new array containing the first two drivers in array
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
        return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
        return drivers.slice(-2)
        //-2 with .slice() returns the last two elements of an array. did this instead of doing .slice(2,4) in case more drivers are added
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
        return function(fare) {
        return fare * multiplier
        }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    if(func === returnFirstTwoDrivers) {
        return func(drivers)
    }
    else {
        return returnLastTwoDrivers(drivers)
    }
}