import * as types from './actionTypes';
import CourseAPI from '../api/mockCourseAPI';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusAction';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course: course };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course: course };
}

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return CourseAPI.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(err => {
                throw (err);
            });
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return CourseAPI.saveCourse(course).then(savedCourse => {
            course.id ?
                dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}