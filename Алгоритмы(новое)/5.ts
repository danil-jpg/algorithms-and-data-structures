class CipherClass {
  public cipheredInput: number[] = [];
  public deCipheredInput: string[] = [];

  static cipher(input: string): number[] {
    let cipheredInput: number[] = [];

    for (let i = 0; i < input.length; i++) {
      cipheredInput[i] = input.charCodeAt(i);
    }

    console.log(cipheredInput);

    return cipheredInput;
  }

  static deCipher(input: number[]): string {
    let deCipheredInput: string[] = [];

    for (let i = 0; i < input.length; i++) {
      deCipheredInput[i] = String.fromCharCode(input[i]);
    }
    console.log(deCipheredInput);

    let res = deCipheredInput.toString().replace(/,/g, "");

    console.log(res);

    return res;
  }
}

CipherClass.deCipher(CipherClass.cipher("ThisIsInput 1"));
