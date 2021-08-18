import Input from '../../components/UI/Input';
import Radiobutton from '../../components/UI/Radiobutton';
import Button from '../../components/UI/Button';

import classes from './AddPatient.module.scss';
import Card from '../../components/UI/Card';
import Section from '../../components/UI/Section';

import useHttp from '../../hooks/use-http';
import { addPatient } from '../../services/api/patient';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

const AddPatient = () => {
    const { sendRequest, status, data } = useHttp(addPatient);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push(`${data.identityNo}/entries`)
        }
    }, [status, history, data])

    const nameInputRef = useRef();
    const genderInputRef = useRef();
    const dobInputRef = useRef();
    const identityInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const addressInputRef = useRef();
    const emailInputRef = useRef();
    const hospitalPatientInputRef = useRef();
    const hasInsuranceInputRef = useRef();
    const examinationDateInputRef = useRef();
    const surgeryDateInputRef = useRef();

    const radioButtonValues = [
        {
            id: "1",
            value: "true",
            label: "Có",
            checked: true
        },
        {
            id: "2",
            value: "false",
            label: "Không"
        }
    ]

    const radioButtonGender = [
        {
            id: "1",
            value: "male",
            label: "Nam",
            checked: true
        },
        {
            id: "2",
            value: "female",
            label: "Nữ"
        }
    ]

    const handleAddPatient = (event) => {
        event.preventDefault();
        sendRequest({
            hospitalDocumentId: hospitalPatientInputRef.current.getInputValue(),
            name: nameInputRef.current.getInputValue(),
            gender: genderInputRef.current.getValue(),
            dateOfBirth: dobInputRef.current.getDateValue(),
            identityNo: identityInputRef.current.getInputValue(),
            phoneNumber: phoneNumberInputRef.current.getInputValue(),
            addressLine: addressInputRef.current.getInputValue(),
            email: emailInputRef.current.getInputValue(),
            hasInsurance: hasInsuranceInputRef.current.getValue(),
            examinationDate: examinationDateInputRef.current.getDateValue(),
            surgeryDate: surgeryDateInputRef.current.getDateValue()
        });

    }

    return (
        <Card headerLabel="Tạo hồ sơ bệnh nhân">
            <form className={classes.wrapper} onSubmit={handleAddPatient}>
                <Section label="THÔNG TIN ĐỊNH DANH">
                    <Input isRequired={true} className={classes["col-12"]} id="1" type="text" label="Họ tên" ref={nameInputRef} />
                    <div className={classes["col-6"]}>
                        <Input id="2" type="date" label="Năm sinh" isRequired={true} ref={dobInputRef} />
                        <Radiobutton name="gender" options={radioButtonGender} label="Giới tính" isRequired={true} ref={genderInputRef} />
                    </div>
                    <div className={classes["col-6"]}>
                        <Input id="4" type="text" label="CMND/CCCD" isRequired={true} ref={identityInputRef} />
                        <Input id="3" type="text" label="Số điện thoại" isRequired={true} ref={phoneNumberInputRef} />
                    </div>
                    <Input className={classes["col-12"]} id="5" type="text" label="Địa chỉ" ref={addressInputRef} />
                    <Input className={classes["col-12"]} id="6" type="text" label="Email" ref={emailInputRef} />
                </Section>
                <Section label="THÔNG TIN KHÁM BỆNH">
                    <div className={classes["col-6"]}>
                        <Input id="9" type="text" label="Mã hồ sơ BV" ref={hospitalPatientInputRef} isRequired={true} />
                        <Radiobutton name="has-insurance" options={radioButtonValues} label="Bảo hiểm" ref={hasInsuranceInputRef} />
                    </div>
                    <div className={classes["col-6"]}>
                        <Input id="8" type="date" label="Ngày phẫu thuật" ref={surgeryDateInputRef} />
                        <Input id="7" type="date" label="Ngày đến khám" ref={examinationDateInputRef} />
                    </div>
                </Section>
                <Button className={classes.btn}>Tạo hồ sơ</Button>
            </form>
        </Card>

    );
};

export default AddPatient;