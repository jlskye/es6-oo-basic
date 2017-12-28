import {Person} from './person'

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        let introduce=super.introduce()+' '+'I am a Teacher. I teach ';
        if(this.klass!=null){
            return introduce+'Class '+this.klass.number+'.';
        }else{
            return introduce+'No Class.';
        }
    }
    /**
     * observe that wether this teacher and student belong to the same class
     * **/
    introduceWith(studentJerry){
        let introduce=super.introduce()+' '+'I am a Teacher. ';
        if(studentJerry.klass==this.klass){
            return introduce+'I teach Jerry.';
        }else {
            return introduce+'I don\'t teach Jerry.';
        }
    }
}
export {Teacher}




