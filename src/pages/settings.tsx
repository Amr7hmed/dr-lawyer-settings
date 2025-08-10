import Layout from "../components/layout";
import ProfileHeader from "../components/settings/profileheader";
import SettingsList from "../components/settings/settingslist";

const SettingsPage = () => {
  return (
    <>
      <Layout>

        <main className="settings">
          <ProfileHeader />
          <SettingsList />
        </main>
      </Layout>
    </>
  );
};

export default SettingsPage;
