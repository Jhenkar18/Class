class Node {
    constructor(data) {
      this.data = data; 
      this.left = null; 
      this.right = null; 
    }
  }
  
  function inorderTraversal(node) {
    if (node !== null) {
      inorderTraversal(node.left); // Traverse the left subtree recursively
      console.log(node.data); // Output the value of the current node
      inorderTraversal(node.right); // Traverse the right subtree recursively
    }
  }
  
  let rootNode = new Node(1);
  rootNode.left = new Node(2);
  rootNode.right = new Node(3);
  
  console.log("Inorder traversal:");
  inorderTraversal(rootNode);