import React,{useState,useEffect,useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Context } from '../App';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Form() {
  const [open, setOpen] = React.useState(false);
  const [isDisabled,setDisabled]=useState(true)
  const [title,setTitle]=useState('')
  const [url,setUrl] = useState('')
  

  const userPhoto = useContext(Context)
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTiping=(e:any)=>{
    if(e.target.id=='title'){
        setTitle(e.target.value)
    }
    if(e.target.id=='url'){
      setUrl(e.target.value)
    }
    
    
  }

  const photoObj=(title:string,url:string)=>{
    return {
      id:1,
      title:title,
      url:url,
      thumbnailUrl:url
    }

  }

  useEffect(()=>{
    if(title==''||url==''){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
  })
  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
       AddDataOfPhoto
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Enter data of your photo"}</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Titile"
            type="text"
            value={title}
            fullWidth
            onChange={(e)=>{
              handleTiping(e)
            }}
            variant="standard"
          />
        <TextField
            margin="dense"
            id="url"
            label="UrlPhoto"
            type="text"
            value={url}
            fullWidth
            onChange={(e)=>{
              handleTiping(e)
            }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Clouse</Button>
          <Button 
          disabled={isDisabled} 
          onClick={()=>{
            
            // userPhoto.setUsersPhoto(photoObj(title,url))
            setTitle('')
            setUrl('')
            handleClose()
          }}>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {Form}