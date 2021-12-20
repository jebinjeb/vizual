import { createPopper } from "@popperjs/core";
import Image from "next/image";
import { createRef, useState } from "react";

export default function Navbar() {
  const [dashboardsDropdownStatus, setDashboardsDropdownStatus] = useState(false);
  const [profileDropdownStatus, setProfileDropdownStatus] = useState(false);

  const dashboardsBtnRef = createRef();
  const dashboardsDropdownRef = createRef();
  const profileBtnRef = createRef();
  const profileDropdownRef = createRef();

  const openDropdownPopover = (type) => {
    switch (type) {
      case 'dashboard':
        createPopper(dashboardsBtnRef.current, dashboardsDropdownRef.current, {
          placement: "bottom-start"
        });
        setDashboardsDropdownStatus(true);
        break;

      case 'profile':
        createPopper(profileBtnRef.current, profileDropdownRef.current, {
          placement: "bottom-end"
        });
        setProfileDropdownStatus(true);
    }
  };

  const closeDropdownPopover = (type) => {
    switch (type) {
      case 'dashboard':
        setDashboardsDropdownStatus(false);
        break;

      case 'profile':
        setProfileDropdownStatus(false);
        break;
    }
  };

  return (
    <div className="mx-auto bg-white shadow-lg mb-5">
      <div className="flex flex-wrap h-16">
        {/* Actions */}
        <div className="w-full flex flex-1 justify-start items-center px-10">
          <div className="relative inline-flex align-middle">
            <button
              className="font-semibold text-blueGray-600 uppercase text-md px-4 py-3 rounded hover:text-amber-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              ref={dashboardsBtnRef}
              onClick={() => {
                dashboardsDropdownStatus
                  ? closeDropdownPopover('dashboard')
                  : openDropdownPopover('dashboard');
              }}
            >
              Dashboard
              <i className={`px-2 fas ${dashboardsDropdownStatus ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>
            <div
              ref={dashboardsDropdownRef}
              className={
                (dashboardsDropdownStatus ? "block " : "hidden ") +
                "bg-blueGray-700 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-40 min-w-48"
              }
            >
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:font-semibold"
                onClick={e => e.preventDefault()}
              >Clickhouse</a>

              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:font-semibold"
                onClick={e => e.preventDefault()}
              >Postgres</a>
            </div>
          </div>

          <button
            className="font-semibold text-blueGray-600 uppercase text-md px-6 py-3 rounded hover:text-amber-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            Queries
          </button>

          <button
            className="font-semibold text-blueGray-600 uppercase text-md px-6 py-3 rounded hover:text-amber-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            Alerts
          </button>
        </div>

        {/* Logo */}
        <div className="w-auto flex flex-initial justify-center items-center">
          <Image src="/logo.png" alt="logo" height="50px" width="50px" />
        </div>

        {/* Profile */}
        <div className="w-full flex flex-1 justify-end items-center px-10 ">
          <Image className="shadow rounded-full max-w-full h-auto align-middle border-none" height="40px" width="40px" src="/avatar.png" alt="avatar" />

          <button
            className="font-semibold text-blueGray-600 uppercase text-md px-4 py-3 rounded hover:text-amber-500 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            ref={profileBtnRef}
            onClick={() => {
              profileDropdownStatus
                ? closeDropdownPopover('profile')
                : openDropdownPopover('profile');
            }}>
            Madhu
            <i className={`px-2 fas ${profileDropdownStatus ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          <div
            ref={profileDropdownRef}
            className={
              (profileDropdownStatus ? "block " : "hidden ") +
              "bg-blueGray-700 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-40 min-w-48"
            }
          >
            <a
              href="#pablo"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:font-semibold"
              onClick={e => e.preventDefault()}
            >Settings</a>

            <a
              href="#pablo"
              className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white hover:font-semibold"
              onClick={e => e.preventDefault()}
            >Logout</a>
          </div>
        </div>

      </div>
    </div>
  )
}