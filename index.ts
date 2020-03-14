class Greeter {
  @addName // "Decorating a method"
  greet() {
    return 'Hello';
  }
}


function addName(constructor, methodName, methodDesc) {
  // This is the decorator itself 
  const originalMethod = methodDesc.value;
  const newMethodDesc = {...methodDesc}; // Cloning the method
  newMethodDesc.value = () => `${originalMethod()} Bootcampers` // Replacing the old method with a new method
  return newMethodDesc;
}


function buttonPress() {
  const greet = new Greeter();
  return greet.greet();
}


document.getElementById('create-greeter-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  alert(buttonPress());
})