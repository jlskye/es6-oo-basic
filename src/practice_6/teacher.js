import {Person} from './person'
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        let introduce=super.introduce()+' '+'I am a Teacher. I teach ';
        if(this.klass!=null){
            return introduce+'Class '+this.klass+'.';
        }else{
            return introduce+'No Class.';
        }

    }
}
export {Teacher}



