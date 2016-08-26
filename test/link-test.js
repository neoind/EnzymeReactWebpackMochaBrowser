import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {renderIntoDocument} from 'react-addons-test-utils';

import ACDealDetailsLinkContainer from '../lib/Link';



describe("A suite", function() {
  it("link details comp got handled", function() {
    const wrapper = shallow(<ACDealDetailsLinkContainer/>);
    // expect(wrapper.contains('Hello World')).to.equal(true);

    // const item = renderIntoDocument(<ExampleApplication/>);

  	expect(wrapper).toExist;
   
  });
  // it("should render",function(){
  // 	const item = renderIntoDocument(<ExampleApplication/>);

  // 	expect(item).toExist;
  // })
 
  
});