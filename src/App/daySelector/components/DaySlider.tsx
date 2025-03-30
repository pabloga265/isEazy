import "../daySelector.css";
import { format, add } from "date-fns";

const DaySlider = ({day}: {day: string}) => {
    return (
      <div id="radios">
        {format(add(day, { days: 0 }), "yyyy-MM-dd")}
      </div>
    )
}

export default DaySlider;
