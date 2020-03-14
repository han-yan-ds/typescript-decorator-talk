class Greeter {
  @AddNameCustom('Josh') // "Decorating a method"
  greet() {
    return 'Hello';
  }
}


function AddNameCustom(name) { // wrapping in a function: This is the Decorator-Maker (or Decorator-Factory)
  return function (constructor, methodName, methodDescriptor) {
    const originalMethod = methodDescriptor.value;
    const newMethodDescriptor = {
      configurable: methodDescriptor.configurable,
      enumerable: methodDescriptor.enumerable,
      value: () => `${originalMethod()} ${name}`
    };
    return newMethodDescriptor;
  }
}


function buttonPress() {
  const greet = new Greeter();
  return greet.greet();
}


document.getElementById('create-greeter-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  alert(buttonPress());
})