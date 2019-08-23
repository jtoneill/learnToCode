let str = 'This is a sample string.'
let char = 's';
let count = 0;

for(i = 0; i <= str.length - 1; i++){
    if(str[i] == char){
        count += 1;
    }
}
console.log(count);