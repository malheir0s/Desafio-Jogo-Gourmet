const BinaryTree = require('./classes/tree');

const gourmetTree = new BinaryTree();




while (true) {
  console.log('Pense em um prato que você gosta.\n');

  /*
  Digitar s ou n nos inputs.
  */
  gourmetTree.searchCaracteristica(gourmetTree.root, gourmetTree.root.prato);
}



