import styled from "./App.module.css";
import Router from "./Router";

// App에서 router를 받아오는 형태
function App() {
  return (
    <div className={styled.container}>
      <Router />
    </div>
  );
}

export default App;
