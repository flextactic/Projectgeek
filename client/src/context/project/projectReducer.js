import {
  GET_USER,
  CLEAR_USER,
  GET_PROJECT,
  GET_REQUIRED,
  CLEAR_PROJECT,
  CLEAR_REQUIRED,
  ADD_PROJECT,
  SHOW_PROJECT,
  SHOW_PROJECTREQ,
  DELETE_PROJECT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROJECT,
  UPDATE_PROFILE,
  FILTER_PROJECTS,
  CLEAR_FILTER,
  PROJECT_ERROR,
  SET_REQUIRED,
} from '../types';

const error = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_REQUIRED:
      return {
        ...state,
        required: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case SHOW_PROJECT:
      return {
        ...state,
        projectary: action.payload,
      };
    case SHOW_PROJECTREQ:
      return {
        ...state,
        requiredary: action.payload,
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project._id === action.payload._id ? action.payload : project
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
      };
    case CLEAR_USER:
      return {
        ...state,
        profile: null,
        projects: null,
        filtered: null,
        error: null,
        current: null,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: [...state.profile, action.payload],
      };
    case SET_CURRENT:
    case SET_REQUIRED:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case FILTER_PROJECTS:
      return {
        ...state,
        filtered: state.contacts.filter((project) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return project.name.match(regex) || project.email.match(regex);
        }),
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default error;
