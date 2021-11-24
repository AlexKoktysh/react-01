import React, { useState } from 'react'

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
            ? <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            : <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>}
        </div>
    )
}

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }

export default ProfileStatus