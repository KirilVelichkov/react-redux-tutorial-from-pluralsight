import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {},
        saving,
        error: {},
        onSave: () => { },
        onChange: () => { }
    };

    return shallow(<CourseForm {...props}/> )
}

describe('CourseForm Tests with Enzyme', () => {
    it('renders from and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });
 
    it('save button text == "Save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button text == "Saving..." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});