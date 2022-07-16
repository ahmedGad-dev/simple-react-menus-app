import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({items}) => {
  return(
    <div className='section-center'>
      {items.map((item) =>(
        <MenuItem menuItem={item}/>
      ))}
    </div>
  );
};

export default Menu;
