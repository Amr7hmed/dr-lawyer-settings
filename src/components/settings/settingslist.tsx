import { useState } from "react";

import IconTimecircle from "../../assets/icon-timecircle.png";
import IconWithdraw from "../../assets/icon-withdraw.png";
import IconLoction from "../../assets/icon-loction.png";

import IconProfile from "../../assets/icon-profile.png";
import IconSubtract from "../../assets/icon-subtract.png";
import IconNotification from "../../assets/icon-notification.png";
import IconVectorThree from "../../assets/icon-vector-three.png";

import IconVectorOne from "../../assets/icon-vector-one.png";
import IconVectorTwo from "../../assets/icon-vector-two.png";
import IconPath from "../../assets/icon-path.png";
import SettingsItem from "./settingsitem";

const SettingsList = () => {
    const [availability, setAvailability] = useState(true);

    return (
        <div className="settings-container">
            {/* My Account */}
            <div className="settings-section settings-section-acount">
                <h3>My Account</h3>

                <div className="settings-section-list">
                    <div className="settings-item toggle-item">
                        <span>Availability</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={availability}
                                onChange={() => setAvailability(!availability)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <p className="availability-note">
                        By turning off you will not receive any appointment.
                    </p>

                    <SettingsItem img={IconTimecircle} text={"Edit Availability Time"} />
                    <SettingsItem img={IconLoction} text={"Edit Address"} />
                    <SettingsItem img={IconWithdraw} text={"Withdraw Earning"} />

                </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* General */}
            <div className="settings-section settings-section-general">
                <h3>General</h3>

                <div className="settings-section-list">
                    <div className="settings-section-list-items">
                        <SettingsItem img={IconProfile} text={"Edit Profile"} />
                        <SettingsItem img={IconVectorOne} text={"Privacy Policy & Terms"} />
                    </div>
                    <div className="settings-section-list-items">
                        <SettingsItem img={IconSubtract} text={"Language"} />
                        <SettingsItem img={IconVectorTwo} text={"Help and Support"} />
                    </div>
                    <div className="settings-section-list-items">
                        <SettingsItem img={IconNotification} text={"Notification"} />
                        <SettingsItem img={IconPath} text={"Refer a Friend"} />
                    </div>
                    <div className="settings-section-list-items">
                        <SettingsItem img={IconVectorThree} text={"About Us"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsList;

