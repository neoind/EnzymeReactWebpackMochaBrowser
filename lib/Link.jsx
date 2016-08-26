
var React = require('react');
var SolutionHeaderActions = require('../actions/SolutionHeaderActions');
var ACDealDetailsLink = require('./ACDealDetailsLink.jsx');
var OpportunityStore = require('../stores/OpportunityStore');

function getStateFromStore(){
   return {
	         isHidden: OpportunityStore.getHideShowStatus()
	    };
}

var ACDealDetailsLinkContainer = React.createClass({
	
	getInitialState: function() {
	    return getStateFromStore();
	},

	componentDidMount: function() {
    
        OpportunityStore.addChangeListener(this._onChange);
    },

    
    componentWillUnmount: function() {
    
        OpportunityStore.removeChangeListener(this._onChange);
    },

    
    _onChange: function () {
    
        this.setState(getStateFromStore());
    },
    
	render: function() {
		if(this.state.isHidden){
			return (<div></div>);
		}else{
			return <ACDealDetailsLink />
		}
	
	}
});

module.exports = ACDealDetailsLinkContainer;
