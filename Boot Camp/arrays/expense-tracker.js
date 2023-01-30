const account = {
    name: "Andrew Mead",
    expense: [],
    income: [],
    addExpense: function(description, amount){
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;

        this.expense.forEach(function(expense){
            totalExpenses += expense.amount;
        })

        this.income.forEach(function(income){
            totalIncome += income.amount;
        })

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${accountBalance}, $${totalIncome} in income, $${totalExpenses} in expenses`;
    }
}

account.addExpense("Rant", 950);
account.addExpense("coffee", 2);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());