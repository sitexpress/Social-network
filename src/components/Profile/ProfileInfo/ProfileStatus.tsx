import React, {ChangeEvent} from "react";

type PropsType = {
    status:string
    updateStatus: (status:string) => void
}
export class ProfileStatus extends React.Component<PropsType> {
    state= {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    updateStatusHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        console.log('Status about:',this.props.status)
        return  <>
            {
                this.state.editMode == true
                ?
                <div>
                    <input
                        value={this.state.status}
                        type="text"
                        onChange={this.updateStatusHandler}
                        onBlur={this.deActivateEditMode}
                        autoFocus={true}/>
                </div>
                :
                <div>
                    <span
                        onDoubleClick={this.activateEditMode}
                    >{this.props.status || "---"}
                    </span>
                </div>
            }
        </>
    }

}