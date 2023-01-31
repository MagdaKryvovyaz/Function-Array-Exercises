//Exercise FUNCTION
//Exercise 1
/*function checkAge(age) {
    if (age > 18) {
        return true;
      } else {
        return confirm('Do you have your parents permission to access this page?');
      }
    }

let checkAge = age => age > 18 ? true : confirm('Do you have your parents permission to access this page?');

//Exercise 2

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }

console.log(pow(3, 5));


//Exercise 3
let ask = (question, yes, no) =>  confirm(question) ? yes() : no()
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.") 
  )

  //Exercise 4

  let calculator = {
    read(){
        this.x = +prompt('x', 0);
        this.y = +prompt('y', 0);
    },
    sum(){
        return this.x + this.y;
    },
    mul(){
        return this.x * this.y;
    }
  }

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

  //Exercise 5

function min(a, b) {return a > b ? b : a}

console.log(min(4, 7));

//Exercise ARRAY

//Exercise 1
function filterRange(arr, a, b) {
    return arr.filter(x => (a <= x && x <= b));
  }
  

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4) 


alert( filtered )  // 3,1 (matching values)

alert( arr )      // 5,3,8,1 (not modified)


//Exercise 2

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = users.map(x => x.name)  

alert( names ) // John, Pete, Mary
*/


//Exercise 3

function getAverageAge(users) {
    return users.reduce((x, arr) => x += arr.age, 0) / users.length;
}

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ]

alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28
