import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTool } from '../actions/index';
import { bindActionCreators } from 'redux';
class BooksList extends Component {

  render() {
    console.log('---------------')
    console.log(this.props);
    return (
      <ul className="list-group col-sm-4">
        {
          this.props.books.map((book) => {
            return (<li key={book.id} onClick={() => this.props.selectTool(book)} className="list-group-item">{book.id}</li>);
          })
        }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTool: selectTool }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
