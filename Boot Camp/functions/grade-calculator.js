let gradeCalc = (studentScore, totalScore = 20) => {
    
    let name = undefined;
    let percent = studentScore / totalScore * 100;

    if(percent >= 90 && percent <= 100){
        return `You got an A (${percent}%)`;
    } 
    else if (percent >= 80 && percent <= 89){
        return `You got a B (${percent}%)`;
    }
    else if(percent >= 70 && percent <= 79){
        return `You got a C (${percent}%)`;
    }
    else if(percent >= 60 && percent <= 69) {
        return  `You got a D (${percent}%)`
    }
    else if(percent >= 0 && percent <=59) {
        return `You got a F (${percent}%)`
    }
    return percent;
}

let tip = gradeCalc(5);
console.log(tip);