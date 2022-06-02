import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="flex-2 justify-between p-2 shadow-card rounded-md ">
      <div className="flex items-center justify-between text-gray-400">
        <h1 className="text-bas font-semibold">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="p-5 flex flex-col items-center justify-center gap-2">
        <div className="w-28 h-28">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="font-semibold text-gray-400">Total sales made today</p>
        <p className="text-lg">$420</p>
        <p className="font-light text-base text-gray-600 text-center">
          Previous transaction processing. Last payments may not be included
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="text-center">
            <div className="text-base text-gray-400 font-semibold">Target</div>
            <div className="flex items-center text-sm mt-2 negative">
              <KeyboardArrowDown fontSize="small" />
              <div>$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-base text-gray-400 font-semibold">
              Last Week
            </div>
            <div className="flex items-center text-sm mt-2 positive">
              <KeyboardArrowUp fontSize="small" />
              <div>$12.4k</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-base text-gray-400 font-semibold">
              Last Month
            </div>
            <div className="flex items-center text-sm mt-2 positive">
              <KeyboardArrowUp fontSize="small" />
              <div>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
