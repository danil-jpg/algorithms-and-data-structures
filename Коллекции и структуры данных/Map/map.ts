// Ассоциативный массив — абстрактный тип данных, с помощью которого хранятся пары ключ-значение.

// Несколько вариантов имплементаций - обычный обьект,класс Мап,самописный вариант

// https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/ - тут зачем нужен map
// https://ru.hexlet.io/courses/js-objects/lessons/hash-table/theory_unit

// const hashMap = new Map();

// hashMap.set("key", "value");
// hashMap.set("key", "value1");

// hashMap.get("key");

// console.log(hashMap.get("key"));
// //
// const obj = {};
// obj["key"] = "value";
// obj.hasOwnProperty()

// То,как это выглядит на более низком уровне
// const arr: any[] = [];

// const data: string = "Hello world";

// const key: string = "Key1";

// const hashFunc = cr32.str(key);

// arr[hashFunc] = [key, data];

// console.log(arr[hashFunc]);
//

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

const extendedMap = new ExtendedMap();

extendedMap.set("key", "value1");

extendedMap.set("notAkey", "value2");

// extendedMap.set("notkey", "value3");

// extendedMap.set("notkey1", "value4");

extendedMap.get("key");

extendedMap.get("notAkey");

// extendedMap.get("notkey");

// extendedMap.get("notkey1");
