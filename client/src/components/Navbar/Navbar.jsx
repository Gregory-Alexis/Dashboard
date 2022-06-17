import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Avatar from "../../images/avatar.jpg";

const Navbar = () => {
  return (
    <div className="h-16 border-b-2 border-b-gray-200 text-xl p-4">
      <div className="flex justify-between">
        <div>
          <input
            placeholder="Search..."
            className="outline-none shadow-search pl-4"
          />
          <SearchOutlinedIcon />
        </div>
        <div className="flex">
          <div className="item">
            <LanguageOutlinedIcon
              className="mr-2"
              style={{ fontSize: "20px" }}
            />
            <span className="text-base">English</span>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon style={{ fontSize: "20px" }} />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon style={{ fontSize: "20px" }} />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon style={{ fontSize: "20px" }} />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
          </div>
          <div className="item">
            <ListOutlinedIcon style={{ fontSize: "20px" }} />
          </div>
          <div className="item">
            <img
              src={Avatar}
              alt="profile"
              className="w-10 h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
