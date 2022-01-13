import AreaChartPanel from "./panels/areachart";
import BarChartPanel from "./panels/barchart";
import TablePanel from "./panels/table";

export default function Panel({ type, editmode }) {

    const renderPanel = (type) => {
        switch (type) {
            case "BAR_CHART":
                return <BarChartPanel editmode={editmode}></BarChartPanel>;

            case "DATA_TABLE":
                return <TablePanel editmode={editmode}></TablePanel>;

            case "AREA_CHART":
                return <AreaChartPanel editmode={editmode}></AreaChartPanel>
        }
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            {renderPanel(type)}
        </div>
    )
}