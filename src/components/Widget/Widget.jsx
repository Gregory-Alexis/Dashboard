import { KeyboardArrowUp } from "@mui/icons-material";

const Widget = () => {
  return (
    <div className="flex flex-1 justify-between p-2 shadow-md rounded-md h-48">
      <div>
        <span>USERS</span>
        <span>2134</span>
        <span>See all users</span>
      </div>

      <div>
        <KeyboardArrowUp />
        <div>20%</div>
      </div>
    </div>
  );
};

export default Widget;
