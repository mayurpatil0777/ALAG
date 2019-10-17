import React, { Component } from 'react';

class CreateTask extends Component {
    render() {
        return (
            <form>
            <div className="row px-3 py-3">
                <div className="col-md-12 pb-3 borBott">
                    <small className="form-text text-muted"><b>Note :</b> The fields in <span style={{'color':'red','fontSize':'18px'}}>|</span> are mandatory.</small>
                </div>
                <div className="row col-md-12 px-3 py-3">
                    <div className="col-md-3">
                        <label>Task Name</label>
                        <input type="text" className="form-control reqLeft" required></input>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="sel1">Category</label>
                            <select class="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                            <label for="sel1">Assign To</label>
                            <select class="form-control" id="sel1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label>Priority</label>
                        <label class="lblRad">Low
                    <input type="radio" name="radio" required />
                            <span class="checkmark"></span>
                        </label>
                        <label class="lblRad">Medium
                    <input type="radio" name="radio" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="lblRad">High
                    <input type="radio" name="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className="row col-md-12 px-3 py-3">
                        <div className="col-md-6 px-3">
                            <label>Description</label>
                            <textarea className="form-control reqLeft" required></textarea>
                        </div>
                        <div className="col-md-6">
                            <label>Business Requirement</label>
                            <textarea className="form-control reqLeft" required></textarea>
                        </div>
                    </div>
                    <div className="col-md-12 px-3 py-3">
                        <button type="submit" className="btn btn-primary"><span className="material-icons"><b>add</b></span><span>Add Task</span></button>
                    </div>

                </div>
            </div>
        </form>
        );
    }
}

export default CreateTask;