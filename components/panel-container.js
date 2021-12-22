import AreaChartPanel from "./panels/areachart";
import BarChartPanel from "./panels/barchart";
import TablePanel from "./panels/table";

export default function Panel({ type }) {

    const renderPanel = (type) => {
        switch (type) {
            case "BarChart":
                return <BarChartPanel></BarChartPanel>;

            case "Table":
                return <TablePanel></TablePanel>;

            case "AreaChart":
                return <AreaChartPanel></AreaChartPanel>
        }
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            {renderPanel(type)}
        </div>
    )
}