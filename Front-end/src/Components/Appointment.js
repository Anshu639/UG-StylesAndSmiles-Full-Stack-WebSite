import React, { useState } from 'react'
import classes from "./Appointment.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios"
const Appointment = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [date, setDate] = useState(new Date());
    const [values, setValues] = useState({
        name: "",
        email: "",
        gender: "",
        phone: "",
        date: "",
        service: [],
        message: "",
    });

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setDate(date);
        setValues({
            ...values,
            date: date,
        });
    };
    const handleMultiSelectChange = (selectedList, selectedItem) => {
        setSelectedOptions(selectedList);
        setValues({
            ...values,
            service: selectedList.map((item) => item.key),
        });
    };


    const Appointment = () => {
        axios.post("http://localhost:9002/appointments", values)
            .then(res => {
                alert(res.data.message)
            })
    }
    return (
        <div>
            <h2 className={classes.heading}>Book an Appointment</h2>
            <form>
                <div className={classes.ClearFlix}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className={classes.formGroup} >
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            required
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className={classes.ClearFlix}>
                    <div className={classes.formGroup}>
                        <label htmlFor="gender">Gender: </label>
                        <select name="gender" id="gender" className="form-control" onChange={onChange} >
                            <option>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={classes.formGroup}>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control"
                            required
                            onChange={onChange}
                        />
                    </div>

                </div>

                <div className={classes.ClearFlix}>
                    <div className={classes.formGroup}>
                        <label htmlFor="date">Date:</label>
                        <DatePicker
                            id='date'
                            name='date'
                            selected={date}
                            onChange={handleDateChange}
                            showTimeSelect
                            dateFormat="Pp"
                            className="form-control"
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="service">Service:
                        </label>
                        <Multiselect
                            displayValue="key"
                            name="service"
                            groupBy="cat"
                            value={selectedOptions}
                            // className="form-control"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={(event) => { handleMultiSelectChange(event) }}
                            onSearch={function noRefCheck() { }}
                            onSelect={(event) => { handleMultiSelectChange(event) }}
                            options={[
                                {
                                    cat: 'Facial',
                                    key: 'Herbaline'
                                },
                                {
                                    cat: 'Facial',
                                    key: 'Lotus Diamond'
                                },
                                {
                                    cat: 'Facial',
                                    key: 'Lotus Gold'
                                },
                                {
                                    cat: 'Facial',
                                    key: 'Lotus White Glow'
                                },
                                {
                                    cat: 'Spa',
                                    key: 'Keratin'
                                },
                                {
                                    cat: 'Spa',
                                    key: 'Matrix Spa'
                                },
                                {
                                    cat: 'Spa',
                                    key: 'Loreal Spa'
                                },
                                {
                                    cat: 'Wax',
                                    key: 'Face wax'
                                },
                                {
                                    cat: 'Wax',
                                    key: 'Head wax'
                                },
                                {
                                    cat: 'Wax',
                                    key: 'Full body wax'
                                },
                                {
                                    cat: 'Manicure-Pedicure',
                                    key: 'Scrub'
                                },
                                {
                                    cat: 'Manicure-Pedicure',
                                    key: 'V.L.CC'
                                },
                                {
                                    cat: 'Manicure-Pedicure',
                                    key: 'Scrub + Cream'
                                },
                                {
                                    cat: 'Bleach',
                                    key: 'V.L.C Gold'
                                },
                                {
                                    cat: 'Bleach',
                                    key: 'V.L.C Diamond'
                                },
                                {
                                    cat: 'Bleach',
                                    key: 'Fruit bleech'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Papaya'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Lotus'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Chocolate'
                                },
                                {
                                    cat: 'Massage',
                                    key: 'Fruit'
                                }
                            ]}
                            placeholder="Select Services"
                            style={{
                                chips: {
                                    background: 'black'
                                },
                                multiselectContainer: {
                                    color: 'Black'
                                },
                                searchBox: {
                                    backgroundColor: "white"
                                }
                            }}
                        />
                    </div>

                </div>

                <div className={classes.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="form-control" onChange={onChange}></textarea>
                </div>
                <br />

                <button type="button" className={classes.button} onClick={Appointment}>Book Now</button>
            </form>
        </div>
    )
}

export default Appointment
