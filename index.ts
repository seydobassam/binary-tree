import { BinaryTree, binaryTreeDrawer } from "./src/index";
import * as d3 from "d3";

let bst: BinaryTree<number> = new BinaryTree<number>(100);
bst.addNode(51);
bst.addNode(150);
bst.addNode(12);
bst.addNode(152);
bst.addNode(2);
bst.addNode(144);
bst.addNode(12);
bst.addNode(61);
bst.addNode(62);
bst.addNode(63);
bst.addNode(234);
bst.addNode(22);
bst.addNode(123);
bst.addNode(122);
bst.addNode(125);
bst.addNode(57);
bst.addNode(233);
bst.addNode(235);
bst.addNode(149);

binaryTreeDrawer().draw("div", bst);
binaryTreeDrawer().onNodeClick((node: any) => {  
  binaryTreeDrawer()
  .animatePath(node.data.value)
  .on("end", () => {
    binaryTreeDrawer().refreshTree();
    /* binaryTreeDrawer().refreshTree();
    binaryTreeDrawer().animateNode(100); */
  }); 
});
