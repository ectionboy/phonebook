import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterSet } from 'redux/filter/slice';
import { Box, TextField, Typography } from '@mui/material';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch(filterSet(value));
  };
  return (
    // <FilterContainer>
    //   <FilterLabel htmlFor="contactsfilter">Find contacts by name</FilterLabel>
    //   <FilterInput
    //     type="text"
    //     name="filter"
    //     id="contactsfilter"
    //     value={filter ?? ''}
    //     onChange={value => handleFilter(value.target.value)}
    //   />
    // </FilterContainer>
    <Box sx={{marginTop: '24px'}}>
      <Typography variant="h6" gutterBottom>
      Find contacts by name
      </Typography>
      <TextField
        id="contactsfilter-basic"
        variant="outlined"
        size="small"
        value={filter ?? ''}
        onChange={value => handleFilter(value.target.value)}
      />
    </Box>
  );
};

export default Filter;
