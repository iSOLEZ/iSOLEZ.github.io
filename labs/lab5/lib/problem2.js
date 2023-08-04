function readInput() {
  const numbersList = [];

  while (true) {
    const input = prompt("Enter an integer (a negative integer to quit):");
    const inputInt = parseInt(input);

    if (Number.isNaN(inputInt)) {
      continue;
    }

    if (inputInt < 0) {
      break;
    }

    numbersList.push(inputInt);
  }

  return numbersList;
}

function displayStats(list) {
  const listIsEmpty = list.length === 0;
  const sum = list.reduce((acc, val) => acc + val, 0);
  const average = listIsEmpty ? 0 : sum / list.length;
  const [min, max] = listIsEmpty
    ? [0, 0]
    : [Math.min(...list), Math.max(...list)];

  const showMessage = `For the ${listIsEmpty ? "list that is empty" : "list"} ${list.join(", ")}, the average is ${average.toFixed(2)}, the minimum is ${min}, and the maximum is ${max}`;

  alert(showMessage);
}

const list = readInput();
displayStats(list);
