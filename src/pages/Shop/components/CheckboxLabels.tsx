import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

export default function CheckboxLabels() {
    return (
        <FormGroup>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Wszystkie" />
                <h1>(18)</h1>
            </div>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Ciasta" />
                <h1>(18)</h1>
            </div>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Puddingi" />
                <h1>(18)</h1>
            </div>
            <div className='flex items-center justify-between'>
                <FormControlLabel control={<Checkbox sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}}/>} label="Cukierki" />
                <h1>(18)</h1>
            </div>
        </FormGroup>
    );
}
