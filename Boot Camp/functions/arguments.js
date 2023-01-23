let add = function(a, b, c){
    return a + b + c;
}
let result = add(10, 1, 5);
console.log(result);

//default arguments
let getScoreTest = function(name = 'Anonymous', score = 0){
    return 'Name: '+name + '\nScore: '+score
}

let scoreTest =  getScoreTest(undefined, 99);
console.log(scoreTest);

let getTip = function(total,tipsPercent = .2){ 
    return total * tipsPercent
}

let tip = getTip(40, .25);
console.log(tip);