document.getElementById('calculate').addEventListener('click', function () {
    const foodCost = getInputFieldValue('food');
    const rentCost = getInputFieldValue('rent');
    const clothesCost = getInputFieldValue('clothes');

    const totalCost = foodCost + rentCost + clothesCost;
    const totalExpensesElement = document.getElementById('expenses');
    totalExpensesElement.innerText = totalCost;

    const incomeValue = getInputFieldValue('income');
    if(incomeValue !== typeof(Number)) {
        alert('wrong input')
    }
    else {
        
    }
    const remainingBalance = incomeValue - totalCost;

    const balanceInnerText = document.getElementById('balance');
    balanceInnerText.innerText = remainingBalance;
});

document.getElementById('save').addEventListener('click', function () {
    const incomeValue = getInputFieldValue('income');
    const saveField = document.getElementById('save-field').value;
    const amount = incomeValue * (saveField / 100);
    const savingAmountText = document.getElementById('saving-amount');
    savingAmountText.innerText = amount;

    const balanceInnerText = getInnerTextValue('balance');
    const savingAmount = getInnerTextValue('saving-amount');
    const remainingBalance = balanceInnerText - savingAmount;
    const remainingBalanceText = document.getElementById('remaining-balance');
    remainingBalanceText.innerText = remainingBalance;
});