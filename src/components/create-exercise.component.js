import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component{

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // declare variables init state
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(e){
        // Sample for hardcode only
        this.setState({
            users: ['test user'],
            username: 'yamete'
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(e){
        // this.setState({
        //     date: new date
        // })
    }

    // submit form overrides
    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };

        console.log('');
        console.log(exercise);

        window.location = '/';
    }
    
    render() {
        return (
            <div>
                Youre on create exercise

                <h3>Create New Exercise</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername} >
                                {
                                    // can return all element in array
                                    this.state.users.map(function(user){
                                        return <option
                                        key={user}
                                        value={user}>{user}
                                        </option>
                                    })
                                }

                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <label>Duration</label>
                        <input type = "text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                </form>
            </div>
        );
    }
}