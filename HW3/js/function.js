function sumnumber(n){
    let result = 0;
    for (let x = 1; x <= n; x++)
        result += sumdigit(x);
        return result;
    }
      
    function sumdigit(x){
    let sum = 0;
    while (x != 0){
        sum += x % 10;
         x = parseInt(x / 10, 10);
    }
    return sum;
    }
     
  
console.log(sumnumber(5));


    function sumEvenNumber(x){
        number=0
        for (x=0; x<=5;x++) {
            if( x%2==0){
                number=0
                console.log(i+i)
                number+=i
                return console.log(number)
    }
}
    }
