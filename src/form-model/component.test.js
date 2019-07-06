import React from 'react';
import { shallow } from "enzyme";

import FormModel from './component';

describe('FormModel', () => {
    describe('when mounted,', () => {
        
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<FormModel />);
        })
        afterEach(() => {
            // jest.clearAllMocks();
        });

        it('has ...', () => {
            expect(wrapper.text()).toBe('ToBeDeveloped');
        });
    });

});