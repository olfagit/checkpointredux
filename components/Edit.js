import React, { useState } from 'react';
import {Modal , FormControl ,Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { edit } from '../redux/actions/todoAction';

function Edit({todo}){
    const [show, setShow] = useState(false);
    const[work,setWork]=useState(todo.work);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
return (
<>
<Button variant="primary" onClick={handleShow}>
           Edit
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
              <Button variant="primary" onClick={()=>{
                
                dispatch(edit(todo.id ,work));
                handleClose()
              }}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
</>
);
}
export default Edit;