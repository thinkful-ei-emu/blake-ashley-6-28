import React from 'react';


function Option (props){
  
  return (
    <li key={props.index} className="feature__item">
    <div className={props.featureClass}                  
      onClick={() => props.updateFeature(props.keyItem, props.item)}>
        { props.item.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(props.item.cost) })
    </div>
  </li>
  );
}

export default Option;