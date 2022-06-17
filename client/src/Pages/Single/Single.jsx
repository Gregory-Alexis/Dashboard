import Sidebar from "../../components/Sidebar/SideBar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";

const Single = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-6">
        <Navbar />
        <div className="flex p-2 gap-3">
          <div className="flex-1 shadow-card p-2 relative">
            <div className="absolute top-0 right-0 p-2 text-primary bg-purple-100 cursor-pointer rounded">
              Edit
            </div>
            <h1 className="p-1 text-gray-400">Information</h1>
            <div className="flex gap-2">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="">
                <h1 className="mb-2 text-gray-500 text-3xl font-semibold">
                  Jane Doe
                </h1>
                <div className="mb-1">
                  <span className="font-bold text-gray-500 mr-3">Email:</span>
                  <span className="font-medium">janedoe@gmail.com</span>
                </div>
                <div className="mb-1">
                  <span className="font-bold text-gray-500 mr-3">Phone:</span>
                  <span className="font-medium">+1 2345 67 89</span>
                </div>
                <div className="mb-1">
                  <span className="font-bold text-gray-500 mr-3">Address:</span>
                  <span className="font-medium">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="mb-1">
                  <span className="font-bold text-gray-500 mr-3">Country:</span>
                  <span className="font-medium">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <Chart aspect={5 / 1} title="Revenues des 6 derniers mois" />
          </div>
        </div>
        <div className="shadow-user p-2 m-2">
          <h1 className="text-gray-400">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
