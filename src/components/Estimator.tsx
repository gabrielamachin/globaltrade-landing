import { useState } from 'react';

interface TradeData {
  company: string;
  type: 'import' | 'export';
  value: number;
}

interface EstimationResult {
  company: string;
  type: string;
  tax: number;
  total: number;
}

export const Estimator = () => {
  const [formData, setFormData] = useState<TradeData>({
    company: '',
    type: 'import',
    value: 0,
  });

  const [result, setResult] = useState<EstimationResult | null>(null);

  const calculateTax = (value: number, type: 'import' | 'export'): number => {
    const taxRate = type === 'import' ? 0.12 : 0.04;
    return value * taxRate;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [id === 'operation-type' ? 'type' : id === 'company' ? 'company' : 'value']:
        id === 'fob-value' 
          ? (value === '' ? 0 : parseFloat(value)) 
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formData.value > 0 && formData.company.trim() !== '') {
      const tax = calculateTax(formData.value, formData.type);

      setResult({
        company: formData.company,
        type: formData.type.toUpperCase(),
        tax: tax,
        total: formData.value + tax
      });

      setFormData({ company: '', type: 'import', value: 0 });
    }
  };

  const isFormValid: boolean = formData.company.trim().length > 2 && formData.value > 0;

  return (
    <div className="contact-wrapper">
      <p className="text-center mb-6 text-gray-600">
        Get an instant estimation for your international operations.
      </p>
      
      <form id="comex-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company" className="text-xs font-bold uppercase text-gray-500 mb-1 block">
            Company Name
          </label>
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
          <label htmlFor="operation-type" className="text-xs font-bold uppercase text-gray-500 mb-1 block">
            Operation Type
          </label>
          <select id="operation-type" value={formData.type} onChange={handleInputChange}>
            <option value="import">Import (12% tax est.)</option>
            <option value="export">Export (4% tax est.)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fob-value" className="text-xs font-bold uppercase text-gray-500 mb-1 block">
            FOB Value (USD)
          </label>
          <input
            type="number"
            id="fob-value"
            placeholder="0.00"
            min="0"
            step="0.01"
            value={formData.value === 0 ? '' : formData.value}
            onChange={handleInputChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className={`btn-submit w-full mt-4 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isFormValid}
        >
          Calculate & Request Information
        </button>
      </form>

      {result && (
        <div id="result-display" className="animate-fade-in mt-6 p-4 border-l-4 border-[#FF8C00] bg-white shadow-sm">
          <h4 className="font-bold border-b border-gray-100 pb-2 mb-2 text-[#003366]">Estimation Summary</h4>
          <p><strong>Client:</strong> {result.company}</p>
          <p><strong>Service:</strong> {result.type}</p>
          <p className="text-sm text-gray-500 mt-1">Total (FOB + Tax): ${result.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
          <p className="text-lg mt-2 font-bold text-[#FF8C00]">
            Estimated Tax: ${result.tax.toLocaleString(undefined, { minimumFractionDigits: 2 })} USD
          </p>
        </div>
      )}
    </div>
  );
};