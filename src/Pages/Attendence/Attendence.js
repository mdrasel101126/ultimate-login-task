import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Attendence = () => {
  const [attendence, setAttendence] = useState([]);
  const [date, setDate] = useState("");
  const [dates, setDates] = useState(null);

  useEffect(() => {
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

        //console.log(attendenceArray[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /*  console.log(attendence);
  console.log(dates);
  console.log(date); */

  /* if (attendence) {
    attendenceArray = Object.keys(attendence).map((e) => attendence[e]);

    //console.log(attendenceArray[0]);
  } */
  const getDate = (dates) => {
    //console.log(dates);
    const length = Object.keys(dates).length;
    const datesCollection = [];
    for (let i = 0; i <= length - 1; i++) {
      datesCollection.push(Object.keys(dates)[i]);
    }
    //console.log(datesCollection);
    return datesCollection;
  };
  const getLastDate = (dates) => {
    const length = Object.keys(dates).length;
    const lastDate = Object.keys(dates)[length - 2];
    //console.log(lastDate);
    return lastDate;
  };
  const getStatus = (dates, date) => {
    const length = Object.keys(dates).length;
    const lastDate = Object.keys(dates)[length - 2];
    const status = dates[date].status;
    //console.log(status);
    return status;
  };
  const handleSetDate = (e) => {
    e.preventDefault();
    setDate(e.target.opt.value);
    //console.log(e.target.opt.value);
  };
  return (
    <div>
      <form onSubmit={handleSetDate}>
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
      <h1>Attendence</h1>
      <div className="overflow-x-auto w-full">
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
