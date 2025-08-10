import logo from "../../assets/dr-lawyer-logo_transparent.png";
import iconlysubtract from "../../assets/iconly-subtract.png";
import iconlywork from "../../assets/iconly-work.png";


// 
interface MembershipModalProps {
    onClose: () => void;
}

const MembershipModal: React.FC<MembershipModalProps> = ({ onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* Logo & Premium */}
                <div className="logo">
                    <div className="circle">
                        <img src={logo} alt="Dr Lawyer" />
                    </div>
                    <span className="premium-badge">Premium</span>
                </div>

                <h2 className="title">Start Your Membership Now</h2>

                {/* Features */}
                <div className="features">
                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <img src={iconlywork} alt="Access" />
                        </div>
                        <div>
                            <h4>Access to Client Requests</h4>
                            <p>More clients more potentials</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="icon-wrapper">
                            <img src={iconlysubtract} alt="Badge" />
                        </div>
                        <div>
                            <h4>Get Verified Badge</h4>
                            <p>Gain more trust with badge</p>
                        </div>
                    </div>
                </div>

                {/* Trial Info */}
                <div className="trial-info">
                    <span>✔ 30 Days free trial</span>
                    <span className="divider"></span>
                    <span>✔ Cancel anytime</span>
                </div>

                {/* Note */}
                <p className="cancel-note">Cancel your plan anytime in the appstore</p>

                {/* Actions */}
                <div className="actions">
                    <button className="start-btn">Start 30 Days free Trial</button>
                    <button className="no-thanks" onClick={onClose}>No Thanks</button>
                </div>
            </div>
        </div>
    );
};

export default MembershipModal;
