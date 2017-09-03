import expect from 'expect';
import * as courseActions from './courseAction';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions Test', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            // arrange
            const course = { id: 'react-and-redux', title: 'React and Redux' };
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course
            };

            // act
            const action = courseActions.createCourseSuccess(course);

            // assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', (done) => {
        // Example to call nock
        // nock('http://example.com')
        //     .get('/route')
        //     .reply(200, { body: { prop1: '1' } }); 

        const expectedActions = [
            { type: types.BEGIN_AJAX_CALL },
            { type: types.LOAD_COURSES_SUCCESS, body: { courses: [{ id: 'react-and-redux', title: 'React and Redux' }] } }
        ];

        const store = mockStore({ courses: [] }, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => { 
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });

    });
});