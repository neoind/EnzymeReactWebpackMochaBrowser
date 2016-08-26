 // var React = require('react');

 // var ExampleApplication = React.createClass({
 // // 	propTypes: {
	// // 	message : React.PropTypes.string.isRequired
	// // },
 //    	render: function() {
          
 //          return <div className="mycomp"/>;
 //    	}
 //      });

 //      module.exports = ExampleApplication;
import React from 'react';

export default class ExampleApplication extends React.Component {
  render() {
    return (
      <div className="mycomp">Hello World</div>       
    );
  }
}