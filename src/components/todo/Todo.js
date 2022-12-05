import styled from "./Todo.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteWork, toAnotherList } from "../../redux/modules/workList";

const Todo = ({ work, buttonText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickWorkToDoneHandler = (id) => {
    dispatch(toAnotherList(id));
  };

  return (
    <div className={styled.container} key={work.id}>
      <button
        className={styled.detailButton}
        onClick={() => {
          navigate(`/todo/${work.id}`);
        }}
      >
        상세 보기
      </button>
      <h3 className={styled.title}>#{work.title}</h3>
      <hr className={styled.line} />
      <p className={styled.context}>{work.content}</p>
      <div className={styled.buttonContainer}>
        <button
          className={styled.button}
          onClick={() => {
            dispatch(deleteWork(work.id));
          }}
        >
          삭제하기
        </button>
        <button
          className={styled.button}
          onClick={() => {
            onClickWorkToDoneHandler(work.id);
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Todo;
