//let a = [1, 2, 3, 4];
//let b = [1, 2, 3, 4];
let a = {a: 1, b: 2, c: 3, food: 'apple'};
let b = {a: 1, b: 2, c: 3, food: 'apple'};
deepequal = (a, b) => {
    if(typeof a === 'object' && typeof b === 'object') {
        console.log('loop through objects')
        let akeys = Object.keys(a);
        let bkeys = Object.keys(b);

        if(a.length == b.length){           
            for(let i = 0; i < akeys.length; i++){                
                if(typeof a[akeys[i]] == 'object' && typeof b[bkeys[i]] == 'object'){
                    deepqual(a[akeys[i]], b[bkeys[i]]);
                    //only really recursive if it finds an object within an object.
                }
                if(a[akeys[i]] === b[bkeys[i]]){
                    console.log(a[akeys[i]] + ' = ' + b[bkeys[i]]);
                    if(i == akeys.length - 1){
                        return console.log('true');
                    }
                } else {
                    return console.log('false');
                }
            }
        } else {
            return console.log('false');
        }
    } else if(a === b){
        console.log(a + ' = ' + b);
        return console.log('true');
    } else {
        return console.log('false');
    }
}
deepequal(a, b);
//let c = Object.keys(b);
//console.log(c);