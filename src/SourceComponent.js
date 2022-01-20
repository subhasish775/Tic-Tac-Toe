import React from 'react';

const SourceComponent =(props)=>{
    const classes= props.className ? `${props.className} square` : `square`;
    return (
    <span className={classes + (props.state === "X" ? ` fc-orange` : ` fc-green`)} 
     onClick={()=>props.onClick(props.index)}>
       
        {props.state}
    </span>
    )
}
export default SourceComponent;