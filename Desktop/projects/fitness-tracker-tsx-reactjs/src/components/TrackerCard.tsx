import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface TrackerCardProps {
  title: string;
  value: string;
  unit: string;
  icon: LucideIcon;
  color: string;
  goal?: number;
  onUpdate: (newValue: string) => void;
}

const TrackerCard: React.FC<TrackerCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  color,
  onUpdate,
  goal,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const progress = goal ? (parseFloat(value.replace(',', '')) / goal) * 100 : 0;

  const handleSave = () => {
    if (onUpdate) onUpdate(inputValue);
    setIsEditing(false);
  };

  return (
    <div className="tracker-card" style={{ borderTop: `4px solid ${color}` }}>
      <div className="card-header">
        <Icon size={28} color={color} />
        <h3>{title}</h3>
      </div>

      {isEditing ? (
        <div className="edit-mode">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="value-input"
          />
          <div className="edit-buttons">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <p className="value" style={{ color }}>{value}</p>
          <span className="unit">{unit}</span>
          {goal && (
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.min(progress, 100)}%`, backgroundColor: color }}
                />
              </div>
              <span className="goal-text">Goal: {goal} {unit}</span>
            </div>
          )}
          <button onClick={() => setIsEditing(true)} className="update-btn">Update</button>
        </>
      )}
    </div>
  );
};

export default TrackerCard;
