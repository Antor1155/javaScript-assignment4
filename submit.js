// problem 1: ana to vori 
function anaToVori(ana){
    let oneVoriToAna = 16;
    if ( ana < 0 || typeof(ana) != 'number'){
        const errorMessage = "error: please enter a positive number, negative number and other type than number not accepted";
        return errorMessage;
    }
    else{
        const totalVori = ana / oneVoriToAna
        return totalVori;
    }
}

// problem 2: panda cost 
function pandaCost(singara, somucha, jilapi){
    const oneSingaraPrice = 7;
    const oneSomuchaPrice = 10;
    const oneJilapiPrice = 15;
    if (singara < 0 || somucha < 0 || jilapi < 0 || typeof(singara) != 'number' || typeof(somucha) != 'number' ||typeof(jilapi) != 'number'){
        const errorMessage = "error: please enter a positive number, negative number and other type than number not accepted";
        return errorMessage;
    }
    else{
        const totalSingaraPrice = singara * oneSingaraPrice;
        const totalSomuchaPrice = somucha * oneSomuchaPrice;
        const totalJilapiPrice = jilapi * oneJilapiPrice;
        const totalPrice = totalSingaraPrice + totalSomuchaPrice+ totalJilapiPrice;

        return totalPrice;
    }

}

// problem 3: picnic budget
function picnicBudget(numOfPeople){
    const first100PricePerPerson = 5000;
    const second100PricePerPerson = 4000;
    const moreThan200PricePerPerson = 3000;

    let totalPrice = null;

    if ( numOfPeople < 0 || typeof(numOfPeople) != 'number'){
        const errorMessage = "error: number of people can't be negative and can't input any other type than number. please enter number of people !!";
        return errorMessage;
    }
    else if( numOfPeople <= 100){
        totalPrice = first100PricePerPerson * numOfPeople;
    }
    else if( numOfPeople <= 200){
        let firstHundredTotalPrice = first100PricePerPerson * 100;
        let secondHundredTotalPrice = (numOfPeople - 100) * second100PricePerPerson;
        totalPrice = firstHundredTotalPrice + secondHundredTotalPrice;
    }
    else{
        let firstHundredTotalPrice = first100PricePerPerson * 100;
        let secondHundredTotalPrice =second100PricePerPerson * 100;
        let restTotalPrice = moreThan200PricePerPerson * (numOfPeople - 200);
        totalPrice = firstHundredTotalPrice + secondHundredTotalPrice + restTotalPrice;
    }
    return totalPrice;

}

// problem 4: finding odd friend name
function oddFriend(arrayOfNames){
    let firstOddName = null;
    for(let name of arrayOfNames){
        if(typeof name == 'string' && name.length % 2 != 0){
            firstOddName = name;
            break;
        }
    }
    if (firstOddName == null){
        return "error: no odd friend name present in the array";
    }
    return firstOddName;
}


