//Implementation 1 : For Loop
var sum_to_n_a = function(n) {
    let sumOfN = 0;
    for(let i = 1; i <= n; i++){
        sumOfN = sumOfN + i;
    }
    return sumOfN
};

console.log(sum_to_n_a(5))

//Implementation 2 : While Loop
var sum_to_n_b = function(n) {
    // let sumOfN = 0;
    // let i = 1; 
    // while (i <= n){
    //     sumOfN = sumOfN + i;
    //     i++;
    // }
    // return sumOfN; 

    if(n == 1) {
        return n
    }

    return n + sum_to_n_b(n-1)
 };
 
 console.log(sum_to_n_b(5))

 //Implementation 3 : Array Reducer
 var sum_to_n_c = function(n) {
    const nArray = Array.from({length: n}, (_, i) => (i+1))
    //return nArray
    const sumOfN = nArray.reduce((a, b) => a+b,0)
    return sumOfN;
};

console.log(sum_to_n_c(5))