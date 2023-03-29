function brackets(str: string): boolean {
  const duplicateStr = str;
  //   console.log(duplicateStr.match(/`/g));
  let status: boolean;
  if (duplicateStr.length % 2 !== 0) {
    status = false;
    return status;
  } else {
    status = true;
    return status;
  }
}

function brackets2(str: string): boolean {
  const duplStr = str;
  let left = duplStr.match(/\(/g);
  let right = duplStr.match(/\)/g);
  console.log(left?.length, right?.length);
  if (left?.length === right?.length) {
    return true;
  } else {
    return false;
  }
}
console.log(brackets2("()()()()(((())))"));
