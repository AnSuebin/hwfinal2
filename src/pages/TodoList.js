import Form from "../components/form/Form";
import List from "../components/list/List";
import Layout from "../components/layout/Layout";

const TodoList = () => {
  return (
    <>
      <Layout>
        <Form />
        <List />
      </Layout>
    </>
  );
};

export default TodoList;
