import { useEffect, useState } from "react";

import { Table, ScrollArea, rem } from "@mantine/core";
import "../styles/Alletavle.css";
import { TextInput } from "@mantine/core";

function sortByTotal(data) {
  return data.sort((a, b) => b.total - a.total);
}

const AlleTavle = (props) => {
  const [inputValue, setInputValue] = useState("");
  const data = sortByTotal(props.data).map((item, index) => ({
    ...item,
    plassering: index + 1,
  }));

  const filteredData = data.filter((row) =>
    row.firstname.toLowerCase().includes(inputValue.toLowerCase())
  );

  const rows = filteredData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.plassering}</td>
        <td>{row.firstname + " " + row.lastname}</td>
        <td>{row.total/1000}</td>
      </tr>
    );
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="alleTavle">
      <TextInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        label="Søk etter ditt navn"
        placeholder="Søk"
        className="searchInput"
      />

      <br />

      <ScrollArea h={300}>
        <Table miw={700}>
          <thead className={"tableHeader"}>
            <tr>
              <th>Plassering</th>
              <th>Navn</th>
              <th>Antall kilometer</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default AlleTavle;
