class Greeter {

  @addName
  greet() {
    return 'Hello';
  }
}

// function addName(name) {

function addName(constructor, methodName, methodDesc) {
  const originalMethod = methodDesc.value;
  const newMethodDesc = {
    configurable: methodDesc.configurable,
    enumerable: methodDesc.enumerable,
    value: () => `${originalMethod()} ${name}`
  };
  return newMethodDesc;
}
// }


function buttonPress() {
  const greet = new Greeter();
  return greet.greet();
}



document.getElementById('create-greeter-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  alert(buttonPress());
})