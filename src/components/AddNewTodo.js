import React, {useState} from 'react'
import Modal from './Modal'
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons';
import DateTimePicker from "@mui/lab/DateTimePicker";
import DateFNSUtils from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@material-ui/core";





function AddNewTodo(){
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [value, setValue] = useState(new Date());

    return (
        <div className='AddNewTodo'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                
            <LocalizationProvider dateAdapter={DateFNSUtils}>
                    <form>
                        <div className="text">
                            <h3>Add new to do!</h3>
                            <input
                                type='text'
                                value={text}
                                onChange={e => setText(e.target.value)}
                                placeholder='To do ...'
                                autoFocus
                            />
                        </div>
                        <div className="remind">
                            <Bell />
                            <p>Remind Me!</p>
                        </div>
                        <div className="pick-day">
                            <div className="title">
                                <CalendarDay />
                                <p>Choose a day</p>
                                <Clock />
                                <p>Choose time</p>
                                <DateTimePicker
                                value={value}
                                onChange={(newValue) => {
                                    console.log(newValue.toUTCString());
                                    setValue(newValue);
                                }}
                                renderInput={(startProps) => (
                                    <React.Fragment>
                                    <TextField {...startProps} />
                                    </React.Fragment>
                                )}
                                />
                            </div>
                        </div>
                        <div className="pick-project">
                            <div className="title">
                                <Palette />
                                <p>Choose a project</p>
                            </div>
                            <div className="projects">
                                <div className="project active">
                                    personal
                                </div>
                                <div className="project">
                                    work
                                </div>
                                <div className="project">
                                    work
                                </div>
                            </div>
                        </div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='40' />
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </form>
                </LocalizationProvider>
           
             </Modal>
         </div>
    )
}

export default AddNewTodo