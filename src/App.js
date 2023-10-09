import React from "react";
import Table from "./components/Table";

const App = () => {
  const data = React.useMemo(
    () => [
      { id: 1, name: "John Doe", age: 28 },
      { id: 2, name: "Jane Smith", age: 32 },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age" },
    ],
    []
  );
  return (
    <div>
      <h1>React Table Example</h1>
      <Table columns={columns} data={data} />
    </div>
  );
};
export default App;
