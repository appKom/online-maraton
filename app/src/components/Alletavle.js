import { useState } from "react";
import { Table, ScrollArea, rem } from "@mantine/core";
import "../styles/Alletavle.css";
import { TextInput} from '@mantine/core';

function sortByTotal(data) {
  return data.sort((a, b) => b.total - a.total);
}

const Alletavle = (props) => {
  const [inputValue, setInputValue] = useState("");
  const data = sortByTotal(props.data);

  // Filter the data array based on the input value
  const filteredData = data.filter((row) =>
    row.firstname.toLowerCase().includes(inputValue.toLowerCase())
  );

  const rows = filteredData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.firstname}</td>
        <td>{row.total}</td>
      </tr>
    );
  });

  const [focused, setFocused] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <TextInput
      type="text" value={inputValue} onChange={handleInputChange}
      label="Søk etter ditt navn"
      placeholder="Søk"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
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
    </>
  );
};

export default Alletavle;
