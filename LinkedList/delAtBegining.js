class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
 
   
    function removeFirstNode( head) {
        if (head == null)
            return null;
 
       
         temp = head;
        head = head.next;
 
        return head;
    }