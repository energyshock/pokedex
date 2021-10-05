import spinner from './spinner.gif';

export const Spinner = () => (
  <div className="container mt-3">
    <img src={spinner} alt="Loading..." className="mx-auto d-block" />
  </div>
);

export default Spinner;
