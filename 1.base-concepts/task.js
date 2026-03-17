// Здание №1
"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    return [-b / (2 * a)];
  }

  return [
    (-b + Math.sqrt(discriminant)) / (2 * a),
    (-b - Math.sqrt(discriminant)) / (2 * a),
  ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 100 / 12;
  const S = amount - contribution;

  if (S <= 0) {
    return 0;
  }

  const payment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
  const total = payment * countMonths;

  return Math.round(total * 100) / 100;
}
