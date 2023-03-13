class CarOperation3 {
  public carArr: string[] = [];

  addCar(car: string): void {
    if (this.carArr.indexOf(car) !== -1) {
      console.error(`${this.carArr[this.carArr.indexOf(car)]} has Duplicate`);
    } else {
      this.carArr.push(car);
    }
  }

  print() {
    console.log(this.carArr);
  }
}

const car3 = new CarOperation3();

car3.addCar("car1");

car3.addCar("car2");

car3.addCar("car3");

car3.addCar("car4");

car3.addCar("car4");

car3.addCar("car2");

car3.print();
