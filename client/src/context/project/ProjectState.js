import React, { useContext, useReducer } from 'react';
import axios from 'axios';
import ContactContext from './projectContext';
import contactReducer from './projectReducer';

import {
  GET_USER,
  CLEAR_USER,
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_CURRENT,
  SHOW_PROJECT,
  SHOW_PROJECTREQ,
  SET_REQUIRED,
  CLEAR_CURRENT,
  UPDATE_PROJECT,
  UPDATE_PROFILE,
  FILTER_PROJECTS,
  CLEAR_FILTER,
  PROJECT_ERROR,
} from '../types';

const ProjectState = (props) => {
  const initialState = {
    profile: [],
    projectary: [],
    requiredary: [],
    projects: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //get User
  const getUser = async () => {
    try {
      const res = await axios.get('/api/users/me');

      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.data,
      });
    }
  };

  //clear user
  const clearUser = () => {
    dispatch({
      type: CLEAR_USER,
    });
  };

  //add project
  const addProject = async (project) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        '/api/user_projects/create_project',
        project,
        config
      );
      dispatch({
        type: ADD_PROJECT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.data,
      });
    }
  };

  //show project array
  const showProject = async () => {
    try {
      const res = await axios.get('/get_projects');

      dispatch({
        type: SHOW_PROJECT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.data,
      });
    }
  };

  //show required array
  const showProjectreq = async () => {
    try {
      const res = await axios.get('/api/requirement/');

      dispatch({
        type: SHOW_PROJECTREQ,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.data,
      });
    }
  };

  //delete project
  const deleteProject = async (id) => {
    try {
      await axios.delete(`/api/user_projects/delete_project/${id}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //set current project
  const setCurrent = (project) => {
    dispatch({
      type: SET_CURRENT,
      payload: project,
    });
  };

  //set current required project
  const setCurrentreq = (project) => {
    dispatch({
      type: SET_REQUIRED,
      payload: project,
    });
  };

  //clear current project
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  //update project
  const updateProject = ([project]) => {
    dispatch({
      type: UPDATE_PROJECT,
      payload: project,
    });
  };

  //update profile
  const updateProfile = () => {};

  //filter projects
  const filterProject = () => {};

  //clear filter
  const clearFilter = () => {};

  return (
    <ContactContext.Provider
      value={{
        profile: state.profile,
        projectary: state.projectary,
        requiredary: state.requiredary,
        projects: state.projects,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addProject,
        showProject,
        showProjectreq,
        getUser,
        deleteProject,
        setCurrent,
        setCurrentreq,
        clearCurrent,
        updateProject,
        filterProject,
        clearFilter,
        clearUser,
        updateProfile,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ProjectState;
