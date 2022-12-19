//call back and higher order function

function first(a) {
 
  console.log('this is first function')
  // console.log(a)
  a()
}

function second() {
  console.log('this is second function')
}
//this is normal calling a function (here first will execute then second will ececute)
// first();
// second();

//
//here fist second will execute then first will execute
// first(second()) 

//after execute on function then another function want to execute then we go for the call backfunction
// var second=19 -->we pass varible as a arugument during functioncall when the varibale consist value
// first(second) 
//higher order function 
// 1)arrow function 
//here we write two functions step-1 1)add 2)number
//when we call number function on that time we want to execute the add function. (for that we want to create concetion bettween number and add function)
//by using function names we create a connection between functions.
//parent function number we called here () inside paranthities we send function names that functions are child.
//what the child functions we given to the the parent function thought paranthities that we assign tho the parent definition variables(fn=function definiton,x=5) before function logic
//inside function logic we use the function definition varibales. for business logic.
//note :once the function definition receive values when it enters into the business logic, the varible is replace with values (by using debugger want to explain)
// want to check arrow function calling
 let add =(num)=> {
 return num+1
 }

 
 function number(fn ,x) {  
  debugger
   console.log(fn(x))
   console.log(x)
 }

 var result=number(add,5);
//  follow 19-12-20222 chat
// /refferal link
// 1)higher order function ---> https://youtube.com/watch?v=ek8t1dlx_DU&feature=shares
// 2)higherorder function --> https://youtube.com/watch?v=b0IMzVTs75Y&feature=shares
// 3)https://youtube.com/watch?v=YbiwZXenseU&feature=shares


//call back function
// 1) https://www.w3schools.com/jquery/jquery_callback.asp
// 2)https://www.simplilearn.com/tutorials/javascript-tutorial/callback-function-in-javascript
// 3)https://www.youtube.com/watch?v=ZDzWdFYBgLI