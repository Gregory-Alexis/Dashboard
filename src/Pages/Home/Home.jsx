import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import Table from "../../components/Table/Table";
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
          <Featured />
          <Chart aspect={2 / 1} title="Revenues des 6 derniers mois" />
        </div>
        <div className="p-2 m-4 shadow-card">
          <div className="font-semibold  mb-5">Dernière transaction</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
