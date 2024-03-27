class Node 
{
    
    constructor(data) 
    {
            this.data = data;
            this.next = null;
        }
}

function append(new_data)
{
   
    var new_node = new Node(new_data);
 
   
    if (head == null)
    {
        head = new Node(new_data);
        return;
    }
 
    new_node.next = null;
 
    
    var temp = head; 
    while (temp.next != null)
        temp = temp.next;
 
    
    temp.next = new_node;
    return;
}