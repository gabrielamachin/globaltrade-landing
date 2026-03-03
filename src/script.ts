interface TradeData {
    company: string;
    type: 'import' | 'export';
    value: number;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comex-form') as HTMLFormElement;
    const resultBox = document.getElementById('result-display') as HTMLDivElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const data: TradeData = {
            company: (document.getElementById('company') as HTMLInputElement).value,
            type: (document.getElementById('operation-type') as HTMLSelectElement).value as 'import' | 'export',
            value: parseFloat((document.getElementById('fob-value') as HTMLInputElement).value)
        };

        if (data.value > 0) {
            const tax = data.type === 'import' ? data.value * 0.12 : data.value * 0.04;
            
            resultBox.style.display = 'block';
            resultBox.innerHTML = `
                <strong>Summary for ${data.company}:</strong><br>
                Operation: ${data.type.toUpperCase()}<br>
                Estimated Tax: <strong>$${tax.toLocaleString()} USD</strong>
            `;
            form.reset();
        }
    });
});