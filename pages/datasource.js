import Navbar from "../components/navbar";

export default function DataSource() {
    return (
        <>
            <div className='min-h-screen bg-blueGray-100'>
                <Navbar></Navbar>

                <div className="mx-auto mb-5">
                    <div className="flex flex-wrap h-16">
                        <div className="w-full flex flex-1 justify-start items-center px-10">
                            <p className="font-semibold text-blueGray-600 text-3xl px-6 py-3">Data Source</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto px-6 pb-10">
                    <div className="flex flex-wrap">
                        <div className="w-5/12 bg-slate-50 shadow-lg ml-6 mr-10">
                            <div className="bg-white px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="font-semibold text-blueGray-600 uppercase text-md">Sources</h6>
                                </div>
                            </div>

                            <div>
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <tbody>
                                        <tr className="hover:bg-blueGray-200">
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md text-blueGray-600 whitespace-nowrap p-4 text-left">
                                                Clickhouse
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap text-right">
                                                <button className="bg-blueGray-600  text-white text-sm shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none hover:bg-amber-500 active:bg-amber-600" type="button">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blueGray-200">
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md text-blueGray-600 whitespace-nowrap p-4 text-left">Postgres</th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap text-right">
                                                <button className="bg-blueGray-600  text-white text-sm shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none hover:bg-amber-500 active:bg-amber-600" type="button">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blueGray-200">
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md text-blueGray-600 whitespace-nowrap p-4 text-left">Mysql</th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap text-right">
                                                <button className="bg-blueGray-600  text-white text-sm shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none hover:bg-amber-500 active:bg-amber-600" type="button">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-5/12 bg-slate-50 shadow-lg justify-center items-center">
                            <div className="bg-white mb-6 px-6 py-6">
                                <div className="text-center flex justify-between">
                                    <h6 className="font-semibold text-blueGray-600 uppercase text-md">Source Information</h6>
                                </div>
                            </div>

                            <div className="px-10">
                                <div className="relative w-full mb-6">
                                    <label className="block text-blueGray-400 text-sm mb-2">Host / URL</label>
                                    <input type="text" className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150" placeholder="Enter panel name" />
                                </div>

                                <div className="relative w-full mb-6">
                                    <label className="block text-blueGray-400 text-sm mb-2">Port</label>
                                    <input type="text" className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150" placeholder="Enter panel name" />
                                </div>

                                <div className="relative w-full mb-6">
                                    <label className="block text-blueGray-400 text-sm mb-2">Username</label>
                                    <input type="text" className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150" placeholder="Enter panel name" />
                                </div>

                                <div className="relative w-full mb-10">
                                    <label className="block text-blueGray-400 text-sm mb-2">Password</label>
                                    <input type="text" className="border-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150" placeholder="Enter panel name" />
                                </div>

                                <button className="bg-blueGray-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-2 mb-6 rounded-full shadow hover:shadow-lg hover:bg-amber-500 outline-none ease-linear transition-all duration-150" type="button">
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}