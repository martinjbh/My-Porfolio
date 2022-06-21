import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import TopNav from "./components/TopNav/TopNav";
import Wrapper from "./components/Wrapper/Wrapper";
import "./scss/global.scss";
export default function Home() {
  const [mode, setMode] = useState('light');
  const [lang, setLang] = useState('en');

  const handlerMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  const handlerLang = () => {
    setLang(lang === 'es' ? 'en' : 'es')
  }
  
  return (
    <div className="App">
      <Wrapper mode={mode}>
        <TopNav handlerMode={handlerMode} handlerLang={handlerLang} mode={mode} lang={lang} />
        <Hero />
        <Main lang={lang}/>
        <ContactForm mode={mode} />
      </Wrapper>
    </div>
  );
}
