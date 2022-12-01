import React,{ useEffect, useState, FC} from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Column } from './TableBodyCard';
import axios from 'axios';

interface Photo {
  id:number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IRowCard{
  columns:Column[]
}

const TableRowCard: FC <IRowCard> = ({columns}) => {
  const [photos,setPhotos]=useState<Photo[]>([])
  const [currentPage,setCurrentPage]=useState(1)
  const [fetching, setFetching]=useState(true)


  useEffect(()=>{
    if(fetching){
      axios.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${currentPage}`)
      .then(response=>{
        setPhotos([...photos,...response.data])
        setCurrentPage(prevState=>prevState+1)

      })
      .finally(()=>setFetching(false))

    }
    
  },[fetching])
  useEffect(()=>{
    document.addEventListener('scroll',handleScroll)
    return function(){
      document.removeEventListener('scroll', handleScroll)
    }
  },[])

  const handleScroll = (event:any) => {
    if(event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop+window.innerHeight)<100){
          setFetching(true)
    }
  };
  
  return (
    <TableBody 
        sx={{overflow: 'scroll' , height:'600px'}} 
        
    >
      {photos.map((photo)=>{
        return(
          <TableRow>
            {columns.map((column)=>{
              const value = photo[column.id]
              return(
                <TableCell align={column.align}>
                 {value}
                </TableCell>
              )
            })}
          </TableRow>
        )
      })}
    </TableBody>
  )
}

export default TableRowCard