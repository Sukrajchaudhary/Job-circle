import React, { useState } from "react";

const Language: React.FC = () => {
  const [languages, setLanguages] = useState([
    { language: "English", proficiency: "intermediate" },
  ]);

  const handleLanguageChange = (index: number, value: string) => {
    const newLanguages = [...languages];
    newLanguages[index].language = value;
    setLanguages(newLanguages);
  };

  const handleProficiencyChange = (index: number, value: string) => {
    const newLanguages = [...languages];
    newLanguages[index].proficiency = value;
    setLanguages(newLanguages);
  };

  const addLanguage = () => {
    setLanguages([...languages, { language: "", proficiency: "" }]);
  };

  const removeLanguage = (index: number) => {
    const newLanguages = languages.filter((_, i) => i !== index);
    setLanguages(newLanguages);
  };

  return (
    <div className=" lg:ml-[270px] w-full">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Languages</h2>
        {languages.map((lang, index) => (
          <div key={index} className="flex space-x-2 my-2">
            <input
              type="text"
              value={lang.language}
              onChange={(e) => handleLanguageChange(index, e.target.value)}
              placeholder="Language"
              className="border border-gray-300 rounded p-2 w-1/2"
            />
            <select
              value={lang.proficiency}
              onChange={(e) => handleProficiencyChange(index, e.target.value)}
              className="border border-gray-300 rounded p-2 w-1/2"
            >
              <option value="">Select Proficiency</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
            <button
              onClick={() => removeLanguage(index)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={addLanguage}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Language
        </button>
      </div>
    </div>
  );
};

export default Language;
