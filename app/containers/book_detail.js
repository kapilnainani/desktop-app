import React, { Component } from 'react';
import { connect } from 'react-redux';
class BookDetail extends Component {
  render() {
    console.log(this.props);
    if (!this.props.clickedTool) {
      return (<h3>select a tool</h3>)
    }
    else {
      return (<div>
        details for {this.props.clickedTool.id}
      </div>)
    }

  }
}


function mapStateToProps(state) {
  return ({ clickedTool: state.clickedTool });
}

export default connect(mapStateToProps)(BookDetail);
