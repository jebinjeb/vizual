import Navbar from "../../../components/navbar";
import Panel from "../../../components/panel-container";

export default function Dashboard() {

  return (
    <div className='min-h-screen bg-blueGray-100'>
      <Navbar></Navbar>

      <div className="mx-auto mb-5">
        <div className="flex flex-wrap h-16">
          <div className="w-full flex flex-1 justify-start items-center px-10">
            <p className="font-semibold text-blueGray-600 text-3xl px-6 py-3">Verizon</p>
          </div>

          <div className="w-full flex flex-1 justify-end items-center px-10">
            <button className="text-blueGray-500 bg-blueGray-300 hover:bg-amber-500 hover:text-white active:bg-amber-600 text-md rounded px-4 py-2 mx-2 mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <i className="pr-2 fas fa-plus"></i> Add Visual
            </button>

            <button className="text-blueGray-500 bg-blueGray-300 hover:bg-amber-500 hover:text-white active:bg-amber-600 text-md rounded p-2 mx-2 mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <i className="px-2 fas fa-sync-alt"></i>
            </button>

            <button className="text-blueGray-500 bg-blueGray-300 hover:bg-amber-500 hover:text-white active:bg-amber-600 text-md rounded p-2 mx-2 mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <i className="px-2 fas fa-share-alt"></i>
            </button>

            <button className="text-blueGray-500 bg-blueGray-300 hover:bg-amber-500 hover:text-white active:bg-amber-600 text-md rounded p-2 mx-2 mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <i className="px-2 fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full h-auto px-4 flex-1">
              <Panel type="Table"></Panel>
            </div>
            <div className="w-full h-auto px-4 flex-1">
              <Panel type="BarChart"></Panel>
            </div>
            <div className="w-full h-auto px-4 flex-1">
              <Panel type="AreaChart"></Panel>
            </div>
            <div className="w-full h-auto px-4 flex-1">
              <Panel type="Table"></Panel>
            </div>
            <div className="w-full h-auto px-4 flex-1">
              <Panel type="Table"></Panel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}