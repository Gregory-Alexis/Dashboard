import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="flex-2 justify-between p-3 shadow-card rounded-md ">
      <div className="flex items-center justify-between text-gray-500">
        <h1 className="text-lg font-semibold">Total Revenue</h1>
        <MoreVert fontSize="medium" />
      </div>
      <div className="pt-8 flex flex-col items-center justify-center gap-6">
        <div className="w-40 h-40">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="font-semibold text-gray-400">Total sales made today</p>
        <p className="text-5xl">$420</p>
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
