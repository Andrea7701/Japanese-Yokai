import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Data from "./info.json";
import "./App.css"


const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (


    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="cardFront"
      >
        <div>
          <h3>{project.name}</h3>
          <img src={project.img} alt="" />
        </div>
      </div>
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="cardBack"
      >
        <h3>{project.name}</h3>
        <p>{project.text}</p>
      </div>
     

    </ReactCardFlip>
  );
};


const Projects = () => {

  //Search function + error function + Search bar

const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(Data);  
  
  
  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };


  const filterData = (searchTerm) => {
    const filteredData = Data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };


  return(

    <>
     <div>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      
    </div>

    <div className="Projects">

      {filteredData.map((item, index) => (
        <Card project={item} key={`card-${index}`} />
      ))}

    </div>
    
    </>
    )
};

export default Projects;