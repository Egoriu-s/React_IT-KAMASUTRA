import React from 'react';


class ProfileStatusClass extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
        console.log("UPDATE")
    }

    statusClick = () => {
        console.log('ХЕХЕХЕ! =)');
        this.setState({editMode: true});
        // this.state.statusMode = true;
    }

    no_statusClick = () => {
        this.setState({editMode: false});
        this.props.updateStatusThunk(this.state.status);
    }

    statusChange = (ev) => {
        this.setState({status: ev.currentTarget.value})
    }

    render() {
        return (
            <div>
                {
                    this.state.statusMode
                        ? <div><input autoFocus={true} onBlur={this.no_statusClick} onChange={this.statusChange}
                                      value={this.state.status}/></div>
                        : <div><span
                            onDoubleClick={this.statusClick}>{this.props.status ? this.props.status : "NO STATUS"}</span>
                        </div>
                }
            </div>
        )
    }

}

export default ProfileStatusClass;