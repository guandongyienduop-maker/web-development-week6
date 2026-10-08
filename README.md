# SpendWise – JavaScript Foundation

## Project Overview

SpendWise is a personal budgeting application designed to help users keep track of their budget and expenses. In this project, I developed the JavaScript foundation of SpendWise so that the application can collect user information, store data, perform budget calculations, and display the results in the browser console.

The project builds on my existing SpendWise dashboard and adds JavaScript functionality to make the application more interactive and able to process budgeting data.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Git and GitHub

## JavaScript Concepts Implemented

This project demonstrates the following JavaScript concepts:

1. JavaScript setup and linking
2. Variables and data types
3. User input using `prompt()`
4. Arithmetic calculations
5. Reusable functions
6. Console output using `console.log()`

---

## 1. Set Up JavaScript

I created a JavaScript file called `script.js` and linked it to my `index.html` file using the `<script>` element.

```html
<script src="script.js"></script>
```

I also tested that the JavaScript file loads successfully by displaying a message in the browser console:

```javascript
console.log("SpendWise JavaScript loaded successfully!");
```

This confirms that my HTML page is correctly connected to my JavaScript file.

---

## 2. Store Application Data

I used JavaScript variables to store important budgeting and expense information.

For example:

```javascript
let budget = 2000;
let foodExpense = 420;
let transportExpense = 180;
let rentExpense = 1200;
let entertainmentExpense = 150;
```

The `let` keyword allows me to create variables whose values can be changed when needed.

The variables store numerical data representing the user's budget and different types of expenses.

I also used a variable to store the expense entered by the user:

```javascript
let expenseAmount = Number(prompt("Enter your expense amount:"));
```

---

## 3. Collect User Input

I used JavaScript's `prompt()` function to allow the user to enter budgeting information.

```javascript
let budget = Number(prompt("Enter your monthly budget:"));
let expenseAmount = Number(prompt("Enter your expense amount:"));
let expenseCategory = prompt("Enter your expense category:");
```

The user provides:

* Monthly budget
* Expense amount
* Expense category

I used `Number()` for the budget and expense amount because these values need to be used in mathematical calculations.

The expense category remains text because it is used as a description of the expense.

---

## 4. Perform Budget Calculations

SpendWise calculates the remaining balance by subtracting the expense from the user's budget.

The calculation is:

```text
Remaining Balance = Budget - Expense
```

For example:

```text
Budget = 2000
Expense = 500
Remaining Balance = 1500
```

The calculation is performed using JavaScript:

```javascript
let remainingBalance = calculateRemainingBalance(budget, expenseAmount);
```

This allows SpendWise to determine how much money remains after an expense has been recorded.

---

## 5. Create Reusable Functions

I created a reusable function called `calculateRemainingBalance()` to organize the budget calculation.

```javascript
function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}
```

I then call the function using:

```javascript
let remainingBalance = calculateRemainingBalance(budget, expenseAmount);
```

The function accepts the budget and expense as parameters and returns the remaining balance.

Using a function makes the code easier to organize and reuse. For example:

```javascript
calculateRemainingBalance(5000, 1200);
```

returns:

```text
3800
```

This shows that the same function can be used with different budget and expense values.

---

## 6. Display Results

I used `console.log()` to display the results clearly in the browser console.

```javascript
console.log("===== SpendWise Budget Summary =====");
console.log("Budget:", budget);
console.log("Expense Amount:", expenseAmount);
console.log("Expense Category:", expenseCategory);
console.log("Remaining Balance:", remainingBalance);
```

The output is clearly labeled so that the user can easily understand each value.

Example output:

```text
SpendWise JavaScript loaded successfully!
===== SpendWise Budget Summary =====
Budget: 2000
Expense Amount: 500
Expense Category: food
Remaining Balance: 1500
```

---

## Complete JavaScript Example

The main JavaScript functionality used in this project is:

```javascript
console.log("SpendWise JavaScript loaded successfully!");

let budget = Number(prompt("Enter your monthly budget:"));
let expenseAmount = Number(prompt("Enter your expense amount:"));
let expenseCategory = prompt("Enter your expense category:");

function calculateRemainingBalance(budget, expense) {
    return budget - expense;
}

let remainingBalance = calculateRemainingBalance(budget, expenseAmount);

console.log("===== SpendWise Budget Summary =====");
console.log("Budget:", budget);
console.log("Expense Amount:", expenseAmount);
console.log("Expense Category:", expenseCategory);
console.log("Remaining Balance:", remainingBalance);
```

## Testing

I tested the application in the web browser to make sure that:

* The JavaScript file loads successfully.
* The user can enter a budget.
* The user can enter an expense amount.
* The user can enter an expense category.
* The remaining balance is calculated correctly.
* The reusable calculation function works.
* The results appear clearly in the browser console.
* Different budget and expense values produce different remaining balances.

### Example Test

If the user enters:

```text
Budget: 3000
Expense: 750
Category: transport
```

The application calculates:

```text
Remaining Balance: 2250
```

because:

```text
3000 - 750 = 2250
```

## Project Files

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure and content of the SpendWise dashboard and links the JavaScript file.

### `style.css`

Contains the styling and visual design of the SpendWise dashboard.

### `script.js`

Contains the JavaScript variables, user input, calculations, reusable function, and console output.

### `README.md`

Documents the project and explains the JavaScript concepts implemented.

## Conclusion

This project helped me transform SpendWise from a mainly visual dashboard into an application that can process budgeting information using JavaScript. I applied variables to store data, `prompt()` to collect user input, arithmetic operations to calculate the remaining balance, functions to organize reusable logic, and `console.log()` to display clear results.

The JavaScript foundation provides a starting point for adding more advanced budgeting features to SpendWise in the future.
