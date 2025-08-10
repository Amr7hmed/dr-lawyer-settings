import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";
import profile from "../../assets/image-profile.png";
import coverImage from "../../assets/cover.png";
import WalletModal from "./walletmodal";
import ManageSubscription from "./managesubscription";

const ProfileHeader = () => {
    const [isWalletOpen, setIsWalletOpen] = useState(false);
    const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
    return (
        <>
            <div className="profile-header">
                <div className="profile-header__cover" style={{ backgroundImage: `url(${coverImage})` }}>
                    <button className="profile-header__logout">
                        <FaPowerOff /> Log Out
                    </button>
                </div>

                <div className="profile-header__content">
                    <div className="profile-header__info">
                        <div className="profile-header__avatar-wrapper">
                            <div className="avatar">
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="profile-header__avatar"
                                />
                                <span className="profile-header__status" />
                            </div>
                        </div>
                        <h2>Mark Henry</h2>
                        <p>markhenry12@gmail.com</p>
                    </div>

                    <div className="profile-header__actions">
                        <button className="btn-outline" onClick={() => setIsWalletOpen(true)}>
                            Manage Subscription
                        </button>
                        <button className="btn-outline">AED 3400</button>
                        <button className="btn-dark">Preview</button>
                    </div>
                </div>
            </div>

            <WalletModal
                isOpen={isWalletOpen}
                onClose={() => setIsWalletOpen(false)}
                onWithdrawClick={() => {
                    setIsWalletOpen(false);
                    setIsSubscriptionOpen(true);
                }}
                availableFund="AED 254.50"
                revenue={[
                    { label: "Total Earnings", amount: "AED 2560" },
                    { label: "Active Cases", amount: "AED 230" },
                    { label: "Withdrawn", amount: "AED 1550" },
                    { label: "Available for Withdraw", amount: "AED 962" },
                ]}
                withdrawHistory={[
                    { message: "Withdrawal Completed Successfully", date: "Jul 06, 22", amount: "-AED 130" },
                    { message: "Withdrawal Completed Successfully", date: "Jul 06, 22", amount: "-AED 220" },
                    { message: "Withdrawal Completed Successfully", date: "Jul 06, 22", amount: "-AED 130" },
                ]}
            />

            <ManageSubscription
                isOpen={isSubscriptionOpen}
                onClose={() => setIsSubscriptionOpen(false)}
                currentPlan={{
                    name: "Dr.Lawyer",
                    duration: "1 month Subscription",
                    nextBillingDate: "September 5, 2024",
                }}
                paymentHistory={[
                    { status: "Paid", plan: "Dr.Lawyer - 1 month plan", date: "25 Jul, 2024", amount: "-AED 130" },
                    { status: "Cancelled", plan: "Dr.Lawyer - 1 month plan", date: "25 Jul, 2024", amount: "-AED 130" },
                    { status: "Paid", plan: "Dr.Lawyer - 1 month plan", date: "25 Jul, 2024", amount: "-AED 100" },
                ]}
            />
        </>
    );
};

export default ProfileHeader;
