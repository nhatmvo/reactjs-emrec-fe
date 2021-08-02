import Input from '../../components/UI/Input';
import Radiobutton from '../../components/UI/Radiobutton';
import Button from '../../components/UI/Button';

import classes from './AddPatient.module.scss';
import Card from '../../components/UI/Card';

const AddPatient = () => {

    const radioButtonValues = [
        {
            id: "1",
            value: true,
            label: "Có",
            checked: true
        },
        {
            id: "2",
            value: false,
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

    return (
        <Card headerLabel="Tạo hồ sơ bệnh nhân">
            <form className={classes.wrapper}>
                <div className={classes.section}>
                    <div className={classes.label}>
                        THÔNG TIN ĐỊNH DANH<hr />
                    </div>
                    <div className={classes.content}>
                        <Input isRequired={true} className={classes["col-12"]} id="1" type="text" label="Họ tên" />
                        <div className={classes["col-6"]}>
                            <Input id="2" type="date" label="Năm sinh" isRequired={true} />
                            <Radiobutton name="gender" values={radioButtonGender} label="Giới tính" isRequired={true}/>
                        </div>
                        <div className={classes["col-6"]}>
                            <Input id="4" type="text" label="CMND/CCCD" isRequired={true} />
                            <Input id="3" type="number" label="Số điện thoại" isRequired={true} />
                        </div>
                        <Input className={classes["col-12"]} id="5" type="text" label="Địa chỉ" />
                        <Input className={classes["col-12"]} id="6" type="text" label="Email" />

                    </div>
                </div>
                <div className={classes.section}>
                    <div className={classes.label}>
                        THÔNG TIN KHÁM BỆNH<hr />
                    </div>
                    <div className={classes.content}>
                        <div className={classes["col-6"]}>
                            <Input id="7" type="date" label="Ngày đến khám" />
                            <Radiobutton name="has-insurance" values={radioButtonValues} label="Bảo hiểm" />
                        </div>
                        <div className={classes["col-6"]}>
                            <Input id="8" type="date" label="Ngày phẫu thuật" />
                            <Input id="9" type="date" label="Ngày vào viện" />
                        </div>
                    </div>
                </div>
                <div>
                    <Button className={classes.btn}>Tạo hồ sơ</Button>
                </div>
            </form>
        </Card>

    );
};

export default AddPatient;