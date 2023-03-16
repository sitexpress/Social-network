import React from "react";

type PropsType = {
    status:string
}
export class ProfileStatus extends React.Component<PropsType> {
    state= {
        editMode: false,
        title: 'yo'
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.state.editMode = true
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.state.editMode = true
    }
    render() {
        return  <>
            {
                this.state.editMode == true
                ?
                <div>
                    <input value={this.props.status} type="text" onBlur={this.deActivateEditMode} autoFocus={true}/>
                </div>
                :
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }
        </>
    }

}