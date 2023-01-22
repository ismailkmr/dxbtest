import React, { useState, useEffect } from 'react';
import logo from "./logo.svg";
import "./Style.css";
import ico1 from "./images/1.png";
import ico2 from "./images/2.png";

function Events() {
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
  function getUserList() {
    fetch("https://api.postman.com/collections/22757851-d54cd6fa-17e9-4e8f-93dc-054ed1da7d0c?access_key=PMAT-01GQ7JA5S0K6DZPH96QJYN9W72")
      .then(res => res.json())
      .then(res => {
            res.collection.item[0].item.map(function(item, i){
            console.log(res.collection.item[0].item[i].name);
          })
      });

  }
  useEffect(() => {
    getUserList()
  })
  return (
    <div className="App">
      <div className="rightNav">
        <ul>
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">News Letter</a>
          </li>
          <li>
            <a href="">Announcement</a>
          </li>
          <li>
            <a href="">Survey</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Quick Access</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">User</a>
          </li>
        </ul>
      </div>    
      <div>
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Events;
