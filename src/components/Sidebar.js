import React from "react";
import "./Sidebar.css";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbMessage2 } from "react-icons/tb";
import { TiCalculator } from "react-icons/ti";
import { BsLightningChargeFill } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { BsExclamationTriangle } from "react-icons/bs";
import { TbBrandReact } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar-body">
      <div className="sidebar-heading">
        <p className="sidebar-heading-logo">
          <TbBrandReact />
        </p>
        <p>Realply</p>
      </div>
      <div className="sidebar-options">
        <div className="sidebar-options-content">
          <p>
            <MdOutlineSpaceDashboard />
          </p>
          <p>Dashboard</p>
        </div>
        <div className="sidebar-options-content">
          <p>
            <TbMessage2 />
          </p>
          <p>Messages</p>
        </div>
        <div className="sidebar-options-content">
          <p>
            <TiCalculator />
          </p>
          <p>Calender</p>
        </div>
        <div className="sidebar-options-content">
          <p>
            <BsLightningChargeFill />
          </p>
          <p>Campaign</p>
        </div>
      </div>
      <div className="sidebar-options sidebar-options-new">
        <div className="sidebar-options-content">
          <p>
            <GoSettings />
          </p>
          <p>Settings</p>
        </div>
        <div className="sidebar-options-content">
          <p>
            <BsExclamationTriangle />
          </p>
          <p>Help</p>
        </div>
      </div>
      <div className="sidebar-warning">
        <div className="sidebar-warning-content">
          <p>
            Your free trial is about to end in <b>10 days</b>
          </p>
        </div>
        <div className="sidebar-warning-text">
          <p>You will not be billed during your free trial.</p>
          <p>
            To keep your projects running after the trial end, upgrade to a paid
            option.
          </p>
        </div>
        <button className="sidebar-btn">Upgrade</button>
      </div>
      <div className="sidebar-options">
        <div className="sidebar-options-content">
          <p>
            <RiLogoutBoxLine />
          </p>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
