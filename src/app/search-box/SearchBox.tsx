'use client'


import React from 'react';



export function SearchBox({filterText, onFilterTextChange}:{filterText: string, onFilterTextChange: (value: string) => void}): JSX.Element {
  return (
    <div>
      <form>
        <input type="text" value={filterText} className='search-box' placeholder="Search video by title..." onChange={(e) => onFilterTextChange(e.target.value)}/>
      </form>
    </div>
  );
}
