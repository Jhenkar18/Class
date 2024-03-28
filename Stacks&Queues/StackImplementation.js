class stack{
    constructor(maxsize){
        this.items=[];
        this.maxsize=maxsize;
    }

    //check if stack is empty
isEmpty(){
    return this.items.length===0;
}

//push element
push(element){
    if(this.isFull()){
        console.log("Stack is full");
    }else{
    this.items.push(element);
    console.log(`pushed ${element} onto the stack`);
}
}

//check stack is full
isFull(){
    return this.items.length===this.maxsize;
}

//pop element
pop(){
    if(this.isEmpty()){
        console.log("Stack is empty");
}else{
    let poppedelement=this.items.pop();
    console.log(`popped ${poppedelement} from the stack`);
}
}

//print current state of stack
printstack(){
    if(this.isEmpty()){
        console.log("Stack is empty");
    }else{
        console.log("Current Stack",this.items);
    }
}
}

let mystack=new stack(3);
mystack.push(10);
mystack.push(20);
mystack.push(30);
mystack.push(40);
mystack.printstack();
mystack.pop();
mystack.pop();
mystack.pop();




