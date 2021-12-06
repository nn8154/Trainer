import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddTrainer(props) {
    const [open, setOpen] = useState(false);
    const [trainer, setTrainer] = useState ({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };  
    
    const handleInputChange = (event) => {
        setTrainer({...trainer, [event.target.name]: event.target.value})
    }

    const AddTrainer = () => {
        props.saveTrainer(trainer);
        handleClose();
    }


    return (
    <div>
      <Button style={{margin: 10}} variant="outlined" onClick={handleClickOpen}>
        Add Trainer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Trainer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={trainer.firstname}
            onChange={e => handleInputChange(e)}
            label="Firstname"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="lastname"
            value={trainer.lastname}
            onChange={e => handleInputChange(e)}
            label="Lastname"
            fullWidth
            variant="standard"
          />   
          <TextField
            margin="dense"
            name="streetaddress"
            value={trainer.streetaddress}
            onChange={e => handleInputChange(e)}
            label="Streetaddress"
            fullWidth
            variant="standard"
          /> 
          <TextField
            margin="dense"
            name="postcode"
            value={trainer.postcode}
            onChange={e => handleInputChange(e)}
            label="Postcode"
            fullWidth
            variant="standard"
          /> 
          <TextField
            margin="dense"
            name="city"
            value={trainer.city}
            onChange={e => handleInputChange(e)}
            label="City"
            fullWidth
            variant="standard"
          /> 
          <TextField
            margin="dense"
            name="email"
            value={trainer.email}
            onChange={e => handleInputChange(e)}
            label="Email"
            fullWidth
            variant="standard"
          /> 
           <TextField
            margin="dense"
            name="phone"
            value={trainer.phone}
            onChange={e => handleInputChange(e)}
            label="Phone"
            fullWidth
            variant="standard"
          />                                               
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={AddTrainer}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    );
}