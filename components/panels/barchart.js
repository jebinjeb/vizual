import { useEffect, useRef, useState } from 'react';
import { BarChart } from 'react-d3-components';

export default function BarChartPanel({ editmode }) {
    const data = [
        {
            values: [
                { x: 'Fetch', y: 2 },
                { x: 'Axios', y: 4 },
                { x: 'Superagent', y: 3 }
            ]
        }
    ];

    const chartRef = useRef();

    const [windowSize, setWindowSize] = useState({
        width: 421,
        height: 190,
    });

    useEffect(() => {
        const handleResize = () => {
            let h = chartRef.current._innerHeight;
            let w = chartRef.current._innerWidth;

            if (chartRef.current._innerHeight < 250) {
                h = 250;
            }

            if (chartRef.current._innerWidth < 421) {
                w = 421;
            }

            setWindowSize({
                width: w,
                height: h
            });
        }

        window.addEventListener("resize", handleResize.bind(this));
        handleResize();
    }, []);

    const displayLabel = (label) => {
        return label;
    }

    return (<>
        <div id="x" className="rounded-t mb-0 px-4 py-3 border-0">
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
            <BarChart
                ref={chartRef}
                data={data}
                width={windowSize.width}
                height={windowSize.height}
                tooltipHtml={displayLabel}
                yAxis={{ tickArguments: [3] }}
                color={"red"}
                margin={{ top: 20, bottom: 50, left: 60, right: 40 }} />
        </div>
    </>);
}