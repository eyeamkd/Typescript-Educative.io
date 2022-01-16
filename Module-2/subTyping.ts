// interface Tree{
//     toString():string;
// }  

abstract class Tree{
    abstract toString():string;
    abstract returnNumber():number;
    abstract returnAny():any;
}  

interface ITree{
    toBoolean():boolean;
}

interface ITree2{
    toSomeObject():{some:"ob"};
}

class newFeature {
    public newFeatureMethod(){
        console.log("Super New Feature ")
    }
}

class TreeNode extends newFeature implements ITree, ITree2{
    toString(){
        return "TreeNode"
    } 

    returnNumber(){
        return 1;
    } 

    returnAny(){
        
    } 

    toBoolean(){
        return false;
    } 

    toSomeObject(){
        const obj:{some:'ob'}={
            some:'ob'
        } 
        return obj;
    }
};  

const treeNode = new TreeNode();

// Distinguishable yet common features need to be an interface, non distinguishable common features need to be inherited 
// Therefore, if something that needs to be implemented across all the classes, should just be added to the Parent Class, 
// Which can then be used to call the base sub classes
// But something that needs to be selectively implemented across the classes needs to be an interface