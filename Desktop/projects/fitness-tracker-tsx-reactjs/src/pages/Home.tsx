import React from 'react';
import { Activity, Droplet, Flame, TrendingUp, Award, type LucideIcon } from 'lucide-react';
import TrackerCard from '../components/TrackerCard';
import StatsCard from '../components/StatsCard';

interface Metrics {
  steps: string;
  calories: string;
  water: string;
}

interface Goals {
  steps: number;
  calories: number;
  water: number;
}

interface HomeProps {
  metrics: Metrics;
  goals: Goals;
  updateMetric: (metric: keyof Metrics, value: string) => void;
}

const Home: React.FC<HomeProps> = ({ metrics, updateMetric, goals }) => {
  return (
    <section className="home">
      <div className="welcome-section">
        <h2>Your Fitness Dashboard</h2>
        <p className="subtitle">Track your daily progress and achieve your goals</p>
      </div>

      <div className="cards">
        <TrackerCard
          title="Steps"
          value={metrics.steps}
          unit="steps"
          icon={Activity as LucideIcon}
          color="#10b981"
          goal={goals.steps}
          onUpdate={(val) => updateMetric('steps', val)}
        />
        <TrackerCard
          title="Calories"
          value={metrics.calories}
          unit="kcal"
          icon={Flame as LucideIcon}
          color="#f97316"
          goal={goals.calories}
          onUpdate={(val) => updateMetric('calories', val)}
        />
        <TrackerCard
          title="Water Intake"
          value={metrics.water}
          unit="liters"
          icon={Droplet as LucideIcon}
          color="#06b6d4"
          goal={goals.water}
          onUpdate={(val) => updateMetric('water', val)}
        />
      </div>

      <div className="stats-section">
        <h3 className="section-title">Today's Overview</h3>
        <div className="stats-grid">
          <StatsCard
            title="Activity Level"
            value="High"
            change={12}
            icon={TrendingUp as LucideIcon}
            color="#10b981"
          />
          <StatsCard
            title="Streak Days"
            value="7"
            change={14}
            icon={Award as LucideIcon}
            color="#059669"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
