import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const otherAddress = document.querySelector(".address").value;
    try {
      const dataArray = otherAddress ? await contract.display(otherAddress) : await contract.display(account);
      setData(dataArray);
    } catch (e) {
      alert("You don't have access");
    }
  };

  const downloadFile = (hash) => {
    if (!hash) {
      alert("Invalid hash for view/download");
      return;
    }
    // Open the download link in a new tab
    window.open(hash, "_blank");
  };
  

  const renderFiles = () => {
    if (data.length === 0) {
      return <p>No files to display</p>;
    }

    return data.map((hash, index) => (
      <div key={index} className="file-container">
        <span className="file-name">{hash}</span>
        <button className="download-button" onClick={() => downloadFile(hash)}>
          View / Download
        </button>
      </div>
    ));
  };

  return (
    <>
      <div className="file-list">{renderFiles()}</div>
      <input type="text" placeholder="Enter Address" className="address" />
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};

export default Display;
