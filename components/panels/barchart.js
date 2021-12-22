import { useEffect, useRef, useState } from 'react';
import { BarChart } from 'react-d3-components';

export default function BarChartPanel() {
    const isModeEditing = false;

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

            if (chartRef.current._innerHeight < 190) {
                h = 190;
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
                <div className="relative w-full px-2 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">Social traffic</h3>
                </div>
                <div className="relative w-full px-2 max-w-full flex-grow flex-1 text-right">
                    {
                        isModeEditing ?
                            <button className="text-blueGray-500 bg-blueGray-300 hover:bg-amber-500 hover:text-white active:bg-amber-600 text-md rounded ease-linear transition-all duration-150" type="button">
                                <i className="px-2 fas fa-times"></i>
                            </button>
                            :
                            <button className="text-blueGray-500 bg-blueGray-300 hover:bg-amber-500 hover:text-white active:bg-amber-600 text-md rounded ease-linear transition-all duration-150" type="button">
                                <i className="px-2 fas fa-ellipsis-h"></i>
                            </button>
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