class Person {
  name: string;
  constructor(name) {
    this.name = name;
  }

  @AddGreet
  greet() {
    return `Hello, I am ${this.name}!`; // this.name, if called OUTSIDE of the scope of this class, doesn't exist
  }
}


function AddGreet(constructor, methodName, methodDescriptor) {
  const originalMethod = methodDescriptor.value;
  const newMethodDescriptor = {
    configurable: methodDescriptor.configurable,
    enumerable: methodDescriptor.enumerable,
    value: function() {
      return `${originalMethod.bind(this)()} Nice to meet you!`;
    }
  };
  return newMethodDescriptor;
}


function buttonPress(name) {
  const person = new Person(name);
  return person.greet();
}


document.getElementById('create-person-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  let name = (document.getElementById("person-name") as HTMLInputElement).value;
  alert(buttonPress(name));
})