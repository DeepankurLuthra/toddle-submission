import React, { useEffect, useState } from 'react'
import Button from '../Components/Button/PrimaryButton/Button'
import "./Layout.css"
import PlusWithCircle from '../Components/Icons/PlusWithCircle'
import Curriculum from '../Components/Curriculum'
import Node from './Node'
import ImportButton from '../Components/Import/Import'
import ExportButton from '../Components/Export/Export'
const rootLevel = 0;
const Layout = () =>{

   const [data, setData] = useState([])
//    useEffect(()=>{
//       if(data.length === 0){
// const node = new Node()
//       node.level = rootLevel
//       setData([node])
//       alert("All chapters deleted, adding new row")
//       }
      
//    },[data.length === 0])

  
   const addRow = () => {
        const node = new Node();
        const lastNode = data[data.length - 1];
        if (lastNode) {
            node.level = lastNode.level;
            node.previous = lastNode.id;
            lastNode.next = node.id;
        } else {
            node.level = rootLevel;
        }

        setData([
            ...data,
            node
        ])
    }
  return (
   <div className='container'>
   <div className='header-container'>
<ExportButton data={data}/>
<ImportButton onImportData={(importedData) => setData(importedData)}/>
   </div>
   <div className='main'>
   <div className='subject-name'>
   MATHEMATICS
   </div>
<div className='options-heading-conatiner'>
<div className='heading-wrapper actions'>
<div className='heading-bold'>Actions</div>
<div className='heading-light'>Move, Indent, Outdent, Delete</div>
</div>
<div className='heading-wrapper standard'>
<div className='heading-bold'>Standard</div>
<div className='heading-light'>The Text of the standard</div>
</div>
</div>
<div className='curriculum-container'>
{data.map((node, index)=><Curriculum data={data} setData={setData} rootLevel={rootLevel} node={node} index={index} key={index}/>)}
</div>
<div className='add-button-container'>
<Button icon={<div className='add-icon-container'><PlusWithCircle/></div>} color="#337AB7" widthInPercent={100} onClick={()=>addRow(data, setData, rootLevel)}>Add a standard</Button>
</div>   
</div>
   </div>
  )
}

export default Layout