iseven = arg =>{
    if(arg < 0){
        arg *= -1;
        console.log('Negative Number');
    }
    if(arg > 1){
        arg -= 2;
        if(arg == 1){
            return console.log('odd');
        } else if(arg == 0){
            return console.log('even');
        }
    }
    iseven(arg);
}
iseven(50);