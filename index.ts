class Person {
  name: string;
  constructor(name) {
    this.name = name;
  }

  @addGreet
  greet() {
    return `Hello, I am ${this.name}!`;
  }
}


function addGreet(constructor, methodName, methodDescriptor) {
  const originalMethod = methodDescriptor.value;
  const newMethodDescriptor = {...methodDescriptor};
  newMethodDescriptor.value = () => `${originalMethod()} Nice to meet you!`; // this.name is undefined so "Josh doesn't show up"
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