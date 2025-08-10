
import IconVector from "../../assets/icon-vector.png";
interface SidebarLinkProps {
    img?: string;
    text: string;
}
const SettingsItem: React.FC<SidebarLinkProps> = ({ img, text }) => {
    return (
        <div className="settings-item">
            <div className="settings-item-left">
                <img src={img} />
                <span>
                    {text}
                </span>
            </div>
            <img src={IconVector} alt="" className="iconvector" />
        </div>
    );
};
export default SettingsItem;