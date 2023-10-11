import React from "react";
import mockData from "./MOCK_DATA.json";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const IMG = styled.img`
width: 50px;
backgroundColor: rgba(255, 255, 255, 0.2);`

console.log(mockData);
const App = () => {
  const data = React.useMemo(() => mockData, []);
  const columns = React.useMemo(
    () => [
      { Header: "", accessor: "icon", Cell: ({cell: {value}}) => (
        <div><IMG src={require("./images/" + value)} alt={value}/></div>
      ) },
      { Header: "Product name", accessor: "product_name" },
      { Header: "Brand", accessor: "brand" },
      { Header: "Price", accessor: "price" },
      { Header: "Quantity", accessor: "quantity" },
      { Header: "Total", accessor: "total" },
      { Header: "Status", accessor: "status" },
    ],
    []
  );
  return (
    <div className="container">
      <Navbar />
      <Table columns={columns} data={data} />
    </div>
  );
};
export default App;
