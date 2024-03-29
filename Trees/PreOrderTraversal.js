class Node {
    constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null; 
    }
  }
  
  function preOrderTraversal(node) {
    if (node !== null) {
        
        console.log(node.data); // Output the value of the current node
        preOrderTraversal(node.left); // Traverse the left subtree recursively
        preOrderTraversal(node.right); // Traverse the right subtree recursively
    }
  }
  
  let rootNode = new Node(1);
  rootNode.left = new Node(2);
  rootNode.right = new Node(3);
  
  console.log("preOrder traversal:");
  preOrderTraversal(rootNode);