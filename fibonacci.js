function fib(n){
    if(n==0){
        return 0;
    }
    else if(n==1 || n==2){
        return 1;
    }else{
        return fib(n-1)+fib(n-2)
    }
}

console.log(fib(6))

function fibByLoop(n){
    if(n==0){
        return 0;
    }
    else if(n==1 || n==2){
        return 1
    }
    else{

        let num1 = 0
        let num2 = 1;
        let sum = 0
        for(let i = 2; i<=n;i++){
             sum = num1 + num2;
             num1 = num2;
             num2 = sum;
        }
        return sum;
    }

}

console.log(fibByLoop(6))