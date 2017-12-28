import {Person} from './person'
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    /**
     * to display student introduce extends by Person class with the super.introduce method
     * **/
    introduce(){
        return super.introduce()+' '+'I am a Student. I am at Class '+this.klass.number+'.'
    }
}
export {Student}



