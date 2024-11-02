function secondHeighest(arr){
    let firstMax = -Infinity;
    let secondMax = -Infinity;

    arr.forEach(element => {
        if(element > firstMax){
            secondMax = firstMax;
            firstMax = element;
        }else if(element > secondMax && element < firstMax){
            secondMax = element;
        }
    });

    console.log(secondMax);
}