let base = 0;
let keeptrack = [];
//let a = [1, 2, 3, 4];
//let b = [1, 2, 3, 4];
let a = {a: 1, b: 2, c: 3, d: {a: 1, g: 6, hello: 'world'}, food: 'apple'};
let b = {a: 1, b: 2, c: 3, d: {a: 1, g: 6, hello: 'world'}, food: 'apple'};
deepequal = (a, b) => {
    if(typeof a === 'object' && typeof b === 'object') {
        console.log('loop through objects')
        let akeys = Object.keys(a);
        let bkeys = Object.keys(b);
        //bkeys may not be needed because akeys should work, if not, false

        if(a.length == b.length){           
            for(let i = 0; i < akeys.length; i++){  
                if(keeptrack.length > 0){
                    i = keeptrack.pop() + 1;
                }              
                if(typeof a[akeys[i]] == 'object' && typeof b[akeys[i]] == 'object'){
                    keeptrack.push(i);
                    base += 1;
                    deepequal(a[akeys[i]], b[bkeys[i]]);
                    //only really recursive if it finds an object within an object.
                }
                //by using akeys on both sides, we simultaniously check that the property names match as well.
                if(a[akeys[i]] === b[akeys[i]]){
                    console.log(a[akeys[i]] + ' = ' + b[bkeys[i]]);
                    if(i == akeys.length - 1){
                        if(base == 0){
                            return console.log('true');
                        } else {                       
                            
                            console.log('object passed: level + ' + base);
                            base -= 1;
                            console.log(i);
                        }
                        
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