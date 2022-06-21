import Icons from "../Icons/Icons";
import "./Toggle.scss";

export default function Toggle({ side, label, handler }) {
  return (
    <div className={`cmp-toggle ${side}`}>
      <button onClick={handler}>
        {label == "en" || label == "es" ? <img src={`./img/mode-${label}.png`} alt={label} /> :
          <img src={`./img/mode-${label}.svg`} alt={label} />}
      </button>
    </div>
  );
}
