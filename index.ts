class Greeter {
  @addName // "Decorating a method"
  greet() {
    return 'Hello';
  }
}


function addName(constructor, methodName, methodDescriptor) {
  // This is the decorator itself 
  const originalMethod = methodDescriptor.value;
  const newMethodDescriptor = {
    configurable: methodDescriptor.configurable,
    enumerable: methodDescriptor.enumerable,
    value: () => `${originalMethod()} Bootcampers` // Where you modify the method
  };
  return newMethodDescriptor;
}


function buttonPress() {
  const greet = new Greeter();
  return greet.greet();
}


document.getElementById('create-greeter-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  alert(buttonPress());
})