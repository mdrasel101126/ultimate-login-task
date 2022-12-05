import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const Attendence = () => {
  const [attendence, setAttendence] = useState([]);
  const [date, setDate] = useState("");
  const [dates, setDates] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    fetch(" https://test.nexisltd.com/test", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("ultimateAccesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const attendenceArray = Object.keys(result).map((e) => result[e]);
        setAttendence(attendenceArray);
        const length = Object.keys(attendenceArray[0].attendance).length;
        const datesCollection = [];
        for (let i = 0; i <= length - 1; i++) {
          datesCollection.push(Object.keys(attendenceArray[0].attendance)[i]);
        }
        setDates(datesCollection);
        setDate(datesCollection[length - 1]);
        setSpinner(false);

        //console.log(attendenceArray[0]);
      })
      .catch((err) => {
        console.log(err);
        setSpinner(false);
      });
  }, []);

  const getStatus = (dates, date) => {
    const status = dates[date].status;
    //console.log(status);
    return status;
  };
  const handleSetDate = (e) => {
    e.preventDefault();
    setDate(e.target.opt.value);
    //console.log(e.target.opt.value);
  };
  if (spinner) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <form onSubmit={handleSetDate} className="text-center">
        {attendence.length > 0 && (
          <select
            name="opt"
            defaultValue={date}
            className="select select-bordered w-full max-w-xs"
          >
            {dates &&
              dates.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
          </select>
        )}
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      <div className="bg-primary my-14 w-4/5 md:w-3/5 lg:w-2/5 py-4 rounded-lg mx-auto">
        <h1 className="text-white text-4xl font-bold text-center">
          ATTENDANCE
        </h1>
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Employee Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendence?.length > 0 &&
              attendence?.map((attend, index) => (
                <tr key={index}>
                  <td>{date}</td>
                  <td>{attend?.name}</td>
                  <td>{getStatus(attend?.attendance, date)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendence;
