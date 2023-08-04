function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

while (true) {
  let input = prompt("Enter a positive integer");
  let number = parseInt(input);

  if (number > 1 && Number.isInteger(number)) {
    let primes = [];
    for (let i = 2; i <= number; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    let listItems = primes.join(", ");
    alert("For n = " + number + ", Prime numbers are " + listItems);
    break;
  } else {
    alert("Invalid input. Please enter a positive integer.");
  }
}