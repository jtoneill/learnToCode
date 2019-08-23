let newarr = [];
let testarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

makearewind = arr => {  
    let i = 0;  
    let end = arr.length;
    let temp = [];
    temp = arr.slice();    
    while(i <= end){
        newarr.push(temp.pop());
        i++;
    }
    console.log ('original: ' + arr + '\nnew:      ' + newarr);
}

rewind = arr => {   
    let i = 0; 
    let end = arr.length;
    while(i <= end){
        newarr.push(arr.pop());
        i++;
    }
    arr = newarr;
    console.log ('original has been rewound: ' + arr);
}

makearewind(testarray);
