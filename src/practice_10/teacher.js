import {Person} from './person'
/**
 * in this case klasses is an array
 * **/
class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }
    /**
     * display different info decided by the length of class
     * **/
    introduce(){
        let introduce=super.introduce()+' '+'I am a Teacher. I teach ';
        if(this.klasses==null){
            return introduce+'No Class.';
        }else{
            introduce+='Class ';
            for(var i=0;i<this.klasses.length;i++){
                introduce+=this.klasses[i].number;
                (i!==this.klasses.length-1)?introduce+=', ':introduce+='.'
            }
            return introduce;
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
    /**
     * to test if this student class number is included in the classes
     * **/
    isTeaching(student){
        for(let a of this.klasses){
            if(a.isIn(student)){
                return true;
            }
        }
        return false;
    }
}
export {Teacher}






