import axios from "axios";
import { useEffect, useState } from "react";

export const AngleInput = () => {
  const [myData, setMyData] = useState([]);
  const getAngle = async () => {
    try {
      const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-rxqgf/endpoint/getlatestdata');
      setMyData(response.data);
      console.log("data", response.data[0].number);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAngle();
  }, [setMyData]);

  return (
    <div>
      <div>
        Góc: {myData.map(item => item.number)}
      </div>
      <div>
        Tiếng của: ?
      </div>
      <div>
        Thời gian: ?
      </div>
    </div>
  )
}
