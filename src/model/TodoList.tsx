import Todo from './Todo';

class TodoList {
    private id:number;
    private name:string;
    private listOfToDo:Todo[];
    constructor(id:number, name:string , listOfToDo:Todo[]) {
        this.id=id;
        this.name=name;
        this.listOfToDo=listOfToDo;
    };
    
    // getter and setters...
    public setId(id:number):void{
         this.id = id;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public setListOFToDo(listOfToDo:Todo[]){
        this.listOfToDo = listOfToDo;
    }

    public getId():number {
        return this.id;
    }

    public getName():string {
        return this.name;
    }

    public getListOfToDo():Todo[]{
        return this.listOfToDo;
    }

}

export default TodoList;