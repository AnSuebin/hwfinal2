// id로 변경 필요
import uuid from "react-uuid";

const ADD_WORK = "ADD_WORK";
const DELETE_WORK = "DELETE_WORK";
const TO_ANOTHER_LIST = "TO_ANOTHER_LIST";

// Action Creator
export const addWork = (payload) => {
  return {
    type: ADD_WORK,
    payload,
  };
};

export const deleteWork = (payload) => {
  return {
    type: DELETE_WORK,
    payload,
  };
};

export const toAnotherList = (payload) => {
  return {
    type: TO_ANOTHER_LIST,
    payload,
  };
};

// 초기값
const initialState = {
  working: [],
};

// 리듀서
const workList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORK:
      return {
        working: [
          ...state.working,
          {
            id: uuid(),
            title: action.payload.title,
            content: action.payload.content,
            done: false,
          },
        ],
      };
    case DELETE_WORK:
      return {
        working: state.working.filter((work) => {
          return work.id !== action.payload;
        }),
      };
    case TO_ANOTHER_LIST:
      return {
        working: [
          ...state.working.map((work) =>
            work.id === action.payload ? { ...work, done: !work.done } : work
          ),
        ],
      };

    default:
      return state;
  }
};

export default workList;
