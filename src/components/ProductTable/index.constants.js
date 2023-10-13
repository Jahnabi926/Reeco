import { Img, ButtonImg, Button } from "../../styles/StyledComponents";
import Status from "./components/Status";

export const Columns = (handleProductApproval, handleProductMissing) => [
  {
    Header: "",
    accessor: "icon",
    Cell: ({ cell: { value } }) => (
      <div>
        <Img src={require("../../images/" + value)} alt={value} />
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
      return <Status status={cell.row.values.status} />;
    },
  },
  {
    Header: "",
    accessor: "approve",
    Cell: ({ cell }) => {
      const id = cell.row.id;
      const approveImage = require("../../images/" + cell.row.values.approve);
      return (
        <div>
          <Button value={id} onClick={() => handleProductApproval(id)}>
            <ButtonImg src={approveImage} alt={cell.row.values.approve} />
          </Button>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "missing",
    Cell: ({ cell }) => {
      const id = cell.row.id;
      const missingImage = require("../../images/" + cell.row.values.missing);
      return (
        <div>
          <Button value={id} onClick={() => handleProductMissing(id)}>
            <ButtonImg src={missingImage} alt={cell.row.values.missing} />
          </Button>
        </div>
      );
    },
  },
  // {
  //   Header: "",
  //   accessor: "edit",
  //   Cell: ({ cell }) => (
  //     <div>
  //       <Button value={cell.row.values.edit}>{cell.row.values.edit}</Button>
  //     </div>
  //   ),
  // },
];
