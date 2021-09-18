import React, {useEffect, useState} from 'react';
import style_profileInfo from './ProfileInfo.module.css';

const ProfileStatusWithHook = (props) => {
    // let state_useState = useState(false);
    // let editMod = state_useState[0];
    // let setEditMod = state_useState[1];

    let [editMod, setEditMod] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    const activateMode = () => {
        setEditMod(true);
    };

    const deactivateMode = () => {
        setEditMod(false);
        props.updateStatusThunk(status);
    };

    const statusChange = (ev) => {
        setStatus(ev.currentTarget.value)
    }

    return (
        <div>
            {editMod &&
            <div>
                <input autoFocus={true} onChange={statusChange} onBlur={deactivateMode}
                       value={status}/>
            </div>
            }
            {!editMod &&
            <div className={style_profileInfo.status}>
                <span onDoubleClick={activateMode}>
                Status: <span>{props.status ? props.status : "NO STATUS"}</span>
            </span>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHook;

