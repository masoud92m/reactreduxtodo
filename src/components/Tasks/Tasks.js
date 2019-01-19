import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from './Task/Task';
import * as actionType from '../../store/actions';

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
                    <ul className="list-group">
                        {tasks.map(task => (
                            <Task key={task.id}
                                taskStatus={task.status}
                                taskName={task.value}
                                deleteButton={() => this.props.onDeleteTask(task.id)} />
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

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTask: (id) => dispatch({ type: actionType.DELETE_TASK, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);