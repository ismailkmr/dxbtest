import React, { useState } from "react";
import logo from "./logo.svg";
import "./Style.css";
import ico1 from "./images/1.png";
import ico2 from "./images/2.png";

function News() {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }
  return (
    <div className="App">
      <div className="rightNav">
<ul>
  <li><a href="">Dashboard</a></li>
  <li><a href="">News Letter</a></li>
  <li><a href="">Announcement</a></li>
  <li><a href="">Survey</a></li>
  <li><a href="">Events</a></li>
  <li><a href="">Quick Access</a></li>
  <li><a href="">FAQ</a></li>
  <li><a href="">Gallery</a></li>
  <li><a href="">User</a></li>
</ul>
      </div>
      <div className="form-group preview">
        <span className="title">Upload Images</span>
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item}>
                <img src={item} alt="" /><br></br>
                <button type="button" className="dltButton" onClick={() => deleteFile(index)}>
                  Delete
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <form>
      <div className="form-group">
        <input
          type="file"
          disabled={file.length === 5}
          className="form-control"
          onChange={uploadSingleFile}
          multiple
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button>
    </form>
      </div>
    </div>
  );
}

export default News;
