import * as React from 'react';
import { useParams } from 'react-router-dom'
import { traveldata } from '../TravelData/Traveldata';
import CardBox from '../Card/CardBox';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { countrydata } from '../CountryData/Countrydata';
import { FormControl, InputLabel, Select } from '@mui/material';

import { useState } from 'react';
import Calendar from 'react-calendar';



const VisitPage = (props) => {

    const [value, setValue] = useState(new Date())

    const onChange = () => {
        setValue(value)
    }

    const { id } = useParams();

    const getCard = traveldata.find(travelID => travelID.id === id)

    //console.log(getCard);

    return (
        <div style={{ height: '85vh' }}>
            <h1> Here you will get details </h1>
            <div style={{ display: 'flex' }} >
                <div style={{ width: '30%' }} >
                    <CardBox item={getCard} />

                </div>
                <div style={{ width: '70%' }} >
                    <h1> {getCard.about} </h1>
                    <p> {getCard.aboutDescription} </p>

                    <div>
                        <h4>Noord: Arikok National Park Jeep Tour with Baby Beach Visit</h4>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>

                                <TextField
                                    required
                                    id="filled-required"
                                    label="Your Name"
                                    color="success" focused
                                    variant="filled"
                                />
                                <TextField
                                    id="filled-number"
                                    label="Number"
                                    type="number"
                                    color="success" focused
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                />
                                <TextField
                                    id="outlined-select-Country"
                                    select
                                    label="Select"
                                    color="success" focused
                                    helperText="Please select your Country"
                                >
                                    {countrydata.map((option) => (
                                        <MenuItem key={option.code} value={option.name}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </div>
                            <div style={{ width: '30%', marginLeft: '20%' }} >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Available Date</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value='Check Date'
                                        label="Age"

                                    >
                                        <Calendar onChange={onChange} value={value} />

                                    </Select>
                                </FormControl>
                            </div>
                        </Box>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default VisitPage




