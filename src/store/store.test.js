import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseAction';

describe('Store test', () => { 
    it('should handle creating courses', () => { 
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title:'React and Redux'
        };

        // act 
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // assert
        const actual = store.getState().courses[0];
        const expected = {
            title: 'React and Redux'
        };

        expect(actual).toEqual(expected);
    });
});