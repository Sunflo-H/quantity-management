import React, { useState } from "react";
import * as XLSX from "xlsx";
export default function ExcelReader() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const binaryStr = evt.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      console.log(workbook);
      const sheetName = workbook.SheetNames[0]; // 시트 : 엑셀 하단에 있는 거 (이걸로 1월 2월 3월 이렇게 나눌수 있잖아!)
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">엑셀 파일 업로드</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <div className="mt-4">
        <h3 className="font-semibold">읽은 데이터:</h3>
        {data.length === 0 ? (
          <p>데이터가 없습니다.</p>
        ) : (
          <ul className="list-disc pl-4">
            {data.map((row, index) => (
              <li key={index}>
                이름: {row.이름}, 나이: {row.나이}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
