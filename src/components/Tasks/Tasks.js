import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './Task/Task';

class Tasks extends Component {
    render() {
        const uncheckedTasks = this.props.tasks.filter(task => task.status === 'unchecked');
        const checkedTasks = this.props.tasks.filter(task => task.status === 'checked');
        const tasks = uncheckedTasks.concat(checkedTasks);
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Tasks</h3>
                    <hr />
                    <ul class="list-group">
                        {tasks.map(task => (
                            <Task taskStatus={task.status} taskName={task.value} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Tasks);