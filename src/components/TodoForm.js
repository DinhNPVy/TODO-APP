import React from 'react'
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons';
import DateTimePicker from "@mui/lab/DateTimePicker";
import DateFNSUtils from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@material-ui/core";


function TodoForm ({
    handleSubmit,
    heading = false,
    text, setText,
    value, setValue,
    projects,
    showButtons = false,
    setShowModal = false
   
}){
     return (
        <LocalizationProvider dateAdapter={DateFNSUtils}>
        <form onSubmit={handleSubmit} className='TodoForm'>
            <div className="text">
                {
                    heading && 
                    <h3>{heading}</h3>
                }
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
                </div>
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
            <div className="pick-project">
                <div className="title">
                    <Palette />
                    <p>Choose a project</p>
                </div>
                <div className="projects">
                    {
                        projects.map( project => 
                            <div className="project" key={project.id}>
                                {project.name}
                            </div>    
                        )
                    }
                </div>
            </div>
            {
                showButtons &&
                <div>
                    <div className="cancel" onClick={() => setShowModal(false)}>
                        <X size='40' />
                    </div>
                    <div className="confirm">
                        <button>+ Add to do</button>
                    </div>
                </div>
            }
        </form>
    </LocalizationProvider>
    )
}
export default TodoForm
