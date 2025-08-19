import "../styles/theme.css";
import { TimerIcon } from 'lucide-react';

export function Logo() {
  return (
    <div className="is-flex is-justify-content-center is-align-content-center is-align-items-center is-gap-1 is-flex-direction-column logo">
      <TimerIcon />
      <a href="#" className="has-text-weight-bold">
        <span className="is-size-1 logo">Chronos</span>
      </a>
    </div>
  );
}
