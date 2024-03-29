class Node {
    constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null; 
    }
  }
  
  function postOrderTraversal(node) {
    if (node !== null) {
        
        postOrderTraversal(node.left); // Traverse the left subtree recursively
        postOrderTraversal(node.right); // Traverse the right subtree recursively
        console.log(node.data); // Output the value of the current node
    }
  }
  
  let rootNode = new Node(1);
  rootNode.left = new Node(2);
  rootNode.right = new Node(3);
  
  console.log("postOrder traversal:");
  postOrderTraversal(rootNode);