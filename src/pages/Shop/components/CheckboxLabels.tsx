import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { useContext } from 'react';
import { CheckboxLabelsContext } from '../context/CheckboxLabelsContext';


export default function CheckboxLabels() {

    const { checked, setChecked } = useContext(CheckboxLabelsContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name !== 'everything' && checked.everything) {
            setChecked({ ...checked, everything: false, [event.target.name]: event.target.checked });
        } else if (event.target.name === "everything")
        {
            setChecked({ everything: true, cakes: false, puddings: false, candies: false });
        }
        else {
            setChecked({ ...checked, [event.target.name]: event.target.checked });
        }
    }

    return (
        <FormGroup>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox name="everything" checked={checked.everything} onChange={handleChange} sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Wszystkie" />
                <h1>(18)</h1>
            </div>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox name="cakes" checked={checked.cakes} onChange={handleChange} sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Ciasta" />
                <h1>(18)</h1>
            </div>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox name="puddings" checked={checked.puddings} onChange={handleChange} sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Puddingi" />
                <h1>(18)</h1>
            </div>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox name="candies" checked={checked.candies} onChange={handleChange} sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Cukierki" />
                <h1>(18)</h1>
            </div>
        </FormGroup>
    );
}
