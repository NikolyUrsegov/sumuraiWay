import React, {ChangeEvent} from 'react';
import {ProfileStatusPropsType} from "../ProfileContainer";

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<StateType>) {
        prevProps.status !== this.props.status
        && this.setState({
            ...this.state,
            status: this.props.status
        })

    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status: e.currentTarget.value
        })
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    UnActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserProfileStatus(this.state.status)
    }

    render() {
        return !this.state.editMode
            ? <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
            </div>
            : <div>
                <input onChange={this.onChangeStatus}
                       value={this.state.status}
                       autoFocus
                       onBlur={this.UnActivateEditMode}
                />
            </div>
    }
}

export default ProfileStatus