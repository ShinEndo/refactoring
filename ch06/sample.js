function printOwing(invoice) {
  printBanner();

  // calculate outstanding
  const outstanding = calculateOutstanding(invoice);

  // record due date
  recordDueDate(invoice);

  // print details
  printDetails(invoice, outstanding);

  function printBanner() {
    console.log("********************");
    console.log("*** Custmer Owes ***");
    console.log("********************");
  }
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}
