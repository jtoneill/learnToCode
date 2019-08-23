let size = 8;
let width = 8;
let count = size * width;
let str = '';
let skipspace = true;

for(i = 0; i < count; i++){
    if(i % width == 0){
        str += '\n';
        skipspace = !skipspace;
    }
    skipspace = !skipspace;
    if(skipspace){
        str += '  '; // two spaces b/c it looks better.
    } else {
        str += '#';
    }
}
console.log(str);