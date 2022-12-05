import styled from "./List.module.css";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";

const List = () => {
  const working = useSelector((state) => {
    return state.workList.working;
  });

  return (
    <>
      <div className={styled.container}>
        <h3>Working..🔥</h3>
        <div className={styled.workingsContainer}>
          {working
            .filter((work) => {
              return work.done === false;
            })
            .map((work) => (
              <Todo work={work} key={work.id} buttonText="완료"></Todo>
            ))}
        </div>
      </div>
      <div className={styled.container}>
        <h3>Done..!🎉</h3>
        <div className={styled.workingsContainer}>
          {working
            .filter((work) => {
              return work.done === true;
            })
            .map((work) => (
              <Todo work={work} key={work.id} buttonText="취소"></Todo>
            ))}
        </div>
      </div>
    </>
  );
};

export default List;
