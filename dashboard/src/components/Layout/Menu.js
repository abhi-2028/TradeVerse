import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGeneralContext } from "../../context/GeneralContext";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logoutUser } = useGeneralContext();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () =>
    setIsProfileDropdownOpen((prev) => !prev);

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login", { replace: true });
  };

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  // Safe initials calculation
  const initials =
    user && user.username
      ? user.username
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
      : "U";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" style={{ width: "40px" }} />

      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} style={{ textDecoration: "none" }}>
                <p className={isActive(item.path) ? "menu selected" : "menu"}>
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <hr />

        {/* Profile (auth already verified) */}
        {isAuthenticated && user && (
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{initials}</div>
            <p className="username">{user.username}</p>

            {isProfileDropdownOpen && (
              <div className="profile-dropdown">
                <ul>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
