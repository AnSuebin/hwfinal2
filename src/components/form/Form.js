// 인풋창이 있는 Form 페이지
// 인풋은 useState로 관리해줬음 (전역이 아니기 떄문)
import { useState } from "react";
import styled from "./Form.module.css";
// 리덕스 관련
import { useDispatch } from "react-redux";
import { addWork } from "../../redux/modules/workList";

const Form = () => {
  // useState로 Input 관리
  const [formValue, setFormValue] = useState({ title: "", content: "" });
  // action으로 넘기기 위해 dispatch 사용
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    event.preventDefault();
    let { value, id } = event.target;
    // 값을 받아 넣어줌
    setFormValue({ ...formValue, [id]: value });
  };

  return (
    <div className={styled.inputContainer}>
      <form>
        <label htmlFor="title" className={styled.lable}>
          제목
        </label>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력해주세요"
          className={styled.input}
          onChange={inputChangeHandler}
          value={formValue.title}
        ></input>
        <label htmlFor="content" className={styled.lable}>
          내용
        </label>
        <input
          type="text"
          id="content"
          placeholder="내용을 입력해주세요"
          className={styled.input}
          onChange={inputChangeHandler}
          value={formValue.content}
        ></input>
      </form>
      <button
        className={styled.addButton}
        // dispatch로 addWork type값과 props로 payload 넘겨줌
        onClick={() => {
          dispatch(addWork(formValue));
          setFormValue({ title: "", content: "" });
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default Form;
