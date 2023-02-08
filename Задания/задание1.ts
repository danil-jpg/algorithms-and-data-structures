// any

let parAny: any = 3;
parAny = "str";

const str: string = "string";

const num: number = 23;

const bigInt = BigInt(100);

const bool: boolean = true;

const sym: symbol = Symbol("Key");

function someFunction(): void {
  console.log(`Void`);
}

const obj: { property: string } = { property: "prop" };

const otherArr: (number | string | boolean)[] = [1, true, "string"];

// tuple
const employee: [number, string, boolean] = [1, "Steve", true];

// null - ожидаемая пустота
// undefined - неожиданная пустота

enum UserResponse {
  No = 0,
  Yes = 1,
}

function error(message: string): never {
  throw new Error(message);
}

let notSure: unknown = 4;
notSure = "maybe a string instead";
