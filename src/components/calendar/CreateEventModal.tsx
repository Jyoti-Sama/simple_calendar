import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { motion } from "framer-motion";
import styles from './modal.module.css'

Modal.setAppElement('#root'); // Set the app element to avoid accessibility issues

const CreateEventModal = ({ isOpen, onClose, submitHandler, temEvent }) => {
    const [selectedOption, setSelectedOption] = useState('client');
    const [clientName, setClientName] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [isAllDay, setIsAllDay] = useState(false);
    const [eventDate, setEventDate] = useState("2023-05-01");
    const [eventDateTo, setEventDateTo] = useState('');
    const [eventTime, setEventTime] = useState('12:30');
    const [eventDuration, setEventDuration] = useState(50);
    const [eventLocation, setEventLocation] = useState('Location: Unassigned');
    const [isRepeating, setIsRepeating] = useState(false);


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleClientNameChange = (event) => {
        setClientName(event.target.value);
    };

    const handleEventTitleChange = (event) => {
        setEventTitle(event.target.value);
    };


    const handleAllDayChange = (event) => {
        setIsAllDay(event.target.checked);
    };

    const handleDateChange = (event) => {
        setEventDate(event.target.value);
    };

    const handleDateToChange = (event) => {
        setEventDateTo(event.target.value);
    };

    const handleTimeChange = (event) => {
        setEventTime(event.target.value);
    };

    const handleDurationChange = (event) => {
        setEventDuration(event.target.value);
    };

    const handleLocationChange = (event) => {
        setEventLocation(event.target.value);
    };

    const handleRepeatingChange = (event) => {
        setIsRepeating(event.target.checked);
    };

    // TODO
    const handleNewClientClick = () => {
        // Handle the logic for creating a new client
        console.log('Creating a new client');
    };

    const handleCancelClick = () => {
        onClose();
    };

    // repeat logics

    const [repeatEvery, setRepeatEvery] = useState(1);
    const [repeatFrequency, setRepeatFrequency] = useState("week");
    const [repeatFrequencyCount, setRepeatFrequencyCount] = useState(1);
    const [repeatDays, setRepeatDays] = useState([
        false, // Sunday
        false, // Monday
        false, // Tuesday
        false, // Wednesday
        false, // Thursday
        false, // Friday
        false // Saturday
    ]);
    const [repeatEndType, setRepeatEndType] = useState("after");
    const [repeatEndAfter, setRepeatEndAfter] = useState(1);
    const [repeatEndDate, setRepeatEndDate] = useState("");

    const [selectedService, setSelectedService] = useState("Group therapy 1")
    const [serviceFee, setServiceFee] = useState(100)

    const handleRepeatEveryChange = (event) => {
        setRepeatEvery(parseInt(event.target.value));
    };

    const handleRepeatFrequencyChange = (event) => {
        setRepeatFrequency(event.target.value);
    };

    const handleRepeatDaysChange = (index) => {
        const newRepeatDays = [...repeatDays];
        newRepeatDays[index] = !newRepeatDays[index];
        setRepeatDays(newRepeatDays);
    };

    const handleRepeatEndTypeChange = (event) => {
        setRepeatEndType(event.target.value);
    };

    const handleRepeatEndAfterChange = (event) => {
        setRepeatEndAfter(parseInt(event.target.value));
    };

    const handleRepeatEndDateChange = (event) => {
        setRepeatEndDate(event.target.value);
    };



    const popInAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30,
            },
        },
    };

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: isRepeating && clientName !== "" && selectedOption === "client" ? "translate(-50%, -50%) scale(0.8)" : "translate(-50%, -50%) scale(1)",
            width: "350px",
            maxWidth: "350px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.2)",
            background: "#fff",
            transition: "transform .25s ease-in-out",
            overflow: "auto",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
    };



    const handleDoneClick = () => {
        // Handle the logic for saving the event  
        const payload = {};

        payload.eventDate = eventDate;
        payload.eventLocation = eventLocation;

        if (isRepeating) {
            repeatEvery
            repeatFrequency
            repeatDays

            repeatEndType

            repeatEndAfter
            repeatEndDate
        }

        if (isAllDay) {
            payload.eventDateTo = new Date(eventDateTo);
        } else {
            // payload.eventTime = eventTime;
            // payload.eventDuration = eventDuration;

            const date = new Date(eventDate + " " + eventTime);
            const start = date;
            const end = new Date(date.getTime() + eventDuration * 1000 * 60);

            payload.start = start;
            payload.end = end;
        }

        if (selectedOption === 'client') {
            payload.title = clientName;
            payload.clientName = clientName;

            payload.serviceFee = serviceFee;
            payload.selectedService = selectedService;
        } else {
            payload.title = eventTitle;
        }

        console.log(payload)

        submitHandler(payload);
        onClose();
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{ ...customStyles }}
        >

            <motion.div variants={popInAnimation} initial="hidden" animate="visible">

                <div className={styles['modal-container']}>

                    <h4 className={styles['modal-header']}>New Appointment</h4>

                    <div style={{ fontSize: "14px", margin: "10px 0 0 0" }}>
                        <label className={styles['typeahead-trigger']}>
                            <input
                                aria-checked="true"
                                name="flyout-type"
                                id="ember2038"
                                type="radio"
                                value="client"
                                onChange={handleSelectChange}
                            />
                            {" "}
                            <span>Client Appointment</span>
                        </label>


                        <label className="ember-radio-button  boolean">

                            <input
                                aria-checked="false"
                                name="flyout-type"
                                id="ember2040"
                                type="radio"
                                value="non-client-appointment"
                                style={{ margin: " 0 0 0 15px" }}
                                onChange={handleSelectChange}
                            />
                            {" "}
                            <span>Other</span>
                        </label>

                    </div>

                    <br />

                    {selectedOption === 'client' ? (
                        <div style={{ display: "flex" }}>
                            <label style={{ display: "flex" }}>

                                <select
                                    value={clientName}
                                    onChange={handleClientNameChange}
                                    style={{
                                        height: "31px",
                                        width: "190px",
                                        padding: "6px 12px",
                                        margin: "0 5px 0 0"
                                    }}
                                >
                                    <option value="" disabled selected hidden>
                                        Client Name
                                    </option>
                                    <option value="client a">client a</option>
                                    <option value="client b">client b</option>
                                    <option value="client c">client c</option>
                                </select>
                            </label>

                            <button
                                onClick={handleNewClientClick}
                                className={styles['button']}
                                style={{
                                    height: "31px",
                                    width: "110px",
                                    padding: "7px 10px",
                                    color: "#333",
                                    fontSize: "14px",
                                    border: "none",
                                    background: "#F2F2F2"
                                }}
                            >
                                + New Client
                            </button>
                        </div>
                    )
                        :
                        <div>
                            <label>
                                <input
                                    type="text"
                                    value={eventTitle}
                                    onChange={handleEventTitleChange}
                                    style={{
                                        height: "31px",
                                        width: "100%",
                                        padding: "6px 12px",
                                    }}
                                    placeholder='Add title'
                                />
                            </label>
                        </div>
                    }

                    <br />
                    <hr style={{ opacity: "0.5" }} />
                    <br />

                    <div
                        style={{ margin: "0 0 5px 0" }}
                    >
                        <label>
                            <input type="checkbox" checked={isAllDay} onChange={handleAllDayChange} />
                            <span style={{ margin: "0 0 0 5px", fontSize: "14px" }}>All day</span>
                        </label>
                    </div>
                    <div style={{ display: "flex", marginBottom: "5px" }}>

                        <label>
                            {/* Date: */}
                            <input
                                type="date"
                                value={eventDate}
                                onChange={handleDateChange}
                                style={{
                                    padding: "6px 8px",
                                    height: "31px",
                                    width: "120px",
                                    background: "#fff",
                                    color: "#333",
                                    border: "1px solid #333",
                                    borderRadius: "3px"
                                }}
                            />
                        </label>
                        {!isAllDay ? (
                            <>
                                <label>
                                    {/* Time: */}
                                    <input
                                        type="time"
                                        value={eventTime}
                                        onChange={handleTimeChange}
                                        style={{
                                            padding: "6px 8px",
                                            height: "31px",
                                            width: "96px",
                                            background: "#fff",
                                            color: "#333",
                                            border: "1px solid #333",
                                            borderRadius: "3px"
                                        }}
                                    />
                                </label>
                                <label>
                                    {/* Duration (in minutes): */}
                                    <input
                                        type="number"
                                        value={eventDuration}
                                        onChange={handleDurationChange}
                                        style={{
                                            padding: "6px 8px",
                                            height: "31px",
                                            width: "50px",
                                            background: "#fff",
                                            color: "#333",
                                            border: "1px solid #333",
                                            borderRadius: "3px"
                                        }}
                                    />
                                    <span
                                        style={{ margin: "0 0 0 5px", fontSize: "14px" }}
                                    >
                                        min
                                    </span>
                                </label>
                            </>
                        ) : (
                            <label>
                                <span
                                    style={{
                                        fontSize: "14px",
                                        margin: "0 27px"
                                    }}
                                >
                                    to
                                </span>
                                <input
                                    type="date"
                                    value={eventDateTo}
                                    onChange={handleDateToChange}
                                    style={{
                                        padding: "6px 8px",
                                        height: "31px",
                                        width: "120px",
                                        background: "#fff",
                                        color: "#333",
                                        border: "1px solid #333",
                                        borderRadius: "3px"
                                    }}
                                />
                            </label>
                        )}
                    </div>

                    {selectedOption === 'client' ? (
                        <>
                            <label>
                                <select
                                    value={eventLocation}
                                    onChange={handleLocationChange}
                                    style={{
                                        padding: "6px 12px",
                                        height: "31px",
                                        width: "100%",
                                        background: "#fff",
                                        color: "#333",
                                        // border: "none",
                                        borderRadius: "4px",
                                        margin: "10px 0 10px 0"
                                    }}
                                >
                                    <option value="Location: Unassigned">Location: Unassigned</option>
                                    <option value="Telehealth: Video Office">Telehealth: Video Office</option>
                                </select>
                            </label>


                        </>

                    ) : null}


                    <label>
                        <input type="checkbox" checked={isRepeating} onChange={handleRepeatingChange} />
                        <span style={{ margin: "10px 0 0 5px", fontSize: "14px" }}>Repeat</span>
                    </label>
                    <br />

                    {isRepeating ? (
                        <div className={styles['repeat-section']}>
                            <div style={{ display: "flex" }}>
                                <label style={{ display: "flex" }}>
                                    <span>Every</span>

                                    <select
                                        value={repeatFrequencyCount}
                                        onChange={e => setRepeatFrequencyCount(e.target.value)}
                                        style={{
                                            width: "40px",
                                            height: "30px",
                                            border: "1px solid #333333",
                                            borderRadius: "3px",
                                            margin: "0 10px"
                                        }}
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                    </select>
                                </label>

                                <label style={{ display: "flex" }}>

                                    <select
                                        value={repeatFrequency}
                                        onChange={handleRepeatFrequencyChange}
                                        style={{
                                            width: "70px",
                                            height: "30px",
                                            border: "1px solid #333333",
                                            borderRadius: "3px",
                                            padding: "0 5px"
                                        }}
                                    >
                                        <option value="week">week</option>
                                        <option value="month">month</option>
                                        <option value="year">year</option>
                                    </select>
                                </label>
                            </div>

                            <br />

                            <div style={{ display: "flex" }}>
                                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
                                    // <label key={day}>
                                    //     <input
                                    //         type="checkbox"
                                    //         checked={repeatDays[index]}
                                    //         onChange={handleRepeatDaysChange(index)}
                                    //     />
                                    //     {day}
                                    // </label>
                                    <div
                                        key={day}
                                        onClick={() => handleRepeatDaysChange(index)}
                                        style={{
                                            background: repeatDays[index] ? "#1371c8" : "#FFFFFF",
                                            color: repeatDays[index] ? "#fff" : "#333333",
                                            height: "30px",
                                            width: "40px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            border: "0.1px solid #3f3f3f",
                                            borderTopLeftRadius: index === 0 ? "5px" : "0px",
                                            borderBottomLeftRadius: index === 0 ? "5px" : "0px",
                                            borderBottomRightRadius: index === 6 ? "5px" : "0px",
                                            borderTopRightRadius: index === 6 ? "5px" : "0px",
                                            borderLeft: index !== 0 ? "none" : "0.1px solid #3f3f3f",
                                            cursor: "pointer"
                                        }}
                                    >
                                        {day.charAt(0)}
                                    </div>
                                ))}
                            </div>

                            <br />

                            <div style={{ display: "flex" }}>
                                <label>
                                    Ends
                                    <select
                                        value={repeatEndType}
                                        onChange={handleRepeatEndTypeChange}
                                        style={{
                                            width: "80px",
                                            height: "31px",
                                            padding: "0 5px",
                                            margin: "0 10px",
                                            borderRadius: "4px"
                                        }}
                                    >
                                        {/* <option value="never">Never</option> */}
                                        <option value="after">After</option>
                                        <option value="on">On Date</option>
                                    </select>
                                </label>

                                {repeatEndType === "after" && (
                                    // <label>
                                    //     <input type="number" value={repeatEndAfter} onChange={handleRepeatEndAfterChange} />
                                    //     events
                                    // </label>
                                    <div className="recurring-end-col">
                                        <select
                                            value={repeatEndAfter}
                                            onChange={handleRepeatEndAfterChange}
                                            style={{
                                                width: "55px",
                                                height: "31px",
                                                padding: "0 5px",
                                                // margin: "0 10px"
                                                borderRadius: "4px"
                                            }}
                                        >
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="2">
                                                2
                                            </option>
                                            <option value="3">
                                                3
                                            </option>
                                            <option value="4">
                                                4
                                            </option>
                                            <option value="5">
                                                5
                                            </option>
                                            <option value="6">
                                                6
                                            </option>
                                            <option value="7">
                                                7
                                            </option>
                                            <option value="8">
                                                8
                                            </option>
                                            <option value="9">
                                                9
                                            </option>
                                            <option value="10">
                                                10
                                            </option>
                                            <option value="11">
                                                11
                                            </option>
                                            <option value="12">
                                                12
                                            </option>
                                            <option value="13">
                                                13
                                            </option>
                                            <option value="14">
                                                14
                                            </option>
                                            <option value="15">
                                                15
                                            </option>
                                            <option value="16">
                                                16
                                            </option>
                                            <option value="17">
                                                17
                                            </option>
                                            <option value="18">
                                                18
                                            </option>
                                            <option value="19">
                                                19
                                            </option>
                                            <option value="20">
                                                20
                                            </option>
                                            <option value="21">
                                                21
                                            </option>
                                            <option value="22">
                                                22
                                            </option>
                                            <option value="23">
                                                23
                                            </option>
                                            <option value="24">
                                                24
                                            </option>
                                            <option value="25">
                                                25
                                            </option>
                                            <option value="26">
                                                26
                                            </option>
                                            <option value="27">
                                                27
                                            </option>
                                            <option value="28">
                                                28
                                            </option>
                                            <option value="29">
                                                29
                                            </option>
                                            <option value="30">
                                                30
                                            </option>
                                            <option value="31">
                                                31
                                            </option>
                                            <option value="32">
                                                32
                                            </option>
                                            <option value="33">
                                                33
                                            </option>
                                            <option value="34">
                                                34
                                            </option>
                                            <option value="35">
                                                35
                                            </option>
                                            <option value="36">
                                                36
                                            </option>
                                            <option value="37">
                                                37
                                            </option>
                                            <option value="38">
                                                38
                                            </option>
                                            <option value="39">
                                                39
                                            </option>
                                            <option value="40">
                                                40
                                            </option>
                                            <option value="41">
                                                41
                                            </option>
                                            <option value="42">
                                                42
                                            </option>
                                            <option value="43">
                                                43
                                            </option>
                                            <option value="44">
                                                44
                                            </option>
                                            <option value="45">
                                                45
                                            </option>
                                            <option value="46">
                                                46
                                            </option>
                                            <option value="47">
                                                47
                                            </option>
                                            <option value="48">
                                                48
                                            </option>
                                            <option value="49">
                                                49
                                            </option>
                                            <option value="50">
                                                50
                                            </option>
                                            <option value="51">
                                                51
                                            </option>
                                            <option value="52">
                                                52
                                            </option>
                                            <option value="53">
                                                53
                                            </option>
                                            <option value="54">
                                                54
                                            </option>
                                            <option value="55">
                                                55
                                            </option>
                                            <option value="56">
                                                56
                                            </option>
                                            <option value="57">
                                                57
                                            </option>
                                            <option value="58">
                                                58
                                            </option>
                                            <option value="59">
                                                59
                                            </option>
                                            <option value="60">
                                                60
                                            </option>
                                            <option value="61">
                                                61
                                            </option>
                                            <option value="62">
                                                62
                                            </option>
                                            <option value="63">
                                                63
                                            </option>
                                            <option value="64">
                                                64
                                            </option>
                                            <option value="65">
                                                65
                                            </option>
                                            <option value="66">
                                                66
                                            </option>
                                            <option value="67">
                                                67
                                            </option>
                                            <option value="68">
                                                68
                                            </option>
                                            <option value="69">
                                                69
                                            </option>
                                            <option value="70">
                                                70
                                            </option>
                                            <option value="71">
                                                71
                                            </option>
                                            <option value="72">
                                                72
                                            </option>
                                            <option value="73">
                                                73
                                            </option>
                                            <option value="74">
                                                74
                                            </option>
                                            <option value="75">
                                                75
                                            </option>
                                            <option value="76">
                                                76
                                            </option>
                                            <option value="77">
                                                77
                                            </option>
                                            <option value="78">
                                                78
                                            </option>
                                            <option value="79">
                                                79
                                            </option>
                                            <option value="80">
                                                80
                                            </option>
                                            <option value="81">
                                                81
                                            </option>
                                            <option value="82">
                                                82
                                            </option>
                                            <option value="83">
                                                83
                                            </option>
                                            <option value="84">
                                                84
                                            </option>
                                            <option value="85">
                                                85
                                            </option>
                                            <option value="86">
                                                86
                                            </option>
                                            <option value="87">
                                                87
                                            </option>
                                            <option value="88">
                                                88
                                            </option>
                                            <option value="89">
                                                89
                                            </option>
                                            <option value="90">
                                                90
                                            </option>
                                            <option value="91">
                                                91
                                            </option>
                                            <option value="92">
                                                92
                                            </option>
                                            <option value="93">
                                                93
                                            </option>
                                            <option value="94">
                                                94
                                            </option>
                                            <option value="95">
                                                95
                                            </option>
                                            <option value="96">
                                                96
                                            </option>
                                            <option value="97">
                                                97
                                            </option>
                                            <option value="98">
                                                98
                                            </option>
                                            <option value="99">
                                                99
                                            </option>
                                            <option value="100">
                                                100
                                            </option>
                                        </select>
                                        <span
                                            style={{
                                                fontSize: "14px",
                                                margin: "0 0 0 5px"
                                            }}
                                        >
                                            events
                                        </span>
                                    </div>
                                )}

                                {repeatEndType === "on" && (
                                    <label>
                                        <input type="date" value={repeatEndDate} onChange={handleRepeatEndDateChange} />
                                    </label>
                                )}
                            </div>
                        </div>
                    ) : null}


                    {
                        clientName !== '' ? (
                            <div>

                            </div>
                        ) : null
                    }

                    <br />
                    <hr style={{ opacity: "0.5" }} />

                    {
                        selectedOption === "client" && clientName !== '' ? (
                            <>
                                <div>
                                    <div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "14px",
                                                margin: "0 0 10px 0"
                                            }}
                                        >
                                            <div>
                                                <div
                                                    style={{
                                                        padding: "10px 0 4px 0"
                                                    }}
                                                >
                                                    Services
                                                </div>
                                                <label>
                                                    <select
                                                        value={selectedService}
                                                        onChange={e => setSelectedService(e.target.value)}
                                                        style={{
                                                            width: "235px",
                                                            height: "30px",
                                                            border: "1px solid #333333",
                                                            borderRadius: "3px",
                                                            padding: "0 5px"
                                                        }}
                                                    >
                                                        <option value="Group therapy 1">Group therapy 1</option>
                                                        <option value="Group therapy 2">Group therapy 2</option>
                                                        <option value="Group therapy 3">Group therapy 3</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div>
                                                <div
                                                    style={{
                                                        padding: "10px 0 4px 0"
                                                    }}
                                                >
                                                    Fee
                                                </div>
                                                <label style={{ position: "relative" }}>
                                                    <input
                                                        type="number"
                                                        name="" id=""
                                                        style={{
                                                            width: "60px",
                                                            height: "30px",
                                                            border: "1px solid #333333",
                                                            borderRadius: "3px",
                                                            padding: "0 5px 0 15px"
                                                        }}
                                                        value={serviceFee}
                                                        onChange={e => setServiceFee(e.target.value)}
                                                    />
                                                    <span style={{
                                                        position: "absolute",
                                                        left: 5,
                                                        top: 1
                                                    }}>$</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                style={{
                                                    height: "30px",
                                                    borderRadius: "3px",
                                                    padding: "0 5px 0 5px",
                                                    background: "transparent",
                                                    border: "none",
                                                    fontWeight: "600",
                                                    margin: "0 0 10px 0",
                                                    color: "rgb(19, 113, 200)"
                                                }}
                                            >
                                                Add service
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    <br />
                                    <div
                                        style={{
                                            fontSize: "14px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                margin: "0 0 5px 0"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontWeight: "500"
                                                }}
                                            >
                                                Billing Type
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "13px"
                                                }}
                                            >
                                                Self-pay
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontWeight: "500"
                                                }}
                                            >
                                                Appointment Total
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "13px"
                                                }}
                                            >
                                                ${serviceFee}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <hr style={{ opacity: "0.5" }} />

                            </>
                        ) : null
                    }

                    <br />
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "end"
                        }}
                    >
                        <button
                            onClick={handleCancelClick}
                            style={{
                                padding: "6px 12px",
                                height: "31px",
                                width: "65px",
                                background: "#F2F2F2",
                                border: "none",
                                borderRadius: "4px",
                                color: "#333",
                                margin: "0 10px 0 0"
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDoneClick}
                            style={{
                                padding: "6px 12px",
                                height: "31px",
                                width: "60px",
                                background: "#1371C8",
                                border: "none",
                                borderRadius: "4px",
                                color: "#fff"
                            }}
                        >
                            Done
                        </button>
                    </div>

                </div>

            </motion.div>

        </Modal>
    );
};

export default CreateEventModal;
