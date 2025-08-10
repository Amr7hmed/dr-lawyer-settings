import React from "react";

interface RevenueItem {
    label: string;
    amount: string;
}

interface WithdrawHistoryItem {
    message: string;
    date: string;
    amount: string;
}
interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
    onWithdrawClick: () => void;
    availableFund: string;
    revenue: RevenueItem[];
    withdrawHistory: WithdrawHistoryItem[];
}

const WalletModal: React.FC<WalletModalProps> = ({
    isOpen,
    onClose,
    onWithdrawClick,
    availableFund,
    revenue,
    withdrawHistory,
}) => {
    if (!isOpen) return null;

    return (<>
        <div className="wallet-overlay" onClick={onClose}>
            <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="wallet-header">
                    <span className="back">←</span>
                    <h2>Manage Subscription</h2>
                    <button className="close" onClick={onClose}>×</button>
                </div>

                {/* Available Fund */}
                <div className="fund-section">
                    <div className="fund-info">
                        <h3>{availableFund}</h3>
                        <span>Available Fund</span>
                    </div>
                    <button className="withdraw-btn"
                        onClick={onWithdrawClick}
                    >Withdraw</button>
                </div>

                {/* Revenue */}
                <div className="revenue-section">
                    <h4>Revenue</h4>
                    <div className="revenue-table">
                        {revenue.map((item, index) => (
                            <div key={index} className="revenue-row">
                                <span>{item.label}</span>
                                <span className="amount">{item.amount}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Withdraw History */}
                <div className="history-section">
                    <h4>Withdraw History</h4>
                    {withdrawHistory.map((item, index) => (
                        <div key={index} className="history-card">
                            <div className="history-info">
                                <p className="message">{item.message}</p>
                                <span className="date">{item.date}</span>
                            </div>
                            <div className="history-amount">{item.amount}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </>
    );
};

export default WalletModal;
