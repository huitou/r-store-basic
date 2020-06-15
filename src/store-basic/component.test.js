/*
    Store Basic Test.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { shallow } from "enzyme";

import StoreBasic from './component';

describe('StoreBasic,', () => {
    describe('when mounted, externally', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<StoreBasic />);
        })

        it('has an undefined store', () => {
            expect(wrapper.instance().store()).not.toBeDefined();
        });

        it('may merge data into named portion of the store', () => {
            wrapper.instance().merge('p1', { whatever: 'whatever_1' });
            wrapper.instance().merge('p1', { whatever: 'whatever_2', else: 'else' });
            expect(wrapper.instance().store()).toEqual({
                p1: {
                    whatever: 'whatever_2',
                    else: 'else'
                }
            });
        });

        it('may merge data into more named portions of the store', () => {
            wrapper.instance().merge('p1', { whatever: 'whatever_1' });
            wrapper.instance().merge('p2', { whatever: 'whatever_2' });
            expect(wrapper.instance().store()).toEqual({
                p1: { whatever: 'whatever_1' },
                p2: { whatever: 'whatever_2' }
            });
        });

        it('may clear the store', () => {
            wrapper.instance().merge('p1', { whatever: 'whatever' });
            expect(wrapper.instance().store()).toEqual({ p1: { whatever: 'whatever' } });
            wrapper.instance().clear();
            expect(wrapper.instance().store()).not.toBeDefined();
        });
    });

    describe('when mounted, internally', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<StoreBasic />);
        })

        it('has an undefined store state', () => {
            expect(wrapper.state().store).not.toBeDefined();
        });

        it('merges data into named portion of store state', () => {
            wrapper.instance().merge('p1', { whatever: 'whatever_1' });
            expect(wrapper.state().store).toEqual({ p1: { whatever: 'whatever_1' } });
        });

        it('merges data into more named portions of store state', () => {
            wrapper.instance().merge('p1', { whatever: 'whatever_1' });
            wrapper.instance().merge('p2', { whatever: 'whatever_2' });
            expect(wrapper.state().store).toEqual({
                p1: { whatever: 'whatever_1' },
                p2: { whatever: 'whatever_2' }
            });
        });

        it('clears store state', () => {
            wrapper.instance().merge('p1', { whatever: 'whatever' });
            expect(wrapper.instance().store()).toEqual({ p1: { whatever: 'whatever' } });
            wrapper.instance().clear();
            expect(wrapper.state().store).not.toBeDefined();
        });
    });
});
