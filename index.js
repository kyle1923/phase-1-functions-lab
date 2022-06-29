// Code your solution in this file!
function distanceFromHqInBlocks(somevalue) {
    if (somevalue > 42) {
        return somevalue - 42;
    }
    else if (somevalue < 42); {
        return 42 - somevalue;
    }

}

function distanceFromHqInFeet(location) {
    if (location > 42) {
        return (location - 42) * 264;
    }
    else if (location < 42) {
        return (42 - location) * 264;
    }

}

function distanceTravelledInFeet(somevalue, location) {
    if (somevalue > location) {
        return (somevalue - location) * 264;
    }
    if  (location > somevalue)
    return (location - somevalue) * 264;

}

function calculatesFarePrice(somevalue, location) {
    const distance = distanceTravelledInFeet(somevalue, location)
    if (distance < 400) 
        return 0
    
    if (distance < 2000) 
        return ((distance - 400) * (.02))
    
    if (distance < 2500) 
        return 25

    if (distance > 2500) 
        return 'cannot travel that far'
    
    }