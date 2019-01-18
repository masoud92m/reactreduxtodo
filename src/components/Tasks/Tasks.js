import React, { Component } from 'react';

import Task from './Task/Task';

class Tasks extends Component {
    render() {
        return (
            <div>
                <Task />
                <Task />
                <Task />
            </div>
        );
    }
}

export default Tasks;