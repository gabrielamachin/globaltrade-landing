import { useState } from 'react';

interface TradeData {
  company: string;
  type: 'import' | 'export';
  value: number;
}

export const Contact = () => {
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState<TradeData>({
    company: '',
    type: 'import',
    value: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [id]:
        id === 'company'
          ? value
          : id === 'operation-type'
            ? (value as 'import' | 'export')
            : parseFloat(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.value > 0) {
      const tax =
        formData.type === 'import'
          ? formData.value * 0.12
          : formData.value * 0.04;

      setResult(
        `Summary for ${formData.company}:\nOperation: ${formData.type.toUpperCase()}\nEstimated Tax: $${tax.toLocaleString()} USD`
      );

      setFormData({ company: '', type: 'import', value: 0 });
    }
  };

  return (
    <section id="contact" className="container">
      <div className="contact-wrapper">
        <h2>Contact & Cost Estimator</h2>
        <form id="comex-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
          <select
            id="operation-type"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="import">Import (12% tax est.)</option>
            <option value="export">Export (4% tax est.)</option>
          </select>
          <input
            type="number"
            id="fob-value"
            placeholder="Estimated FOB Value (USD)"
            value={formData.value}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn-submit">
            Calculate & Send Inquiry
          </button>
        </form>
        {result && (
          <div id="result-display">
            <strong>{result.split('\n')[0]}</strong>
            <br />
            {result.split('\n')[1]}
            <br />
            {result.split('\n')[2]}
          </div>
        )}
      </div>
    </section>
  );
};
