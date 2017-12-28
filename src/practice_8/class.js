class Class{
    constructor(number){
        this.number = number;
        this.leader = null;
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
           this.leader = student;
       }
    }

}
export {Class}


