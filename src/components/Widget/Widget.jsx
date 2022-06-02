import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Widget = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            style={{
              color: "crimson",
              backgroundColor: "rgba(255 , 0, 0, 0.2)",
              width: "30px",
              height: "30px",
            }}
            className="p-1 rounded-lg"
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <ShoppingCartOutlined
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218 , 165, 32, 0.2)",
              width: "30px",
              height: "30px",
            }}
            className="p-1 rounded-lg"
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlined
            style={{
              color: "green",
              backgroundColor: "rgba(0 , 128, 0, 0.2)",
              width: "30px",
              height: "30px",
            }}
            className="p-1 rounded-lg"
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See totals",
        icon: (
          <AccountBalanceWalletOutlined
            style={{
              color: "purple",
              backgroundColor: "rgba(128 , 0, 128, 0.2)",
              width: "30px",
              height: "30px",
            }}
            className="p-1 rounded-lg"
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-1 justify-between p-2 shadow-card rounded-md h-36">
      <div className="flex flex-col justify-between">
        <span className="font-bold text-gray-400 text-sm">{data.title}</span>
        <span className="font-thin text-4xl">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="text-lg border-b border-b-gray-400">{data.link}</span>
      </div>

      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center text-sm positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        <div className="self-end">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
