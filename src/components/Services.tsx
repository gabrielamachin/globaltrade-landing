export const Services = () => {
  return (
    <section id="services" className="bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-grid">
          <div className="card">
            <h3>Customs Management</h3>
            <p>Expert handling of import/export documentation and tariff classifications.</p>
          </div>
          <div className="card">
            <h3>Global Logistics</h3>
            <p>End-to-end supply chain optimization and freight forwarding services.</p>
          </div>
          <div className="card">
            <h3>Trade Compliance</h3>
            <p>Legal advisory on international regulations and trade agreements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
