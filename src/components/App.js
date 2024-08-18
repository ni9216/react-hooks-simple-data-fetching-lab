// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // State to store the image URL
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    // Fetch the dog image when the component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the image URL in state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
