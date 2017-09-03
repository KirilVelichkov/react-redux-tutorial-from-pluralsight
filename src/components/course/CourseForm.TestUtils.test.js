import expect from 'expect';
import React from 'react';
import TestUitls from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
    let props = {
        course: {},
        saving,
        error: {},
        onSave: () => { },
        onChange: () => { }
    };

    let renderer = TestUitls.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm Tests with TestUtils', () => {
    it('renders from and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');
        let [h1] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button text == "Save" when not saving', () => { 
        const { output } = setup(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button text == "Saving..." when saving', () => {
        const { output } = setup(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
});