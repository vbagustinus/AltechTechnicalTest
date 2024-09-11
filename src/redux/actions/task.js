import {getItem, setItem} from '../../helpers/async';
import {
  DELETE_DATA_FAILED,
  DELETE_DATA_SUCCESS,
  GET_DATA_LIST_FAILED,
  GET_DATA_LIST_SUCCESS,
  SET_DATA_DONE_FAILED,
  SET_DATA_DONE_SUCCESS,
  SET_DATA_LIST_FAILED,
  SET_DATA_LIST_SUCCESS,
} from './types';

export const getListTask = () => async dispatch => {
  try {
    const listTask = await getItem('listTask');
    const listTaskJSON = listTask ? JSON.parse(listTask) : [];
    dispatch({
      type: GET_DATA_LIST_SUCCESS,
      payload: {list: listTaskJSON},
    });
  } catch (error) {
    dispatch({
      type: GET_DATA_LIST_FAILED,
      payload: {list: []},
    });
  }
};

export const setListTask = list => dispatch =>
  new Promise(async function (resolve, reject) {
    try {
      const listTask = await getItem('listTask');
      if (listTask) {
        let converToJSON = JSON.parse(listTask);
        converToJSON.push(list);
        const stringlistTask = JSON.stringify(converToJSON);
        setItem('listTask', stringlistTask);
      } else {
        const stringlistTask = JSON.stringify([list]);
        setItem('listTask', stringlistTask);
      }
      dispatch({
        type: SET_DATA_LIST_SUCCESS,
        payload: {},
      });
      resolve('success');
    } catch (error) {
      dispatch({
        type: SET_DATA_LIST_FAILED,
        payload: {},
      });
      reject(error);
    }
  });

export const removeItemTaskById = id => dispatch =>
  new Promise(async function (resolve, reject) {
    try {
      const listTask = await getItem('listTask');
      if (listTask) {
        let converToJSON = JSON.parse(listTask);
        let result = converToJSON.filter(item => item.id !== id);
        const stringlistTask = JSON.stringify(result);
        setItem('listTask', stringlistTask);
      }
      dispatch({
        type: DELETE_DATA_SUCCESS,
        payload: {},
      });
      resolve('success');
    } catch (error) {
      dispatch({
        type: DELETE_DATA_FAILED,
        payload: {},
      });
      reject(error);
    }
  });

export const setTaskDoneById = id => dispatch =>
  new Promise(async function (resolve, reject) {
    try {
      const listTask = await getItem('listTask');
      let taskDone = {};
      if (listTask) {
        let converToJSON = JSON.parse(listTask);
        let tmpTask = [];
        converToJSON.forEach(element => {
          if (element.id === id) {
            element.completed = true;
            tmpTask.push(element);
            taskDone = element;
          } else {
            tmpTask.push(element);
          }
        });
        const stringlistTask = JSON.stringify(tmpTask);
        setItem('listTask', stringlistTask);
      }
      dispatch({
        type: SET_DATA_DONE_SUCCESS,
        payload: {},
      });
      resolve(taskDone);
    } catch (error) {
      dispatch({
        type: SET_DATA_DONE_FAILED,
        payload: {},
      });
      reject(error);
    }
  });
