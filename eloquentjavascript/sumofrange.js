let arr = [];
let answer = 0;
range = (start, end, step) => {
    if(start < end){
        if(step < 0){
            step = -step;
            console.log('infinite loop warning\nstep made positive');
        }  
        //for(let i = start; i <= end; i += step){
        //    arr.push(i);
        //}
        while(start <= end){
            arr.push(start);
            start += step;
        }
    } else if(start > end){
        if(step > 0){
            step = -step;
            console.log('infinite loop warning\nstep made negative');
        } 
        //for(let i = start; i >= end; i += step){
        //    arr.push(i);
        //}
        while(start >= end){
            arr.push(start);
            start += step;
        }
    }
    summachine(arr);
}
summachine = a => {
    let str = '';
    for(let i of a) {
        answer += i;
        if(i == a[a.length -1]){
            str += i;
        } else{
            str += i + ' + ';
        }        
    }
    console.log(str + ' = ' + answer);
    //return answer;
}

range(1, 10, 1);