let testarr = [1, 2, 3];


arraytolist = a => {
    let list = null;
    for (let i = a.length - 1; i >= 0; i--){
        list = {value: a[i], rest: list};
    }
    console.log(list);
    return list;
}

//arraytolist(testarr);

listtoarray = list => {
    let arr = [];
    for(let i = list; i; i = i.rest){
        arr.push(i.value);
    }
    console.log(arr);
}

//listtoarray(arraytolist(testarr));

prepend = (value, list) => {
    return {value, rest: list};
}



nth = (list, n) => {
    if(!list) {
        return undefined;
    }
    else if(n == 0) {
        console.log(list.value);
        return list.value;
    }
    else{
        return nth(list.rest, n - 1);
    } 
}

//nth(arraytolist(testarr), 2);