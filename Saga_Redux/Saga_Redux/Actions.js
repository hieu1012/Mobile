export const ADD_JOB = 'ADD_JOB';
export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';

export const addJob = (job) => ({
  type: ADD_JOB,
  payload: job,
});

export const addJobSuccess = (job) => ({
  type: ADD_JOB_SUCCESS,
  payload: job,
});