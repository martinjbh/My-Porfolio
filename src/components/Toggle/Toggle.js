
import "./Toggle.scss";

export default function Toggle({ side, label, handler }) {
  return (
    <div className={`cmp-toggle ${side}`}>
      <button onClick={handler}>
        {label === "en" || label === "es" ? <img style={{ borderStyle: "solid", borderRadius: "20%",borderWidth:"1px" }} src={`./img/mode-${label}.png`} alt={label} /> :
          <img src={`./img/mode-${label}.svg`} alt={label} />}
      </button>
    </div>
  );
}
