import styled from "./Todo.module.css";
import { useNavigate } from "react-router-dom";
// 리덕스
import { useDispatch } from "react-redux";
import { deleteWork, toAnotherList } from "../../redux/modules/workList";

const Todo = ({ work, buttonText }) => {
  // action 사용을 위해 dispatch hook 받아오기
  const dispatch = useDispatch();
  // id값과 일치하는 링크로 보내기 위해 navigate 사용
  const navigate = useNavigate();

  // 클릭시 Done 값을 변경해주는 action으로 dispatch해주기, payload는 id값
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
          // 삭제하는 action type으로 dispatch, payload는 id 값
          onClick={() => {
            dispatch(deleteWork(work.id));
          }}
        >
          삭제하기
        </button>
        <button
          className={styled.button}
          // 주의! 즉시 실행 되지 않도록 꼭 callback 형식으로 사용
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
