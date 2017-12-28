import {Person} from './person'
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    /**
     * if the leader property is not null, then display <I am Leader of Class> string
     * or display <I am a Student. I am at Class>
     * **/
    introduce(){
        if(this.klass.leader==null){
            return super.introduce()+' '+'I am a Student. I am at Class '+this.klass.number+'.'
        }else {
            return super.introduce()+' '+'I am a Student. I am Leader of Class '+this.klass.number+'.'
        }
    }
}
export {Student}





