import React, { useState } from 'react';
import {Button,Modal,FormControl} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { add } from '../redux/actions/todoAction';

function AddWork(){
const [show, setShow] = useState(false);
const [work,setWork] = useState("")
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const dispatch= useDispatch()
  
return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add Work
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl type="text" value={work} onChange={(e)=>setWork(e.target.value)}/>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>
                dispatch(add(work))&&
                handleClose()
            }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
export default AddWork;
