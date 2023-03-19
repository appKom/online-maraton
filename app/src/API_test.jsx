import { React, useEffect, useState } from "react";

export default function Table() {
  const [verdi, setVerdi] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.strava.com/api/v3/clubs/1118846/activities?access_token=9287ae5913b942d6f3c0af148aeeab0058e0445a",
      {
        headers: {
          "Allow-Control-Allow-Origin": "http://127.0.0.1:3000",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setVerdi(data);
      });
  }, []);

  return (
    <div>
      <table style={{ border: "1px solid", borderCollapse: "collapse" }}>
        <tbody style={{ border: "1px solid" }}>
          <tr>
            <th>Verdier</th>
          </tr>
          {verdi.map((verdi, index) => {
            return (
              <tr key={index}>
                <td>{verdi.distance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
