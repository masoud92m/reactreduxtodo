import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Task.css';

const task = (props) => {
    var li = '';
    if (props.taskType === 'unchecked') {
        li = <li class="list-group-item list-group-item-success">
            <div class="btn-group btn-group-sm float-right">
                <button type="button" class="btn btn-success"><FontAwesomeIcon icon="check" /></button>
                <button type="button" class="btn btn-danger"><FontAwesomeIcon icon="times" /></button>
            </div>
            {props.taskName}
        </li>
    } else {
        li = <li class="list-group-item list-group-item-primary selected">
            <div class="btn-group btn-group-sm float-right">
                <button type="button" class="btn btn-primary"><FontAwesomeIcon icon="redo" /></button>
                <button type="button" class="btn btn-danger"><FontAwesomeIcon icon="times" /></button>
            </div>
            {props.taskName}
        </li>
    }
    return li
}

export default task;