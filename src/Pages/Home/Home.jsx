import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import Widget from "../../components/Widget/Widget";

const Home = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-6">
        <Navbar />
        <div className="flex p-4 gap-5">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="flex py-2 px-6 gap-5">
          <Featured className="flex-5" />
          <Chart className="flex-2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
