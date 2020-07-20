//Binary Search Tree Implementation, Traversal will be its own package.

//This is the node structure for BST
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value =  value;
  }
}


class BinarySearchTree {
  //Initialization of the Root
  constructor() {
    this.root = null;
  }

  //Inserting Value into BinarySearchTree
  insert(value) {
    let newNode = new Node(value);
    //If root is null -> first node insertion.
    if(!this.root) {
      this.root = newNode;
    } else {
      //A helper function will  tell whether the value is left child or right child.
      this.insertNode(this.root, newNode);
    }
  }

  //The helper function
  insertNode(root, newNode) {
    //check to see left child or right child)
    if(newNode.value < root.value) {//This is the left side traversal. 
      //Check the left side
      if(!root.left) {
        root.left = newNode; //New Node goes to the left.
      } else {
        this.insertNode(root.left, newNode); //Building left side using recursion. 
      }
    } else {//This is the right side traversal
      //Check the right side
      if(!root.right) {
        root.right = newNode;//New Node goes to the right. 
      } else {
        this.insertNode(root.right, newNode); //Building the right side using recursion
      }
    }        
  }
  
  //removing a node
  deleteNode(value) {
    if(!this.root) {
      return 'Tree is empty';
    } else {
      //Just like insertion, a helper function to  remove node
      this.removeNode(this.root, value);
    }
  }

  removeNode(root, value) {
    if(!this.root){ return null; }
    if(value < root.value) { //left side deletion
      //get the left node back thorugh recursion.
      root.left = this.removeNode(root.left, value);
      return root;
    } else if(value > root.value) { //recursively remove right side of the tree.
      root.right = this.removeNode(root.right, value);
      return root;
    } else {
      if(!root.left && !root.right) {
        //return null for deleting last node.
        root = null;
        return root;
      }

      if(root.left) {
        root = root.left;
        return root;
      } else if(root.right) {
        root = root.right;
        return root;
      }

      //Get Minimum for two child nodes.
      let minRight = this.findMinNode(root.right);
      root.value = minRight.value;
      root.right = this.removeNode(root.right, minRight.value);
      return root;
    }
  }

  findMinNode(root) {
    if(!root.left) {
      return root;      
    } else {
      return this.findMinNode(root.left);
    }
  }
}