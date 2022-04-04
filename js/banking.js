document.getElementById("deposit-button").addEventListener("click", function () {
    //get the deposited amount
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseInt(newDepositAmountText);
    //console.log(depositAmount);
    //update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseInt(previousDepositAmountText)
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalAmount = parseInt(balanceTotal.innerText);
    const balanceTotalValue = newDepositAmount + balanceTotalAmount;
    balanceTotal.innerText = balanceTotalValue;



    //clear input
    depositInput.value = "";
});

//handle withdraw event handler
document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const previousWithdraw = document.getElementById("withdraw-total");
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    previousWithdraw.innerText = totalWithdrawAmount;

    //update balance
    const totalBalance = document.getElementById("balance-total");
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    const balance = totalBalanceAmount - newWithdrawAmount;
    totalBalance.innerText = balance;

    //clear input
    withdrawInput.value = "";
})