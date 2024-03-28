class queue{
    constructor(){
        this.items=[];
        this.top=-1;
    }

//Add element to queuq
    enqueue(element){
        this.items.push(element);
        this.top++;
    }

//Remove element
dequeue(){
    if(this.isEmpty()){
        console.log("Queue is empty");
    }else{
    this.top--;
    return this.items.shift();
    }
}

//Peek at front element
peek(){
    if(this.isEmpty()){
        console.log("Queue is Empty");
    }
    return this.items[0];
}

//check queue is empty
isEmpty(){
    return this.top===-1;
}

//get size
size(){
    return this.top+1;
}

//print queue
printQueue(){
    return this.items.slice(0, this.top + 1).join(' ');
}
}

let myqueue=new queue();
myqueue.enqueue(10);
myqueue.enqueue(20);
myqueue.enqueue(30);
console.log(myqueue.printQueue());
console.log(myqueue.dequeue());
console.log(myqueue.peek());
console.log(myqueue.size());