import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar = () => {
  return (
    <div className="flex-1 border-r border-gray-200 min-h-screen">
      <div className="flex items-center justify-center h-16 border-b-2 border-gray-200">
        <span className="text-xl font-bold text-primary">Greg</span>
      </div>

      <div className="pl-4">
        <ul>
          <h1 className="title">MAIN</h1>
          <li className="list">
            <DashboardIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">DashBoard</span>
          </li>
          <h1 className="title">LIST</h1>
          <li className="list">
            <PersonOutlineIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Users</span>
          </li>
          <li className="list">
            <StoreIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Products</span>
          </li>
          <li className="list">
            <CreditCardIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Orders</span>
          </li>
          <li className="list">
            <LocalShippingIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Delivery</span>
          </li>
          <h1 className="title">USEFUL</h1>
          <li className="list">
            <InsertChartIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Stats</span>
          </li>
          <li className="list">
            <NotificationsIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Notifications</span>
          </li>
          <h1 className="title">SERVICE</h1>
          <li className="list">
            <SettingsSystemDaydreamIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">System Health</span>
          </li>
          <li className="list">
            <PsychologyIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Logs</span>
          </li>
          <li className="list">
            <SettingsIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Settings</span>
          </li>
          <h1 className="title">USER</h1>
          <li className="list">
            <AccountCircleIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Profile</span>
          </li>
          <li className="list">
            <LogoutIcon
              style={{ fontSize: "20px" }}
              className="text-purple-500"
            />
            <span className="listTitle">Logout</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center m-3">
        <div className="colorOption bg-gray-200"></div>
        <div className="colorOption bg-gray-800"></div>
      </div>
    </div>
  );
};

export default SideBar;
