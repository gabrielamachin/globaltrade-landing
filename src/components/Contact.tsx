import { useState } from 'react';

interface TradeData {
  company: string;
  type: 'import' | 'export';
  value: number;
}

export const Contact = () => {
  const [result, setResult] = useState<{ company: string; type: string; tax: number } | null>(null);
  const [formData, setFormData] = useState<TradeData>({
    company: '',
    type: 'import',
    value: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target; // Usamos e.target para mayor compatibilidad
    setFormData((prev) => ({
      ...prev,
      [id === 'operation-type' ? 'type' : id === 'fob-value' ? 'value' : id]:
        id === 'fob-value' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.value > 0) {
      const taxRate = formData.type === 'import' ? 0.12 : 0.04;
      const calculatedTax = formData.value * taxRate;

      setResult({
        company: formData.company,
        type: formData.type.toUpperCase(),
        tax: calculatedTax
      });

      // Clean form after calculation
      setFormData({ company: '', type: 'import', value: 0 });
    }
  };

  return (
    <section id="contact" className="container bg-light">
      <div className="section-title">
        <h2>Trade Cost Estimator</h2>
        <div className="underline"></div>
      </div>
      
      <div className="contact-wrapper">
        <p className="text-center mb-6 text-gray-600">Get an instant estimation for your international operations.</p>
        
        <form id="comex-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="company" className="text-xs font-bold uppercase text-gray-500 mb-1 block">Company Name</label>
            <input
              type="text"
              id="company"
              placeholder="e.g. Global Logistics Corp"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="operation-type" className="text-xs font-bold uppercase text-gray-500 mb-1 block">Operation Type</label>
            <select
              id="operation-type"
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="import">Import (12% tax est.)</option>
              <option value="export">Export (4% tax est.)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="fob-value" className="text-xs font-bold uppercase text-gray-500 mb-1 block">FOB Value (USD)</label>
            <input
              type="number"
              id="fob-value"
              placeholder="0.00"
              value={formData.value || ''}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit w-full mt-4">
            Calculate & Request Information
          </button>
        </form>

        {result && (
          <div id="result-display" className="animate-fade-in">
            <h4 className="font-bold border-b border-green-200 pb-2 mb-2">Estimation Summary</h4>
            <p><strong>Client:</strong> {result.company}</p>
            <p><strong>Service:</strong> {result.type}</p>
            <p className="text-lg mt-2 font-bold text-green-700">
              Estimated Tax: ${result.tax.toLocaleString(undefined, { minimumFractionDigits: 2 })} USD
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
