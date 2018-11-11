import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    
    render() {
        if (!this.props.book) {
            return <div>Select a book!</div>;
        }

        return (
            <div>
                <h3>Details for: </h3>
                <div>{this.props.book.title}</div>
                <div>{this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever returned from here will shop up as props inside of BookList
    return {
        book: state.activeBook
    };
}

// Promote BookList form a component to a container.
// It needs to know about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps)(BookDetail);
