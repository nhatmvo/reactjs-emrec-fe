import { Fragment } from 'react';
import classes from './AddEntry.module.scss';

const AddEntry = () => {
    const data = {
        name: "Võ Minh Nhật",
        yearOfBirth: "1997",
        phoneNumber: "0344145250",
        gender: "male"
    }

    return (
        <Fragment>
            <InformationCard name={data.name} yearOfBirth={data.yearOfBirth} phoneNumber={data.phoneNumber} gender={data.gender} />
            <Card headerLabel="Lượt khám mới">

            </Card>
        </Fragment>
    );
};

export default AddEntry;