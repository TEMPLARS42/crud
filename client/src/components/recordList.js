import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";

const Record = (props) => (
  <tr>
    {/* <td>{props.record.name}</td> */}
    <td>
      <Link className="btn btn-link" to={`/about/${props.record._id}`}>{props.record.name}</Link></td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>{props.record.numb}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecordList(props) {
  const [records, setRecords] = useState([]);
  const params = useParams();

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      //  console.log('hiiii',records);
      setRecords(records);
    }
    if (records.length == 0) {  
      getRecords();
    }
    return;
  },[!props.giver] );



  useEffect(() => {
    async function fetchData() {
      // const parts = props.giver.toString()
      let newRecords = []
      console.log('newone', records)
      // console.log("gg",records[0].name)
      // records.forEach((e)=>{
      // console.log(e.name)
      // if(e.name.includes(props.giver)){
      // console.log(e)
      // setRecords(e);
      console.log('newname', props.giver)
      newRecords = records.filter((el) => el.name.includes(props.giver));
      console.log('newww', newRecords)
      console.log('after', records)
      setRecords(newRecords);

      console.log(records)
    }

    fetchData();

    return;
  }, [props.giver]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    // console.log("runnung",records)
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}