// id로 변경 필요
// import uuid from "react-uuid";
const ADD_WORK = "worklist/ADD_WORK";
const DELETE_WORK = "worklist/DELETE_WORK";
const TO_ANOTHER_LIST = "worklist/TO_ANOTHER_LIST";

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
        // 추가하는 값을 뒤에 넣어 덮어 씌워주기
        working: [...state.working, action.payload],
      };
    case DELETE_WORK:
      // 삭제하는 것을 빼내주기
      return {
        working: state.working.filter((work) => {
          return work.id !== action.payload;
        }),
      };
    case TO_ANOTHER_LIST:
      // DONE 값을 받아온 id 값으로 true, false로 변경해주기
      // id와 받아온 id가 같다면, 기존 내용에 done 값만 반대값으로 변경해주기, 아니면 기존값
      return {
        working: state.working.map((work) =>
          work.id === action.payload ? { ...work, done: !work.done } : work
        ),
      };

    default:
      return state;
  }
};

export default workList;
