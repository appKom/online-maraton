import { useState } from "react";
import { Table, ScrollArea, rem } from "@mantine/core";
import "../styles/Alletavle.css";

function sortByTotal(data) {
  return data.sort((a, b) => b.total - a.total);
}

const Alletavle = (props) => {
  const data = sortByTotal(props.data);

  const rows = data.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.firstname}</td>
        <td>{row.total}</td>
      </tr>
    );
  });

  return (
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
  );
};

export default Alletavle;
