class User {
  public name: string;
  public surname: string;
  public id: number;
  public age: number;

  constructor(name, surname, id, age) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.age = age;
  }
}

const user1 = new User("Patrik", "Surname1", "1", "22");
const user2 = new User("Den", "Surname2", "2", "21");
const user3 = new User("Mark", "Surname3", "3", "23");
const user4 = new User("Irina", "Surname4", "4", "33");
const user5 = new User("Claus", "Surname5", "5", "44");
const user6 = new User("Danil", "Surname6", "6", "11");
const user7 = new User("Dmitry", "Surname7", "7", "23");
const user8 = new User("Sasha", "Surname8", "8", "67");
const user9 = new User("Olena", "Surname9", "9", "35");
const user10 = new User("Pavel", "Surname10", "10", "66");

const userArr = [];

class SortUser {
  public arr: (string | number)[] = [];

  constructor(arr: (string | number)[]) {
    this.arr = arr;
  }

  sortById(): (string | number)[] {
    for (let i = 1; i < this.arr.length; i++) {
      let curr = this.arr[i];

      let j: number;

      for (j = i - 1; j >= 0 && this.arr[j] > curr; j--) {
        this.arr[j + 1] = this.arr[j];
      }

      this.arr[j + 1] = curr;
    }
  }
}
