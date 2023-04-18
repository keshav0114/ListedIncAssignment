import React from "react";
import "../CSS/sidebar.css";
import { ReactComponent as Dashboard } from "../SvgIcons/dashboard_icon.svg";
import { ReactComponent as Schedule } from "../SvgIcons/schedule_icon.svg";
import { ReactComponent as Setting } from "../SvgIcons/setting_icon.svg";
import { ReactComponent as Transaction } from "../SvgIcons/transaction_icon.svg";
import { ReactComponent as User } from "../SvgIcons/user_icon.svg";

const Sidebar = () => {
  const data = [
    {
      title: "Dashboard",
      icon: (props) => <Dashboard {...props} />,
    },
    {
      title: "Transactions",
      icon: (props) => <Transaction {...props} />,
    },
    {
      title: "Schedules",
      icon: (props) => <Schedule {...props} />,
    },
    {
      title: "Users",
      icon: (props) => <User {...props} />,
    },
    {
      title: "Settings",
      icon: (props) => <Setting {...props} />,
    },
  ];
  return (
    <>
      <div className="sidebarOuterContainer">
        <div className="sidebarTitle">Board.</div>
        <div className="sidebarInnerContainer">
          <div>
            {data.map((item, index) => (
              <div className="sidebarTitleContainer" key={index}>
                <item.icon />
                <div className="sidebarNavigationTitle">{item.title}</div>
              </div>
            ))}
          </div>
          <div>
            <div className="sidebarBottomTitle">Help</div>
            <div className="sidebarBottomTitle">Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
