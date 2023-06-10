import PropTypes from 'prop-types';
import css from './statistics.module.css';
export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css['stat-item']} key={id}>
            <span className={css['stat-label']}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
