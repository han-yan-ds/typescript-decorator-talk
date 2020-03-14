class Person {
  name: string;
  constructor(name) {
    this.name = name;
  }

  @AddGreet
  greet() {
    return `Hello, I am ${this.name}!`; // this.name, if called out of the scope of this class, doesn't exist
  }
}


function AddGreet(constructor, methodName, methodDescriptor) {
  const originalMethod = methodDescriptor.value;
  const newMethodDescriptor = {
    configurable: methodDescriptor.configurable,
    enumerable: methodDescriptor.enumerable,
    get() {
      return () => `${originalMethod.bind(this)()} Nice to meet you!`;
    }
  };
  return newMethodDescriptor;
}


function buttonPress() {
  const josh = new Person('Josh');
  return josh.greet();
}


document.getElementById('create-person-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  alert(buttonPress());
})