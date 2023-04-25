import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status:string
    updateStatus: (status:string) => void
}
export const ProfileStatus:React.FC<PropsType> = ({
                                                      status,
                                                      updateStatus
                                                  }) => {
    const[editMode, setEditMode] = useState(false)
    const[value, setValue] = useState('')
    // state= {
    //     editMode: false,
    //     status: this.props.status
    // }
    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    //     this.state.editMode = true
    // }
    // deActivateEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    //     this.state.editMode = true
    //     this.props.updateStatus(this.state.status)
    // }
    // updateStatusHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    //
    // }
    // componentDidUpdate(prevProps:any, prevState:any) {
    //     if(prevProps.status !== this.props.status)
    //     this.setState({
    //         status: this.props.status
    //     })
    //
    // }

    const onBlurHandler = () => {
        updateStatus(value)
        setEditMode(false)
    }

    return  <>
        {
            editMode == true
            ?
            <div>
                <input
                    value={value}
                    type="text"
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                    onBlur={onBlurHandler}
                    autoFocus={true}/>
            </div>
            :
            <div>
                <span
                    onDoubleClick={() => setEditMode(true)}
                >{status || "---"}
                </span>
            </div>
        }
    </>
}

