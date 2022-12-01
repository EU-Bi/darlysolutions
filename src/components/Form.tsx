import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTipingTitle=(e:any)=>{
    setTitle(e.target.value)
    disabledButton(title,url)
  }

  const handleTipingUrl =(e:any)=>{
    setUrl(e.target.value)
    disabledButton(title,url)
  }

  const disabledButton= (title:string, url:string)=>{
    title!==''&&url!==''?setDisabled(false):setDisabled(true)
  }
  
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
            fullWidth
            onChange={(e)=>{
              handleTipingTitle(e)
            }}
            variant="standard"
          />
        <TextField
            margin="dense"
            id="url"
            label="UrlPhoto"
            type="text"
            fullWidth
            onChange={(e)=>{
              handleTipingUrl(e)
            }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Clouse</Button>
          <Button 
          disabled={isDisabled} 
          onClick={()=>{
            handleClose()
            console.log(title, url)
            

          }}>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {Form}