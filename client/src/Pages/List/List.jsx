import Datatable from "../../components/Datatable/Datatable";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";

const List = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-6">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
