import React from "react";
import mockData from "./MOCK_DATA.json";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { approveProduct, rejectProduct } from "../src/redux/actions";

const IMG = styled.img`
  width: 40px;
`;
const ButtonImg = styled.img`
  width: 20px;
`;

const Status = ({ status }) => {
  return <p>{status}</p>;
};

const App = () => {
  const colors = useSelector((state) => state.colors);

  const dispatch = useDispatch();

  const handleProductApproval = (id) => {
    dispatch(approveProduct(id));
  };

  const handleProductMissing = (id) => {
    dispatch(rejectProduct(id));
  };

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
        Cell: ({ cell }) => {
          const status = useSelector((state) => state.status);

          return <Status status={status} />;
        },
      },
      {
        Header: "",
        accessor: "approve",
        Cell: ({ cell }) => {
          const id = cell.row.id;
          const approveImage = require("./images/" + cell.row.values.approve);
          return (
            <div>
              <button value={id} onClick={() => handleProductApproval(id)}>
                <ButtonImg src={approveImage} alt={cell.row.values.approve} />
              </button>
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "missing",
        Cell: ({ cell }) => {
          const id = cell.row.id;
          const missingImage = require("./images/" + cell.row.values.missing);
          return (
            <div>
              <button value={id} onClick={() => handleProductMissing(id)}>
                <ButtonImg src={missingImage} alt={cell.row.values.missing} />
              </button>
            </div>
          );
        },
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
