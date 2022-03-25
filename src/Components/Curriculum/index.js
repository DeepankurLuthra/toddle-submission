import React from 'react'
import "./index.css"
import { Icon } from '../Icons'
import TextArea from './TextArea/TextArea'



const Curriculum = ({data, setData, rootLevel, node, index}) => {


 const updateText = (text) => {
        node.name = text;
        setData([...data]);
    }

const changeLevel = (changeInLevel) => {
        node.level += changeInLevel;
        setData([...data]);
    }

  const outdent = () => {
        changeLevel( -1);
    }

const indent = () => {        changeLevel( 1);
    }

   
   const deleteNode = () => {
       const nodesToBeDeleted = findNodesToBeDeleted(node, index);
        const nodeNotToBeDeleted = (node) => nodesToBeDeleted.indexOf(node) < 0
        const filteredData = data.filter(nodeNotToBeDeleted);
        setData([...filteredData]);
    }

     const findNodesToBeDeleted = () => {
        const nodesToBeDeleted = [node];

        if (!node.next) {
            return nodesToBeDeleted;
        }

        for (let loopIndex = index + 1; loopIndex < data.length; loopIndex++) {
            const currentNode = data[loopIndex];
            if (currentNode.level <= node.level) {
                currentNode.previous = data[index - 1]?.id;
                break;
            }

            nodesToBeDeleted.push(currentNode);
        }

        return (nodesToBeDeleted);
    }

  const canOutdent = () => node.level !== rootLevel;
 const canIndent = () => {
        const previousNode = data.find(child => child.id === node.previous);
        return previousNode?.level >= node?.level;
    };


  return (
    <div className='curriculum-wrapper'>
    <div className='actionbutton-wrapper'>
   <Icon type="move" />
    <Icon type="arrow-left" disabled={!canOutdent()} onClick={()=> outdent()}/>
    <Icon type="arrow-right" disabled={!canIndent()} onClick={()=>indent()}/>
    <Icon type="delete" onClick={()=>deleteNode()}/>
    </div>
    <div className='textarea-wrapper'>
    <TextArea onUpdate={updateText} indentation={node.level} >{node.name}</TextArea>
    </div>
    </div>
  )
}

export default Curriculum