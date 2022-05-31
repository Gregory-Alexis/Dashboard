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
          <Widget />
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
