const obj = {
  name: "Alice",
  sayHello: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj.sayHello(); // `this` refers to `window`, not `obj`
