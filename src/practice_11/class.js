class Class{
    constructor(number){
        this.number = number;
        // this.leader = null;
    }
    /**
     * to display the class number
     * **/
    getDisplayName(){
        return 'Class '+this.number;
    }
    /**
     * which means that only when student belongs to this class, can we assign that student as the leader
     * **/
    assignLeader(student){
        if(student.klass.number===this.number){
            //add the leader attribute dynamically
            this.leader = student;
            
        }else {
            console.log('It is not one of us.')
        }
    }
    /**
     * the purpose of this function is to change the origin number of this student to this class number
     * so that this student belongs to this class.
     * **/
    appendMember(student){
        student.klass.number = this.number;
    }
    /**
     * judge that wether the student is in this class
     * **/
    isIn(student){
        if(student.klass.number==this.number){
            return true;
        }else {
            return false;
        }
    }
    /**
     * notify assign leader listeners
     * **/
    registerAssignLeaderListener(teacher){
        if(this.leader){
            console.log('I am '+teacher.name+'. I know '+this.leader.name+' become Leader of Class '+this.number+'.')
        }
    }
    /**
     * if both the student and the teacher have same class
     * **/
    registerJoinListener(student,teacher){
        if(teacher.klasses.includes(student.klass)){
            console.log('I am '+teacher.name+'. I know Jerry has joined Class '+this.number+'.')
        }
    }
    // AssignLeaderListener(){
    // }
    /**
     * notify join listeners
     * **/
    // JoinListener(){
    //
    // }
}
export {Class}





