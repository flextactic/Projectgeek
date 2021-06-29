import React, { useContext, useReducer } from 'react';
import axios from 'axios';
import ContactContext from './projectContext';
import contactReducer from './projectReducer';

import {
  GET_USER,
  CLEAR_USER,
  GET_PROJECT,
  GET_REQUIRED,
  CLEAR_PROJECT,
  CLEAR_REQUIRED,
  ADD_PROJECT,
  DELETE_PROJECT,
  DELETE_REQUIRED,
  SET_CURRENT,
  SHOW_PROJECT,
  SHOW_PROJECTREQ,
  SET_REQUIRED,
  CLEAR_CURRENT,
  UPDATE_PROJECT,
  UPDATE_PROFILE,
  UPDATE_REQUIRED,
  FILTER_PROJECTS,
  CLEAR_FILTER,
  PROJECT_ERROR,
  FETCH_ERROR,
} from '../types';

const ProjectState = (props) => {
  const initialState = {
    profile: null,
    projectary: [],
    requiredary: [],
    projects: [],
    required: [],
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

  //get projects
  const getProject = async () => {
    try {
      const res = await axios.get('/my_project');

      dispatch({
        type: GET_PROJECT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FETCH_ERROR,
        payload: err.response.data,
      });
    }
  };

  //get required
  const getRequired = async () => {
    try {
      const res = await axios.get('/api/requirement/me');

      dispatch({
        type: GET_REQUIRED,
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
      const res = await axios.get('/api/requirement/projects');

      dispatch({
        type: SHOW_PROJECTREQ,
        payload: res.data,
      });
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch({
          type: PROJECT_ERROR,
          payload: err.response.data,
        });
      }
    }
  };

  //delete project
  const deleteProject = async (id) => {
    try {
      await axios.delete(`/delete_project/${id}`);

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

  //delete required
  const deleteRequired = async (id) => {
    try {
      await axios.delete(`/api/requirement/delete/${id}`);

      dispatch({
        type: DELETE_REQUIRED,
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
  const updateProject = async (project) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.put(`/update_project/${project._id}`, project, config);
      dispatch({
        type: UPDATE_PROJECT,
        payload: project,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //update required
  const updateRequired = async (project) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios.put('/api/requirement/update', project, config);
      dispatch({
        type: UPDATE_REQUIRED,
        payload: project,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //update profile
  const updateProfile = (profile) => {
    dispatch({
      type: UPDATE_PROJECT,
      payload: profile,
    });
  };

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
        required: state.required,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addProject,
        showProject,
        showProjectreq,
        getUser,
        getProject,
        getRequired,
        deleteProject,
        deleteRequired,
        setCurrent,
        setCurrentreq,
        clearCurrent,
        updateProject,
        updateRequired,
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
