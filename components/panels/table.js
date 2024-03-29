import { useEffect, useState } from "react";

export default function TablePanel({ source, query }) {
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
        if (json.length && json.length > 0) {
            setHeaders(Object.keys(json[0]));
            setData(json);
        }
    };

    return (
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
    );
}