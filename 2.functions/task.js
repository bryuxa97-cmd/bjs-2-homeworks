function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let minValue = Infinity;
  let maxValue = -Infinity;
  let sumValues = 0;

  for (let index = 0; index < arr.length; index += 1) {
    const currentNumber = arr[index];

    if (currentNumber > maxValue) {
      maxValue = currentNumber;
    }

    if (currentNumber < minValue) {
      minValue = currentNumber;
    }

    sumValues += currentNumber;
  }

  const averageValue = parseFloat((sumValues / arr.length).toFixed(2));

  return { min: minValue, max: maxValue, avg: averageValue };
}

// Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumValues = 0;

  for (let index = 0; index < arr.length; index += 1) {
    sumValues += arr[index];
  }

  return sumValues;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let index = 0; index < arr.length; index += 1) {
    const currentNumber = arr[index];

    if (currentNumber > maxValue) {
      maxValue = currentNumber;
    }

    if (currentNumber < minValue) {
      minValue = currentNumber;
    }
  }

  return maxValue - minValue;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenValues = 0;
  let sumOddValues = 0;

  for (let index = 0; index < arr.length; index += 1) {
    const currentNumber = arr[index];

    if (currentNumber % 2 === 0) {
      sumEvenValues += currentNumber;
    } else {
      sumOddValues += currentNumber;
    }
  }

  return sumEvenValues - sumOddValues;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenValues = 0;
  let countEvenValues = 0;

  for (let index = 0; index < arr.length; index += 1) {
    const currentNumber = arr[index];

    if (currentNumber % 2 === 0) {
      sumEvenValues += currentNumber;
      countEvenValues += 1;
    }
  }

  if (countEvenValues === 0) {
    return 0;
  }

  return sumEvenValues / countEvenValues;
}

// Задача 3

function makeWork (arrOfArr, func) {
  if (!Array.isArray(arrOfArr) || arrOfArr.length === 0) {
    return 0;
  }

  let maxWorkerResult = -Infinity;

  for (let index = 0; index < arrOfArr.length; index += 1) {
    const dataArrayForWorker = arrOfArr[index];
    const workerResult = func(...dataArrayForWorker);

    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}
