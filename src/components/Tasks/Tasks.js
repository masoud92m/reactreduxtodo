import React, { Component } from 'react';

import Task from './Task/Task';

class Tasks extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                <h3>Tasks</h3>
                <hr />
                    <ul class="list-group">
                        <Task taskType="unchecked" taskName="angular" />
                        <Task taskType="unchecked" taskName="vue.js" />
                        <Task taskType="checked" taskName="react" />
                        <Task taskType="checked" taskName="redux" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tasks;