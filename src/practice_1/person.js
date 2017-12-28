 class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
     
     introduce() {
         let introduce;
         introduce='My name is ' + this.name + '. I am ' + this.age + ' years old.';
         console.log(introduce);
         return introduce;
     }
}
 export {Person}
