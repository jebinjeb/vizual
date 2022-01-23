import { Fragment, useEffect, useState } from "react";

export default function TablePanel({ editmode, source, query }) {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const request = await fetch("/api/panel", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ source: source, query: query })
        });
        const json = await request.json();
        setHeaders(Object.keys(json[0]));
        setData(json);
    }

    return (
        <Fragment>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full p-2 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-md text-blueGray-600 uppercase">Social traffic</h3>
                    </div>
                    <div className="relative w-full px-2 max-w-full flex-grow flex-1 text-right">
                        {
                            editmode ?
                                <>
                                    <button className="text-blueGray-500 bg-blueGray-300 text-sm shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-md outline-none mx-3 hover:text-white hover:bg-amber-500 active:bg-amber-600" type="button">
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>

                                    <button className="text-blueGray-500 bg-blueGray-300 text-sm shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-md outline-none hover:text-white hover:bg-amber-500 active:bg-amber-600" type="button">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </> : null
                        }
                    </div>
                </div>
            </div>

            <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead className="thead-light">
                        <tr>
                            {
                                headers.map(item => (
                                    <th key={item} className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">{item.toUpperCase()}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr key={item.id}>
                                    {
                                        Object.keys(item).map((k) => (
                                            <td key={k} className="border-t-0 px-6 align-middle border-l-0 border-r-0 font-semibold text-sm text-blueGray-500 whitespace-nowrap p-4 text-left">{item[k]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}