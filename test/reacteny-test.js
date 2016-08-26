import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {renderIntoDocument} from 'react-addons-test-utils';

import ExampleApplication from '../lib/index';
import {} from 'E:\WD\osc7.8\Dell.Solution.OSC.UI\Resources\Composer\Header\components';


describe("A suite", function() {
  it("MyComp contains message with expect", function() {
    const wrapper = shallow(<ExampleApplication/>);
    expect(wrapper.contains('Hello World')).to.equal(true);
   
  });
  it("should render",function(){
  	const item = renderIntoDocument(<ExampleApplication/>);

  	expect(item).toExist;
  })
 
  
});