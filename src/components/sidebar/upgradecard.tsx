import { useState } from "react";
import ImageUpgradeCard from "../../assets/upgrade-card.png"
import MembershipModal from "../settings/membershipmodal";

const UpgradeCard = () => {
    const [showModal, setShowModal] = useState(false);
    return (<>
        <div className="upgrade-card">
            <div className="icon-wrapper">
                <img src={ImageUpgradeCard} />
            </div>
            <h4>Do more with Premium</h4>
            <button className="upgrade-btn"
                onClick={() => setShowModal(true)} >Upgrade Now</button>
        </div>

        {showModal && <MembershipModal onClose={() => setShowModal(false)} />}
    </>
    );
};

export default UpgradeCard;
