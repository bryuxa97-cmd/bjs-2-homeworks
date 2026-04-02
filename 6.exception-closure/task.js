function parseCount(value) {
  const parsedValue = Number.parseFloat(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }

  return parsedValue;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    const isTriangleExists = sideA + sideB >= sideC && sideA + sideC >= sideB && sideB + sideC >= sideA;

    if (!isTriangleExists) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.sideA + this.sideB + this.sideC;
  }

  set perimeter(_) {
  }

  get area() {
    const halfPerimeter = this.perimeter / 2;
    const areaValue = Math.sqrt(
      halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC)
    );

    return Math.round(areaValue * 1000) / 1000;
  }

  set area(_) {
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch (error) {
    const errorTriangle = {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      set area(_) {
      },

      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      set perimeter(_) {
      },
    };

    return errorTriangle;
  }
}

