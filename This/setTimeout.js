// Example 1 : Context in setTimeout and setInterval
const obj = {
  name: "Alice",
  sayHello: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

obj.sayHello(); // `this` refers to `window`, not `obj`

// Note : Inside setTimeout, this refers to window because setTimeout is a global function.

////Fixing Context with Arrow Function
const obj2 = {
  name: "Alice",
  sayHello: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj2.sayHello(); // "Alice" (this refers to obj)

// Or fix it using bind():

const user = {
  name: "Alice",
  sayHello: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

user.sayHello(); // "Alice" after 1 second

/*
Conclusion
Context (this) is determined by how a function is called.
Methods inside objects → this refers to the object.
Normal functions → this is window (or undefined in strict mode).
Event listeners → this refers to the event target.
Arrow functions → this is inherited from the surrounding scope.
To change this manually, use .call(), .apply(), or .bind().
-----------------------------------------
Summary of Context (this)
How Function is Called	What this Refers To
Global (non-strict mode)	window (global object)
Global (strict mode)	undefined
Object method (obj.method())	The object (obj)
Standalone function	window (or undefined in strict mode)
Arrow function	Inherits this from surrounding scope
Event listener (el.addEventListener)	The event target (el)
setTimeout/setInterval	window (unless fixed with bind() or arrow function)
call(), apply(), bind()	this is manually set
Class method (this.method())	The instance of the class
Final Takeaway
Always check how a function is called to understand this.
Arrow functions inherit this, making them useful for event handlers and timers.
Use .bind(), .call(), or .apply() when needed to manually set this.
Inside classes, this refers to the instance.
*/
