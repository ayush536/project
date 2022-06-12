import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import "./Sorting.css"

export const Sorting=({handleSort})=> {
  return (
    <div className='sortButtons'>
        <ButtonGroup variant="text" aria-label="text button group">
        <Button variant="text" onClick={()=> {handleSort('asc', 'title')}}>Sort by title Asc</Button>
        <Button variant="text" onClick={()=> {handleSort('desc', 'title')}}>Sort by title Desc</Button>
        <Button variant="text" onClick={()=> {handleSort('asc', 'price')}}>Sort price Asc</Button>
        <Button variant="text" onClick={()=> {handleSort('desc', 'price')}}>Sort price Desc</Button>
        </ButtonGroup>
    </div>
  )
}

