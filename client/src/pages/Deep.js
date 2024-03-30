// Deep.js

import React, { useState } from "react";
import axios from "axios";

const Deep = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictedClass, setPredictedClass] = useState(null);
  const [predictedLabel, setPredictedLabel] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true); // Set loading to true when the prediction process starts

      const formData = new FormData();
      formData.append("file", selectedFile);

      // Send the file to the server for processing
      const response = await axios.post("http://localhost:8060/predict_video", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPredictedClass(response.data.max_predicted_class);
      setPredictedLabel(response.data.predicted_label);
    } catch (error) {
      console.error("Error processing video:", error.message);
    } finally {
      setLoading(false); // Set loading to false when the prediction process finishes
    }
  };

  return (
    <div>
      <h1>FastAPI Video Processing with React</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button type="submit">Process Video</button>
      </form>
      {selectedFile && (
        <div>
          <h3>Input Video:</h3>
          <video width="400" controls>
            <source src={URL.createObjectURL(selectedFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {loading && <p>Loading...</p>}
      {predictedClass !== null && !loading && (
        <div>
          <h3>Predicted Class:</h3>
          <p>{predictedClass}</p>
          <h3>Predicted Label:</h3>
          <p>{predictedLabel}</p>
        </div>
      )}
    </div>
  );
};

export default Deep;
