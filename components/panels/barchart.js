import { useEffect, useRef, useState } from 'react';
import { BarChart } from 'react-d3-components';

export default function BarChartPanel() {
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

    return (
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
    );
}