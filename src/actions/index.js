// action types
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const EDIT = "EDIT";
export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

// actions creator functions
export const addToList = (itemId, name, date, time, memo) => {
  return {
    type: ADD_TO_LIST,
    payload: {
      itemId,
      name,
      date,
      time,
      memo
    }
  }
}

export const removeFromList = (itemId) => {
  return {
    type: REMOVE_FROM_LIST,
    payload: {
      itemId
    }
  }
}

export const edit = (itemId, name, date, time, memo) => {
  return {
    type: EDIT,
    payload: {
      itemId,
      name,
      date,
      time,
      memo
    }
  }
}

export const notify = (message, dismissTime = 5000) => dispatch => {
  const uuid = Math.random()
  dispatch(enqueueNotification(message, dismissTime, uuid))
  setTimeout(() => {
    dispatch(dequeueNotification())
  }, dismissTime)
}

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid
    }
  }
}

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION
  }
}