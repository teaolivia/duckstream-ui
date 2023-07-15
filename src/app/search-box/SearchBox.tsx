'use client'


import React from 'react';


// interface SearchBoxProps {
//   focused: boolean;
//   focusPath: string;
// }


function setFocus(): void {
  console.log('implement focus when clicked')
}

export function SearchBox(): JSX.Element {
  // const focusedClass = (focused) ? 'focused' : 'unfocused'

  return (
    <div onClick={()=>setFocus()}>
      <form>
        <input type="text" className='search-box' placeholder="Search video by title..."/>
      </form>
    </div>
  );
}
