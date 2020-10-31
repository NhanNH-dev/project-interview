import * as type from './types';

export function getPosts(){
  return {
    type: type.FETCH_POST,
  }
}
export function searchTitle(value){
  return {
    type: type.SEARCH_TITLE,
    payload: value
  }
}
export function createNewPost(content){
  return {
    type: type.CREATE_NEW_POST,
     content
  }
}
export function deletePost(id){
  return {
    type: type.DELETE_POST,
     id
  }
}
export function getPostDetail(id){
  return {
    type: type.GET_POST_DETAIL,
     id
  }
}
