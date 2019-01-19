import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Form.css'
import * as actionType from '../../store/actions';

class Form extends Component {
    state = { inputNewTast: '' }

    inputChangeHanler = event => {
        this.setState({ inputNewTast: event.target.value });
    }

    addButtonHanlder = () => {
        const value = this.state.inputNewTast.trim();
        if (value.length > 0) {
            this.props.onAddTask(value);
            this.setState({inputNewTast: ''})
        }
    }

    render() {
        return (
            <div className='row form-box'>
                <div className='col-md-12'>
                    <div className="card bg-light text-dark">
                        <div className="card-body">
                            <h5 className="card-title">Add New Task</h5>
                            <div className="input-group mb-3" >
                                <input type="text"
                                    className="form-control"
                                    placeholder="New Task"
                                    value={this.state.inputNewTast}
                                    onChange={(event) => this.inputChangeHanler(event)} />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-success"
                                        type="submit"
                                        onClick={this.addButtonHanlder}>Add Task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: (task) => dispatch({ type: actionType.ADD_TASK, task: task })
    }
}

export default connect(null, mapDispatchToProps)(Form);