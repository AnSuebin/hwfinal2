import { useState } from "react";
import styled from "./Form.module.css";
import { useDispatch } from "react-redux";
import { addWork } from "../../redux/modules/workList";

const Form = () => {
  const [formValue, setFormValue] = useState({ title: "", content: "" });
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    event.preventDefault();
    let { value, id } = event.target;
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
