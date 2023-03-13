class ExtendedMap extends Map {
  public arr: any[] = [];

  set(key: any, value: any): this {
    this.arr[key] = [key, value];
    return this;
  }

  get(key: string): any {
    console.log(this.arr[key]);
    return this.arr[key];
  }
}

const myMap = new ExtendedMap();

myMap.set("car1", "Den");
myMap.set("car2", "Den");
myMap.set("car3", "Den");

myMap.get("car1");
myMap.get("car2");
myMap.get("car3");

myMap.set("car1", "Victor");
myMap.get("car1");
