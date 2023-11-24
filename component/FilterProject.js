import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const FilterProject = ({ filterData, searchFloc, searchFtype, searchFstatus, initialQuery }) => {
  const [formData, setFormData] = useState({
    location: initialQuery?.location || searchFloc, 
    type: initialQuery?.type || searchFtype,
    statusval: initialQuery?.statusval || searchFstatus,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the URL with the selected dropdown values
    const { location, type, statusval } = formData;
    const url = `${window.location.pathname}?location=${location}&type=${type}&statusval=${statusval}`;
    window.location.href = url;
  };  

  const handleReset = () => {
    setFormData({
      location: '',
      type: '',
      statusval: '',
    });
    const url = window.location.pathname; 
    window.location.href = url;

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
      <div className='col-lg-3 col-12'>
      <Select id="location" name="location" value={formData.location} onChange={handleChange} displayEmpty fullWidth>
        <MenuItem value="" disabled>Location</MenuItem>
        {filterData && filterData.locations.map(locData => (
          <MenuItem key={locData} value={locData}>{locData}</MenuItem>
        ))}
      </Select>
        </div>
        <div className='col-lg-3 col-12'>
          <Select id="type" name="type" value={formData.type} onChange={handleChange} displayEmpty fullWidth>
            <MenuItem value="" disabled className='text-center'>Type</MenuItem>
            {/* Add options based on your project types */}
            {filterData && filterData.types.map(typeData => (
            <MenuItem value={typeData}>{typeData}</MenuItem>
            ))}
            {/* Add more options as needed */}
          </Select>
        </div>
        <div className='col-lg-3 col-12'>
          <Select id="statusval" name="statusval" value={formData.statusval} onChange={handleChange} displayEmpty fullWidth>
            <MenuItem value="" disabled>Status</MenuItem>
            {/* Add options based on your locations */}
            {filterData && filterData.status.map(statusData => (
            <MenuItem value={statusData}>{statusData}</MenuItem>
            ))}
            {/* Add more options as needed */}
          </Select>
        </div>
        <div className='col-lg-3 col-12 m-auto ssgroupbtn d-flex'>
         <div className="row">
          <div className="col-lg-8">
          <Button type="submit" variant="contained" color="primary" className='col-12 realstatebtn'>
            <span className='text-white'> Submit</span>
            </Button>
          </div>
          <div className="col-lg-4 p-0">            
          <Button type="button" variant="contained" color="primary" className='col-12 realstatebtn' onClick={handleReset}>
            <span className='text-white'>Reset</span>
          </Button>
          </div>
         </div>
        </div>
      </div>
    </form>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;

  // Ensure that query is not undefined before accessing its properties
  const initialQuery = {  
    location: query?.location || '',
    type: query?.type || '',
    statusval: query?.statusval || '',
  };

  // // Fetch initial data needed for the component (replace this with your actual data fetching logic)
  // const filterData = {
  //   locations: ['location1', 'location2'],
  //   types: ['type1', 'type2'],
  //   status: ['Delivered'],
  // };

  return {
    props: {
      filterData,
      initialQuery,
    },
  };
}


export default FilterProject;
