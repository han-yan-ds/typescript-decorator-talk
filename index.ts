class Person {
  name: string;
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, I am ${this.name}!`;
  }
}


function buttonPress() {
  const josh = new Person('Josh');
  return josh.greet();
}


document.getElementById('create-person-button')!.addEventListener("click", (e) => {
  e.preventDefault();
  alert(buttonPress());
})