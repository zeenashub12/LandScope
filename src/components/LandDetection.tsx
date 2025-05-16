import React, { useState } from 'react';

interface LandData {
  location: string;
  area: string;
  owner: string;
  width: number;
  height: number;
}

interface LandDetectionProps {
  setLandData: React.Dispatch<React.SetStateAction<LandData | null>>;
}

const LandDetection: React.FC<LandDetectionProps> = ({ setLandData }) => {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadImageToBackend = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          alert("Failed to upload image.");
          return;
        }

        const data = await response.json();

        if (data.land_detected) {
          setLandData({
            location: 'Simulated Location',
            area: 'Simulated Area',
            owner: 'Simulated Owner',
            width: data.width,
            height: data.height,
          });
        } else {
          setLandData(null);
          alert('Land detection failed.');
        }
      } catch (error) {
        alert('Error uploading image.');
      }
    }
  };

  return (
    <div className="card">
      <h2>📤 Upload Satellite Image</h2>
      <p>Detect land boundaries and mint the results as an NFT</p>

      <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
      <button className="upload-btn" onClick={handleUploadImageToBackend}>Upload Image</button>

      {previewUrl && (
        <div className="preview-section">
          <h3>📸 Image Preview</h3>
          <img src={previewUrl} alt="preview" className="preview-img" />
        </div>
      )}
    </div>
  );
};

export default LandDetection;
