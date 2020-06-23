import {
  SEARCH_PROJECTS,
  SET_LOADING,
  GET_COMMUNITY_PROJECTS
} from '../types';

export default (state, action ) => {
  switch(action.type){
    case SEARCH_PROJECTS:
      return {
        projects: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}