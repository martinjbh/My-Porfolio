import "./TopNav.scss";
import Toggle from "../Toggle/Toggle";

const TopNav = ({ handlerMode, handlerLang, mode, lang}) => {

  return (
    <div className="cmp-top-nav">
      <Toggle side="right" label={lang} handler={handlerLang} />
      <Toggle side="left" label={mode} handler={handlerMode}  />
    </div>
  );
}
export default TopNav;