import React from "react";
import mockData from "./MOCK_DATA.json";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const IMG = styled.img`
  width: 40px;
`;
const ButtonImg = styled.img`
  width: 20px;
`;

console.log(mockData);
const App = (props) => {
  const data = React.useMemo(() => mockData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "icon",
        Cell: ({ cell: { value } }) => (
          <div>
            <IMG src={require("./images/" + value)} alt={value} />
          </div>
        ),
      },
      { Header: "Product name", accessor: "product_name" },
      { Header: "Brand", accessor: "brand" },
      { Header: "Price", accessor: "price" },
      { Header: "Quantity", accessor: "quantity" },
      { Header: "Total", accessor: "total" },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "approve",
        Cell: ({ cell: { value } }) => (
          <div>
            <button value={data.approve} onClick={props.handleProductApproval}>
              <ButtonImg src={require("./images/" + value)} alt={value} />
            </button>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "missing",
        Cell: ({ cell: { value } }) => (
          <div>
            <button value={data.missing} onClick={props.handleProductMissing}>
              <ButtonImg src={require("./images/" + value)} alt={value} />
            </button>
          </div>
        ),
      },
      {
        Header: "",
        accessor: "edit",
        Cell: ({ cell }) => (
          <div>
            <button value={cell.row.values.edit}>{cell.row.values.edit}</button>
          </div>
        ),
      },
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
