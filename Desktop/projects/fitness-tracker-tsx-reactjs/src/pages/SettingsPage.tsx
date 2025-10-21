import React from 'react';
import { Target, Settings } from 'lucide-react';

interface Goals {
  steps: number;
  calories: number;
  water: number;
}

interface SettingsPageProps {
  goals: Goals;
  updateGoal: (key: keyof Goals, value: number) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({
  goals,
  updateGoal,
  theme,
  setTheme,
}) => {
  return (
    <section className="settings-page">
      <h2>Settings</h2>
      <p className="subtitle">Customize your experience</p>

      <div className="settings-content">
        {/* --- Daily Goals --- */}
        <div className="settings-card">
          <h3>
            <Target size={20} /> Daily Goals
          </h3>
          <div className="goal-setting">
            <label htmlFor="steps-goal">
              Steps Goal
              <input
                id="steps-goal"
                name="steps"
                type="number"
                autoComplete="off"
                value={goals.steps}
                onChange={(e) => updateGoal('steps', parseInt(e.target.value) || 0)}
              />
            </label>

            <label htmlFor="calories-goal">
              Calories Goal
              <input
                id="calories-goal"
                name="calories"
                type="number"
                autoComplete="off"
                value={goals.calories}
                onChange={(e) => updateGoal('calories', parseInt(e.target.value) || 0)}
              />
            </label>

            <label htmlFor="water-goal">
              Water Goal (liters)
              <input
                id="water-goal"
                name="water"
                type="number"
                step="0.1"
                autoComplete="off"
                value={goals.water}
                onChange={(e) => updateGoal('water', parseFloat(e.target.value) || 0)}
              />
            </label>
          </div>
        </div>

        {/* --- Preferences --- */}
        <div className="settings-card">
          <h3>
            <Settings size={20} /> Preferences
          </h3>
          <div className="preference-item">
            <span>Theme</span>
            <select
              name="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="preference-item">
            <span>Notifications</span>
            <button className="toggle-btn">Enabled</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
