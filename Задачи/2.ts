class CarOperation2 {
  public carArr: string[] = [];

  addCar(car: string, position: number = 0): void {
    this.carArr.splice(position, 0, car);
  }

  print() {
    console.log(this.carArr);
  }
}

const car2 = new CarOperation2();

car2.addCar("car1", 0);

car2.addCar("car2", 1);

car2.addCar("car3", 2);

car2.addCar("car4", 3);

car2.addCar("car5", 4);

car2.addCar("CarCenter", 2);

car2.addCar("CarEnd", 6);

car2.print();
