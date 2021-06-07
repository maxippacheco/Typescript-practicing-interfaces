interface Task{
    title: string;
    description: string;
    done: boolean;
}


class ToDo implements Task{

    public title: string;
    public description: string;
    public done: boolean;


    constructor(title: string, description:string, done:boolean){
        this.title = title;
        this.description = description;
        this.done = done;

        this.createTask();
    }

    createTask(){
        return [this.title, this.description, this.done];
    }

}


const task_school = new ToDo('School HW', 'I will do my english homework', false);

console.log(task_school);
