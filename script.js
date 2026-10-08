// SpendWise Week 6
// Steps 1 to 6


// Step 1: Set the budget
let budget = 5000;


// Step 2: Store multiple expenses in an array
let expenses = [500, 300, 200];


// Step 3: Function to calculate total expenses
function calculateTotalExpenses() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total = total + expenses[i];
    }

    return total;
}


// Step 4: Function to update the dashboard
function updateDashboard() {

    let totalExpenses = calculateTotalExpenses();
    let remaining = budget - totalExpenses;

    // Update budget
    document.getElementById("budgetAmount").textContent = "$" + budget;

    // Update total expenses
    document.getElementById("expenseAmount").textContent = "$" + totalExpenses;

    // Update remaining balance
    document.getElementById("remainingAmount").textContent = "$" + remaining;

    // Update budget message
    let budgetMessage = document.getElementById("budgetMessage");

    if (remaining > 0) {
        budgetMessage.textContent = "You are within your budget.";
    } else if (remaining === 0) {
        budgetMessage.textContent = "You have used your full budget.";
    } else {
        budgetMessage.textContent = "Warning: You are over your budget.";
    }

    // Display results in console
    console.log("Budget:", budget);
    console.log("Total Expenses:", totalExpenses);
    console.log("Remaining Balance:", remaining);
}


// Step 5: Add expense when user clicks the button
let addExpenseButton = document.getElementById("addExpenseButton");

addExpenseButton.addEventListener("click", function() {

    let expenseInput = document.getElementById("expenseInput");

    let newExpense = Number(expenseInput.value);

    if (newExpense > 0) {

        expenses.push(newExpense);

        expenseInput.value = "";

        updateDashboard();

        console.log("New expense added:", newExpense);

    } else {

        document.getElementById("budgetMessage").textContent =
            "Please enter a valid expense.";

    }

});


// Step 5: Check budget when user clicks the button
let checkBudgetButton = document.getElementById("checkBudgetButton");

checkBudgetButton.addEventListener("click", function() {

    let totalExpenses = calculateTotalExpenses();
    let remaining = budget - totalExpenses;

    let budgetMessage = document.getElementById("budgetMessage");

    if (remaining > 0) {
        budgetMessage.textContent =
            "Good job! You are within your budget.";
    } else if (remaining === 0) {
        budgetMessage.textContent =
            "You have used your full budget.";
    } else {
        budgetMessage.textContent =
            "Warning: You are over your budget.";
    }

});


// Step 6: Connect everything together
updateDashboard();