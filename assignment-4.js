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




// testing section statrs here 

console.log(anaToVori(-55));
console.log(anaToVori(0));
console.log(anaToVori(160));
console.log(anaToVori());
console.log(anaToVori('jamalUddin'));

console.log(pandaCost("kala masud", 0, 1));
console.log(pandaCost(1, 0, 0));
console.log(pandaCost(0, 1, 0));
console.log(pandaCost(0, 0, 1));
console.log(pandaCost(1, 1, 1));
console.log(pandaCost(2, 2, 2));
console.log(pandaCost(10, 150, 1222));
console.log(pandaCost(0, 1));
console.log(pandaCost());


a = [ 2, 2,25, 3];

console.log(picnicBudget(a));
console.log(picnicBudget());
console.log(picnicBudget("kola"));
console.log(picnicBudget(0));
console.log(picnicBudget(10));
console.log(picnicBudget(100));
console.log(picnicBudget(101));
console.log(picnicBudget(200));
console.log(picnicBudget(201));
console.log(picnicBudget(233));


a = ['jodu', 'modu', 'kodu', 'lodu'];
b = ['jodu', 'mou', 'kodu', 'lodu'];
c = ['mou', 'kodu', 'lodu', 1, 'kou'];
d = [1, 'mou', 'kodu', 'lodu'];
e= [1,3,4,5,66,7];
f= [];
console.log(oddFriend(a));
console.log(oddFriend(b));
console.log(oddFriend(c));
console.log(oddFriend(d));
console.log(oddFriend(e));
console.log(oddFriend(f));