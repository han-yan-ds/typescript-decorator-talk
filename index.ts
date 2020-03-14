class Greeter {
  @addNameCustom('Josh') // "Decorating a method"
  greet() {
    return 'Hello';
  }
}


function addNameCustom(name) { // wrapping in a function: This is the Decorator-Maker (or Decorator-Factory)
  return function (constructor, methodName, methodDesc) {
    const originalMethod = methodDesc.value;
    const newMethodDesc = {...methodDesc};
    newMethodDesc.value = () => `${originalMethod()} ${name}`
    return newMethodDesc;
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