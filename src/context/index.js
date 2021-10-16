import React, {createContext, useState} from 'react'

const TodoConext = createContext()

function TodoContextProvider({children}) {
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    return (
       <TodoContext.Provider
            value = {
                {
                    selectedProject,
                    setSelectedProject
                }
            }
       >
           {children}

       </TodoContext.Provider>
    )
}
export {TodoContextProvider, TodoConext}
