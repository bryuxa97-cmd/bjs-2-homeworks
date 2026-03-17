// Здание №1
"use strict";

function solveEquation(coefficientA, coefficientB, coefficientC) {
  const discriminant = coefficientB ** 2 - 4 * coefficientA * coefficientC;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    return [-coefficientB / (2 * coefficientA)];
  }

  return [
    (-coefficientB + Math.sqrt(discriminant)) / (2 * coefficientA),
    (-coefficientB - Math.sqrt(discriminant)) / (2 * coefficientA),
  ];
}

// Задание №2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterestRate = percent / 100 / 12;
  const loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  const monthlyPayment = loanBody * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));
  const total = monthlyPayment * countMonths;

  return Math.round(total * 100) / 100;
}
