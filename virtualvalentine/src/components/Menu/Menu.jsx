import React, { useState } from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
      </button>

      {isOpen && (
        <nav className="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/question">Question</a></li>
            <li><a href="/letter">Letter</a></li>
            <li><a href="/spotify">Sal's Songs</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}; export default Menu;
