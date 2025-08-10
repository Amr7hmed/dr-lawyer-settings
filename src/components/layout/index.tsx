import Sidebar from "../sidebar/index"
import Header from "../header/index"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content-wrapper">
        <Header />{children}
      </div>
    </div>
  )
}

export default Layout
