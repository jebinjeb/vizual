import { useEffect, useRef, useState } from 'react';
import { AreaChart } from 'react-d3-components';

export default function AreaChartPanel({ editmode }) {
    const data = [
        {
            label: 'Fetch',
            values: [{ x: 0, y: 2 }, { x: 1.3, y: 5 }, { x: 3, y: 6 }, { x: 3.5, y: 6.5 }, { x: 4, y: 6 },
            { x: 4.5, y: 6 }, { x: 5, y: 7 }, { x: 5.5, y: 8 }]
        },
        {
            label: 'Axios',
            values: [{ x: 0, y: 3 }, { x: 1.3, y: 4 }, { x: 3, y: 7 }, { x: 3.5, y: 8 }, { x: 4, y: 7 },
            { x: 4.5, y: 7 }, { x: 5, y: 7.8 }, { x: 5.5, y: 9 }]
        }
    ];

    const chartRef = useRef();

    const [windowSize, setWindowSize] = useState({
        width: 421,
        height: 190,
    });

    const displayLabel = (label) => {
        return label;
    }

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
            <AreaChart
                ref={chartRef}
                data={data}
                width={windowSize.width}
                height={windowSize.height}
                tooltipHtml={displayLabel}
                xAxis={{ tickArguments: [5] }}
                yAxis={{ tickArguments: [3] }}
                margin={{ top: 20, bottom: 50, left: 60, right: 40 }} />
        </div>
    </>);
}