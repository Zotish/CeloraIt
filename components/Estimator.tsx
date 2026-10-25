'use client';

import { useState } from 'react';
import { ESTIMATOR_DATA } from '@/data/estimator';

interface EstimatorProps {
  onApplyEstimate?: (data: {
    type: string;
    typeName: string;
    podName: string;
    timeLabel: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

export default function Estimator({ onApplyEstimate }: EstimatorProps) {
  const [selectedType, setSelectedType] = useState<string>('saas');
  const [selectedPod, setSelectedPod] = useState<string>('full');
  const [selectedTime, setSelectedTime] = useState<string>('prod');

  const typeData = ESTIMATOR_DATA.types[selectedType];
  const podData = ESTIMATOR_DATA.pods[selectedPod];
  const timeData = ESTIMATOR_DATA.timeline[selectedTime];

  const minPrice = Math.round((typeData.baseRateMin * podData.multiplier * timeData.mult) / 100) * 100;
  const maxPrice = Math.round((typeData.baseRateMax * podData.multiplier * timeData.mult) / 100) * 100;

  const handleApply = () => {
    if (onApplyEstimate) {
      onApplyEstimate({
        type: selectedType,
        typeName: typeData.name,
        podName: podData.name,
        timeLabel: timeData.label,
        minPrice,
        maxPrice
      });
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Interactive Calculator</div>
          <h2 className="section-title">Estimate Your Project Scope & Pod</h2>
          <p className="section-subtitle">
            Select your product requirements below to preview estimated timelines, engineering deliverables, and transparent pricing.
          </p>
        </div>

        <div className="estimator-card">
          <div className="estimator-grid">
            <div className="estimator-options">
              {/* Option 1: Domain */}
              <div>
                <div className="estimator-group-title">1. Select Project Domain</div>
                <div className="estimator-btn-group">
                  <button
                    className={`estimator-select-btn ${selectedType === 'saas' ? 'active' : ''}`}
                    onClick={() => setSelectedType('saas')}
                  >
                    SaaS / Web App
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedType === 'erp' ? 'active' : ''}`}
                    onClick={() => setSelectedType('erp')}
                  >
                    ERP & Inventory
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedType === 'mobile' ? 'active' : ''}`}
                    onClick={() => setSelectedType('mobile')}
                  >
                    Mobile App
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedType === 'ai' ? 'active' : ''}`}
                    onClick={() => setSelectedType('ai')}
                  >
                    AI / RAG / Automation
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedType === 'blockchain' ? 'active' : ''}`}
                    onClick={() => setSelectedType('blockchain')}
                  >
                    Custom Layer-1 / Web3
                  </button>
                </div>
              </div>

              {/* Option 2: Pod Composition */}
              <div>
                <div className="estimator-group-title">2. Select Pod Composition</div>
                <div className="estimator-btn-group">
                  <button
                    className={`estimator-select-btn ${selectedPod === 'sprint' ? 'active' : ''}`}
                    onClick={() => setSelectedPod('sprint')}
                  >
                    Sprint Pod (3 Engineers + PM)
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedPod === 'full' ? 'active' : ''}`}
                    onClick={() => setSelectedPod('full')}
                  >
                    Full Pod (6 Specialists)
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedPod === 'enterprise' ? 'active' : ''}`}
                    onClick={() => setSelectedPod('enterprise')}
                  >
                    Enterprise Scaled Pod (10+)
                  </button>
                </div>
              </div>

              {/* Option 3: Target Timeline */}
              <div>
                <div className="estimator-group-title">3. Target Timeline</div>
                <div className="estimator-btn-group">
                  <button
                    className={`estimator-select-btn ${selectedTime === 'mvp' ? 'active' : ''}`}
                    onClick={() => setSelectedTime('mvp')}
                  >
                    4 - 8 Weeks (MVP)
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedTime === 'prod' ? 'active' : ''}`}
                    onClick={() => setSelectedTime('prod')}
                  >
                    3 - 6 Months (Production)
                  </button>
                  <button
                    className={`estimator-select-btn ${selectedTime === 'continuous' ? 'active' : ''}`}
                    onClick={() => setSelectedTime('continuous')}
                  >
                    Dedicated Ongoing Pod
                  </button>
                </div>
              </div>
            </div>

            {/* Estimator Summary Output */}
            <div className="estimator-summary-box">
              <div className="estimator-price-label">Estimated Investment Range</div>
              <div className="estimator-price-value">
                ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
              </div>
              <div className="estimator-timeline-value">
                Estimated Scope: <strong>{timeData.label}</strong> with <strong>{podData.name}</strong>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '18px', marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: 'var(--accent-emerald)',
                    fontWeight: 700,
                    marginBottom: '12px',
                    textAlign: 'left'
                  }}
                >
                  Included Deliverables:
                </div>
                <ul className="estimator-perks-list">
                  {typeData.perks.map((perk, idx) => (
                    <li key={idx}>{perk}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleApply}
              >
                Apply Estimate to Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
