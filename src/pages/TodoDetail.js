import styled from "./TodoDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";
// 리덕스
import { useSelector } from "react-redux";

const TodoDetail = () => {
  // 뒤의 id값을 받아오기 위해서 useParams 사용
  const params = useParams();
  // 뒤돌아 가는 것을 처리해 주기위해 useNavigate 사용
  const navigate = useNavigate();
  // 리덕스에서 상태값 받아오기
  const working = useSelector((state) => {
    return state.workList.working;
  });

  // 받아온 상태값에 필요한 값만 filter 해주기
  let work = working.filter((work) => {
    return work.id === params.id;
  });

  return (
    <div className={styled.container}>
      {work.map((work) => {
        return (
          <div className={styled.box} key={params.id}>
            <div className={styled.header}>
              <p className={styled.id}>id : {work.id}</p>
              <button
                className={styled.button}
                onClick={() => {
                  navigate(-1);
                }}
              >
                이전으로
              </button>
            </div>
            <h5 className={styled.title}>{work.title}</h5>
            <p className={styled.content}>{work.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoDetail;
