import React, { useState } from "react";
import styles from "./Duration.module.sass";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dropdown from "../../../components/Dropdown";
import TextInput from "../../../components/TextInput";

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
const DayOptions = ["1 days", "3 days", "5 days", "7 days", "1 month"];
const SelectWallet = ({ className }) => {
    const [visible, setVisible] = useState(false);
    const [value, onChange] = useState(new Date());
    const [Day, setDay] = useState(DayOptions[0]);
    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div className={cn(styles.user, className)}>
                <div className={styles.head} onClick={() => setVisible(!visible)}>
                </div>
                {visible && (
                    <div className={styles.body}>
                        <div className={styles.wrap}>
                            <div className={styles.calendar}>
                                {/* <form className={styles.form} action=""> */}
                                    <div className={styles.label}>Date Range</div>
                                    <Dropdown
                                        className={styles.dropdownCalendar}
                                        value={Day}
                                        setValue={setDay}
                                        options={DayOptions}
                                    />
                                    <div className={styles.text}>
                                        <div className={styles.label}>Starting</div>
                                        <div className={styles.label}>Ending</div>
                                    </div>
                                    <div className={styles.textDay}>
                                        <TextInput
                                            className={styles.field}
                                            placeholder="03/08/2022"
                                            type="text"
                                        />
                                        {/* <div className={styles.das}><i class="fad fa-arrows-alt-h"></i></div> */}
                                        <TextInput
                                            className={styles.field}
                                            placeholder="04/08/2022"
                                            type="text"
                                        />
                                    </div>
                                {/* </form> */}
                                <div className={styles.duration_calendar}><Calendar onChange={onChange} value={value} />
                                    <div className={styles.Time}>
                                        <div className={styles.oclock} style={{ fontSize: 15 }}><i className="fas fa-clock"></i></div>
                                        <div className={styles.currentTiem} style={{ fontSize: 15 }}>{time}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </OutsideClickHandler>
    );
};

export default SelectWallet;
