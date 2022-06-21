import './Wrapper.scss';

const Wrapper = ({ children, mode }) => {
  return (
    <div className={`cmp-wrapper cmp-wrapper__mode-${mode}`}>
      {children}
    </div>
  );
};

export default Wrapper;
