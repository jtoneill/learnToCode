let seta = [1, 2, [1, 2, 3], 3, 4];
let setb = [1, 2, [1, 2, 3], 3, 4];

deepequal = (a, b) => {
    if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
      console.log(key);
    if (!keysB.includes(key) || !deepequal(a[key], b[key])) return false;
    
  }

  return true;
}
console.log(deepequal(seta, setb));