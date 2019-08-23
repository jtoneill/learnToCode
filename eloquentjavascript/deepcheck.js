let seta = [1, 2, [1, 2, 3], 3, 4];
let setb = [1, 2, [1, 2, 3], 3, 4];
let keeptrack = [];
let i = 0;
let shouldpop = false;


deepequal = (a, b) => {
    if(typeof a == 'object'){
        let akeys = Object.keys(a);
        while(i <= akeys.length){
            if(shouldpop){
                //b = keeptrack.pop();
                
                //a = keeptrack.pop();
                i = keeptrack.pop() + 1;
                //akeys = Object.keys(a);
                shouldpop = false;
            }
            if(typeof a[akeys[i]] == 'object'){
                keeptrack.push(i);
                //shouldpop = true;
                console.log('hey');
                deepequal(a[akeys[i]], b[akeys[i]]);
                
            }
            if(a[akeys[i]] === b[akeys[i]]){
                if(i == a.length){
                    shouldpop = true;
                    console.log('step back');
                } else {
                    i++
                    console.log('pass');
                }
                
                
            } else {
                return console.log('false');
            }
        }
    } else if(a === b){
        console.log('pass or true');
    } else {
        return console.log('false');
    }
}
deepequal(seta, setb);
