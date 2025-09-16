import { useState, useEffect } from "react";

import { NavLink } from ".";
import { userService } from "services";
import Image from "next/image";

export { Nav };

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  // only show nav when logged in
  if (!user) return null;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <div className="navbar-nav">
        <img
          src="/Nextu.jpeg"
          alt=""
          style={{ width: "30px", height: "30px", zIndex: 10 }}
        />
        <NavLink href="/" exact className="nav-item nav-link">
          NextU
        </NavLink>
        {user.role === "STUDENT" && (
          <NavLink href="/exam" className="nav-item nav-link">
            Aptitude Exam
          </NavLink>
        )}
        {/* <NavLink href="/exam/results" className="nav-item nav-link">
          Results
        </NavLink> */}
        {/* Render Results link only for STAFF */}
        <NavLink href="/exam/results" className="nav-item nav-link">
          Results
        </NavLink>
        {user.role === "STAFF" && (
          <>
            <NavLink href="/students" className="nav-item nav-link">
              Students
            </NavLink>
          </>
        )}

        <NavLink href="/knowledge-share" className="nav-item nav-link">
          Knowledge Share
        </NavLink>
        {user.role === "PLACEMENT_OFFICER" && (
          <>
            {/* <NavLink href="/addVideo" className="nav-item nav-link">
              Add Video
            </NavLink> */}
            <NavLink href="/placement" className="nav-item nav-link">
              Add Placement
            </NavLink>
          </>
        )}
        <NavLink href="/notifications" className="nav-item nav-link">
          Notifications
        </NavLink>
        <button
          onClick={userService.logout}
          className="btn btn-link nav-item nav-link"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
