import classes from './PatientEntries.module.scss';
import InformationCard from '../../components/Patient/InformationCard';
import { Fragment } from 'react';
import Dropdownlist from '../../components/UI/Dropdownlist';
import EntrySummaryCard from '../../components/Entry/EntrySummaryCard';
import Button from '../../components/UI/Button';
const PatientEntries = (props) => {
    const data = {
        name: "Võ Minh Nhật",
        yearOfBirth: "1997",
        phoneNumber: "0344145250",
        gender: "male"
    }

    const entries = [
        {
            diagnostic: "Đau bụng",
            entryTotalPictures: 3,
            date: "10/07/2021 - 9:30AM"
        },
        {
            diagnostic: "Đau dạ dày",
            entryTotalPictures: 10,
            date: "20/02/2020 - 9:30AM"
        }
    ]

    const addEntryHandler = () => {

    }

    return (
        <div className={classes.wrapper}>
            <InformationCard name={data.name} yearOfBirth={data.yearOfBirth} phoneNumber={data.phoneNumber} gender={data.gender} />
            <div className={classes.controls}>
                <Button className={classes.button} onClick={addEntryHandler}><span className={classes.cross}>+</span>&nbsp;&nbsp;Thêm bản ghi</Button>
                {/* <Dropdownlist className={classes.dropdown}></Dropdownlist> */}
            </div>
            {entries.map(entry => <EntrySummaryCard
                diagnostic={entry.diagnostic}
                entryTotalPictures={entry.entryTotalPictures}
                entryDate={entry.date}/>)}
        </div >
    )
};

export default PatientEntries;