import { SettingsIcon, HouseIcon, HistoryIcon, SunIcon } from "lucide-react";
import "../styles/theme.css";

export function Menu() {
  return (
    <nav className="is-flex is-gap-1 is-justify-content-center is-align-items-center">
      <a href="#" className="menu-link">
        <HouseIcon />
      </a>
      <a href="#" className="menu-link">
        <HistoryIcon />
      </a>
      <a href="#" className="menu-link">
        <SettingsIcon />
      </a>
      <a href="#" className="menu-link">
        <SunIcon />
      </a>
    </nav>
  );

}
