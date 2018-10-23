/**
 * create constructor for todo..... 
 */
class Todo {
    private id:number;
    private isChecked:boolean;
    private text:string;
    private dueDate:string;
    private isImportant:boolean;
    private note:string;
    constructor(id:number, isChecked:boolean, text:string, date:string, isImportant:boolean, note:string){
        this.id = id;
        this.isChecked = isChecked;
        this.text = text;
        this.dueDate = date;
        this.isImportant = isImportant;
        this.note = note;
    };
    
    // getter and setters...
    public setId(id:number):void{
        this.id = id;
    }

    public setIsChecked(isChecked:boolean):void{
        this.isChecked = isChecked;
    }
    
    public setText(text:string):void {
        this.text = text;
    }  
    
    public setDueDate(dueDate:string):void{
        this.dueDate = dueDate;
    }

    public setIsImportant(isImportant:boolean):void {
        this.isImportant = isImportant;
    }

    public setNote(note:string):void {
        this.note = note;
    }
    
    public getId():number {
        return this.id;
    } 

    public getIsChecked():boolean {
        return this.isChecked; 
    }

    public getText():string{
        return this.text;
    }

    public getDueDate():string {
        return this.dueDate;
    }

    public getIsImportant():boolean {
        return this.isImportant;
    }

    public getNote():string {
        return this.note;
    }
}

export default Todo;