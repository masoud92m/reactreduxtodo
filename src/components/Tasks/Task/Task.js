import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Task.css';

const task = (props) => {
    var li = '';
    if (props.taskStatus === 'unchecked') {
        li = <li className="list-group-item list-group-item-success">
            <div className="btn-group btn-group-sm float-right">
                <button type="button" className="btn btn-success" onClick={props.checkButton}><FontAwesomeIcon icon="check" /></button>
                <button type="button" className="btn btn-danger" onClick={props.deleteButton}><FontAwesomeIcon icon="times" /></button>
            </div>
            {props.taskName}
        </li>
    } else {
        li = <li className="list-group-item list-group-item-primary selected">
            <div className="btn-group btn-group-sm float-right">
                <button type="button" className="btn btn-primary" onClick={props.unCheckButton}><FontAwesomeIcon icon="redo" /></button>
                <button type="button" className="btn btn-danger" onClick={props.deleteButton}><FontAwesomeIcon icon="times" /></button>
            </div>
            {props.taskName}
        </li>
    }
    return li
}

export default task;