// FilterProject.js

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const FilterProject = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    type: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <Select
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            displayEmpty
            fullWidth
            required
          >
            <MenuItem value="" disabled>Project Name</MenuItem>
            {/* Add options based on your project names */}
            <MenuItem value="project1">Project 1</MenuItem>
            <MenuItem value="project2">Project 2</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </div>
        <div className='col-lg-3 col-12'>
          <Select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            displayEmpty
            fullWidth
            required
          >
            <MenuItem value="" disabled>Location</MenuItem>
            {/* Add options based on your locations */}
            <MenuItem value="location1">Location 1</MenuItem>
            <MenuItem value="location2">Location 2</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </div>
        <div className='col-lg-3 col-12'>
          <Select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            displayEmpty
            fullWidth
            required
          >
            <MenuItem value="" disabled className='text-center'>Type</MenuItem>
            {/* Add options based on your project types */}
            <MenuItem value="type1">Type 1</MenuItem>
            <MenuItem value="type2">Type 2</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </div>
        <div className='col-lg-3 col-12 m-auto ssgroupbtn'>
          <Button type="submit" variant="contained" color="primary" className='col-12 realstatebtn'>
            <span className='text-white'> Submit</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FilterProject;
