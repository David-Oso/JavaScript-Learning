let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount:326
}



let otherBook = {
    title: "A Peoples History",
    author: "Howard Zinn",
    pageCount:723
}


let getSummary = (book) =>{
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}
console.log(getSummary(myBook));
console.log(getSummary(otherBook)); 



let temperature = (fahrenheit) => {
    let celcius = (fahrenheit - 32) * 5 / 9;
    let kelvin = (fahrenheit + 459.67) * 5 / 9;
    return {
        fahrenheit :`${fahrenheit}F`,
        celcius: `Fahrenheit to celcius is ${celcius}C`,
        kelvin: `Fahrenheit to kelvin is ${kelvin}K`
    }
}

console.log(temperature(74));