import React from "react";

type PaymentStatus = "Paid" | "Cancelled" | "Pending";

interface Payment {
  status: PaymentStatus;
  plan: string;
  date: string;
  amount: string;
}

interface ManageSubscriptionProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan: {
    name: string;
    duration: string;
    nextBillingDate: string;
  };
  paymentHistory: Payment[];
}

const ManageSubscription: React.FC<ManageSubscriptionProps> = ({
  isOpen,
  onClose,
  currentPlan,
  paymentHistory,
}) => {
  if (!isOpen) return null;

  const getStatusClass = (status: PaymentStatus) => {
    switch (status) {
      case "Paid":
        return "status paid";
      case "Cancelled":
        return "status cancelled";
      case "Pending":
        return "status pending";
      default:
        return "status";
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="manage-subscription" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="wallet-header">
          <span className="back">←</span>
          <h2>Manage Subscription</h2>
          <button className="close" onClick={onClose}>×</button>
        </div>

        {/* Current Plan */}
        <div className="current-plan">
          <div className="plan-text">
            <h3>{currentPlan.name}</h3>
            <p>{currentPlan.duration}</p>
            <span className="next-billing">
              Next billing date: {currentPlan.nextBillingDate}
            </span>
          </div>
          <div className="plan-actions">
            <button className="cancel">Cancel Subscription</button>
            <button className="change">Change Plan</button>
          </div>
        </div>

        {/* Payment History */}
        <div className="payment-history">
          <h4>Payment History</h4>
          {paymentHistory.map((item, index) => (
            <div key={index} className="payment-item">
              <div className="info">
                <span className={getStatusClass(item.status)}>
                  {item.status}
                </span>
                <p className="plan">{item.plan}</p>
                <span className="date">{item.date}</span>
              </div>
              <div className="amount">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageSubscription;
