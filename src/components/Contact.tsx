import { Estimator } from './Estimator';

export const Contact = () => {
  return (
    <section id="estimator" className="container bg-light">
      <div className="section-title">
        <h2>Trade Cost Estimator</h2>
        <div className="underline"></div>
      </div>
      <Estimator />
    </section>
  );
};