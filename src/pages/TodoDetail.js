import styled from "./TodoDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TodoDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const working = useSelector((state) => {
    return state.workList.working;
  });

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
            {/* <hr className={styled.line} /> */}
            <h5 className={styled.title}>{work.title}</h5>
            <p className={styled.content}>{work.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoDetail;
