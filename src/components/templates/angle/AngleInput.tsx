import axios from "axios";
import { useEffect, useState } from "react";

export const AngleInput = () => {
  const [myAngle, setMyAngle] = useState([]);
  const [mySound, setMySound] = useState([]);
  const [myTime, setMyTime] = useState([]);

  const getAngle = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/getlatestdata');
      setMyAngle(response.data);
      console.log("data", response.data[0].number);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getSound = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/getsoundtype');
      setMySound(response.data);
      console.log("data", response.data[0].Public.Input.Data.Prediction);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getTime = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/get_time');
      setMyTime(response.data);
      console.log("data", response.data[0].Public.Input.Data.Time);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getSound();
  }, [mySound]);

  useEffect(() => {
    getAngle();
  }, [myAngle]);

  useEffect(() => {
    getTime();
  }, [myTime]);



  return (
    <div>
      <div>
        Thời gian: {myTime.map(item => item.Public.Input.Data.Time)}
      </div>
      <div>
        Góc: {myAngle.map(item => item.number)} độ
      </div>
      <div>
        Tiếng của: {mySound.map(item => item.Public.Input.Data.Prediction)}
      </div>


      <table className="table-fixed border-solid border-2 border-black">
        <thead>
          <tr className="border-b-2 border-black ">
            <th className="px-2 border-r-2 border-black">Thời gian</th>
            <th className="px-2 border-r-2 border-black">Góc</th>
            <th className="px-2 border-r-2 border-black">Âm Thanh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 border-r-2 border-black">{myTime.map(item => item.Public.Input.Data.Time)}</td>
            <td className="px-2 border-r-2 border-black">{myAngle.map(item => item.number)}</td>
            <td className="px-2 border-r-2 border-black">{mySound.map(item => item.Public.Input.Data.Prediction)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
