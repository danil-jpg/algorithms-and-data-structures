class CarOperation1 {
  public carArr: string[] = [];

  addCar(car: string): void {
    this.carArr.push(car);
  }

  print() {
    console.log(this.carArr);
  }
}

const car = new CarOperation1();

car.addCar("car1");
car.addCar("car2");
car.addCar("car3");

car.print();
