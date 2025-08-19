import "../styles/theme.css";
import { TimerIcon } from 'lucide-react';

export function Logo() {
  return (
    <div className="is-flex is-justify-content-center is-align-content-center is-align-items-center is-gap-2">
      <TimerIcon />
      <a href="#">
        <span>Chronos</span>
      </a>
    </div >
  );
}
