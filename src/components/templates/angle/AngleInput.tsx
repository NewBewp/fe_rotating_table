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
    </div>
  )
}
