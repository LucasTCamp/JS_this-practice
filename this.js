// Problem 1
function introduce(name) {
    console.log(this.name);
  }
  this.name = "Alex";
  introduce("Alex");
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?
    //Global Alex is printed and it works because it's in the global scope.
// Problem 2

function runArrow(greeting) {
    this.greeting = "Hello!";
    const arrowFunc = () => {
      console.log(this.greeting);
    };
    arrowFunc();
  }
  runArrow("Hello!");

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore? 
    //It refers to the global variable called greeting. It doesn't refer to the parameter anymore because it is now reading from "this".
// Problem 3

const display = {
    message: "This is from the object",
    show: function (param) {
      console.log(this.message);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?
  // "This is from the object" is printed. It refers to the object because it is defined in the object. Param was replaced with this.message, so it isn't used.
// Problem 4

  function handleClick(text) {
    console.log(text);
  }

  document.getElementById("myBtn").onclick = function () {
    this.text = "Clicked";
    handleClick(this.text);
  };

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?
// In this case "this." refers to the button, so when it is clicked, it passes and prints "Clicked".
//The arrow function behaves differently because of lexical scope. 