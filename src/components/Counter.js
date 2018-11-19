import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, SYNCHRONIZE } from '../actions/index';


class Counter extends React.Component {
    onIncrement = () => {
        this.props.dispatch({ type: INCREMENT });
        console.log("INCREMENT button clicked");
    }

    onDecrement = () => {
        this.props.dispatch({ type: DECREMENT });
        console.log("DECREMENT button clicked");
    }

    onSynchronize = () => {
        this.props.dispatch({ type: SYNCHRONIZE });
        console.log("SYNCHRONIZE button clicked");
    }

    render() {
        let { value } = this.props;
        return (
            <div>
                <button onClick={this.onSynchronize}>
                    Synchronize After 1 Sec.
        </button>
                {' '}
                <button onClick={this.onIncrement}>
                    Increment
        </button>
                {' '}
                <button onClick={this.onDecrement}>
                    Decrement
        </button>
                <hr />
                <div>
                    Clicked: {value} times
        </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        value: state.counter.value
    }
}
export default withRouter(connect(mapStateToProps)(Counter));