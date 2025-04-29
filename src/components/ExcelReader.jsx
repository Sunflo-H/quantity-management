import React, { useState } from "react";
import * as XLSX from "xlsx";
import "../App.css";

const ExcelReader = () => {
  const [data, setData] = useState([]);
  const [blinkedRow, setBlinkedRow] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const binaryStr = evt.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const handleRowClick = (index) => {
    setBlinkedRow(index);
    setTimeout(() => setBlinkedRow(null), 600); // 0.6초 뒤 초기화
  };

  const columnOrder = [
    "상품코드",
    "상품명",
    "칼라",
    "수량",
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <table border="1">
        <thead>
          <tr>
            {columnOrder.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              onClick={() => handleRowClick(i)}
              className={blinkedRow === i ? "blink-row" : ""}
              style={{ cursor: "pointer" }}
            >
              {columnOrder.map((key) => (
                <td key={key}>{row[key] ?? ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelReader;
