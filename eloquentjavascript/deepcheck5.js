//let seta = [1, 2, [1, 2, 3], 3, 4];
//let setb = [1, 2, [1, 2, 3], 3, 4];
let seta = {a: 1, b: 2, c: 3, d: {a: 1, g: 6, hello: 'world'}, food: 'apple'};
let setb = {a: 1, b: 2, c: 3, d: {a: 1, g: 6, hello: 'world'}, food: 'apple'};

deepequal = (a, b) => {
    if (a === b) return true;

    if(typeof a != 'object' || typeof b != 'object' || a == null || b == null) return false;

    let keysa = Object.keys(a);
    if(keysa.length != Object.keys(b).length) return false;
    
    for(let key of keysa){
        
        if(!deepequal(a[key], b[key])) return false;
        console.log(a[key] + ' = ' + b[key]);
    }
    console.log('pass');
    return true;
}
deepequal(seta, setb);