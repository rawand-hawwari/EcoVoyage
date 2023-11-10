import React, { useState, useRef } from 'react'

const Pfp = () => {
    const [photoName, setPhotoName] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setImageFile(e.target.files[0]);
      if (file) {
        setPhotoName(file.name);
  
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotoPreview(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleSelectPhoto = () => {
      // Trigger file input click using useRef
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    console.log(photoName);
    console.log(photoPreview);
    console.log(imageFile);
    return (
        <div>
        <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
  
          <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2 text-center">
            Profile Photo <span className="text-red-600"> </span>
          </label>
  
          <div className="text-center">
            <div className="mt-2">
              <span
                className="block w-40 h-40 rounded-full m-auto shadow"
                style={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundImage: `url('${photoPreview !==null? photoPreview: 'https://i.pinimg.com/originals/c0/c2/16/c0c216b3743c6cb9fd67ab7df6b2c330.jpg'}')`,
                }}
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover-text-gray-500 focus-outline-none focus-border-blue-400 focus-shadow-outline-blue active-text-gray-800 active-bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
              onClick={handleSelectPhoto}
            >
              Select New Photo
            </button>
          </div>
        </div>
      </div>
    );
}
export default Pfp
// x-on:click.prevent="$refs.photo.click()"