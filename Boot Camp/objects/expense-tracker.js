let myAccount = {
    name: "Baba' n la",
    expenses: 0,
    income: 0
}

let addExpense = (account, amount) => {
   account.expenses += amount;
}

let addIncome = (account, income) =>{
    account.income += income;
}

let resetAccount = (account) => {
    account.income = 0,
    account.expenses = 0;
}

let getAccountSummary = (account) => {
    let balance = account.income - account.expenses;
    return {
        summary: `Account for ${account.name} has $${balance}, $${account.income} in income, $${account.expenses} in expenses`
    }
}

addIncome(myAccount, 5000);

addExpense(myAccount, 2000);

addIncome(myAccount, 200);

console.log(getAccountSummary(myAccount));

resetAccount(myAccount);

console.log(getAccountSummary(myAccount));