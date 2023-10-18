import Status from "./components/Status";
import ApproveButton from "./components/ApproveButton";
import MissingButton from "./components/MissingButton";
import EditButton from "./components/EditButton";
import { TableImage } from "./components/Images";

export const Columns = (handleProductApproval, handleProductMissing) => [
  {
    Header: "",
    accessor: "icon",
    Cell: ({ cell: { value } }) => <TableImage value={value} />,
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
      return <Status status={cell.row.values.status} />;
    },
  },
  {
    Header: "",
    accessor: "approve",
    Cell: ({ cell }) => {
      return (
        <ApproveButton
          id={cell.row.id}
          handleClick={handleProductApproval}
          imageValue={cell.row.values.approve}
        />
      );
    },
  },
  {
    Header: "",
    accessor: "missing",
    Cell: ({ cell }) => {
      return (
        <MissingButton
          id={cell.row.id}
          handleClick={handleProductMissing}
          imageValue={cell.row.values.missing}
        />
      );
    },
  },
  {
    Header: "",
    accessor: "edit",
    Cell: ({ cell }) => (
      <EditButton value={cell.row.values.edit} product={cell.row.original} />
    ),
  },
];
