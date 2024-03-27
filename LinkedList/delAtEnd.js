class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
}

function removeLastNode(head)
{
    if (head == null)
        return null;

    if (head.next == null) {
        return null;
    }

    
    var temp = head;
    while (temp.next.next != null)
        temp = temp.next;
    
    temp.next = null;

    return head;
}
