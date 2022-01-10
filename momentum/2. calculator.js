const calculator = {
    add: function(a, b) {
        console.log(a+b);
    },
    mon: function(a, b) {
        console.log(a-b);
    },
    power: function(a, b) {
        console.log(a**b);
    },
    times: function(a, b) {
        console.log(a*b);
    }
}

calculator.add(10, 10);
calculator.mon(10, 5);
calculator.power(2, 2);

console.log(calculator.power(2, 2)); 