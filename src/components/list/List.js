import styled from "./List.module.css";
import Todo from "../todo/Todo";
// 리덕스 관련
import { useSelector } from "react-redux";

const List = () => {
  // store를 통해 state 값 받아옴
  const working = useSelector((state) => {
    return state.workList.working;
  });

  console.log(working);

  return (
    <>
      <div className={styled.container}>
        <h3>Working..🔥</h3>
        <div className={styled.workingsContainer}>
          {/* state로 받아온 값을 filter로 done의 상황에 따라 거른 후,
          Todo 컴포넌트 활용 map 돌려주기 */}
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
          {/* state로 받아온 값을 filter로 done의 상황에 따라 거른 후,
          Todo 컴포넌트 활용 map 돌려주기 */}
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
