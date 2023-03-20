class User {
  public name: string;
  public surname: string;
  public id: number;
  public age: number;

  constructor(name, surname, id, age: number) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.age = age;
  }
}
const user4 = new User("Irina", "Surname4", 4, 1);
const user5 = new User("Claus", "Surname5", 5, 22);
const user10 = new User("Pavel", "Surname10", 10, 343);
const user6 = new User("Danil", "Surname6", 6, 654);
const user3 = new User("Mark", "Surname3", 3, 1233);
const user1 = new User("Patrik", "Surname1", 1, 4324);
const user2 = new User("Den", "Surname2", 2, 21234);
const user7 = new User("Dmitry", "Surname7", 7, 231432);
const user8 = new User("Sasha", "Surname8", 8, 234234);
const user9 = new User("Olena", "Surname9", 9, 212);

const userArr: User[] = [];

userArr.push(user2);
userArr.push(user10);
userArr.push(user1);
userArr.push(user5);
userArr.push(user8);
userArr.push(user9);
userArr.push(user3);
userArr.push(user7);
userArr.push(user6);
userArr.push(user4);

// console.log(userArr);
class SortUser {
  public arr: User[] = [];

  constructor(arr: User[]) {
    this.arr = arr;
  }

  sortById(): void {
    for (let i = 1; i < this.arr.length; i++) {
      let currId = this.arr[i].age;
      let currNode = this.arr[i];
      let j: number;

      for (j = i - 1; j >= 0 && this.arr[j].age > currId; j--) {
        this.arr[j + 1] = this.arr[j];
      }
      this.arr[j + 1] = currNode;
    }

    console.log(this.arr);
  }
}

const sortUser = new SortUser(userArr);

sortUser.sortById();
