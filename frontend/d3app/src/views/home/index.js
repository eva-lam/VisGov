import React from 'react';
import { Link } from 'react-router-dom';
import {Search} from './components/Search'; 

export default () => (
  <div className="App-intro">
  <h2>Parliament analyzes made simple</h2>
        <div>
            <div className="col-xs-5 col-xs-offset-1">
              <Search/>
            </div>
        </div>

    <h3>Standard Charts:</h3>
    <ul>
      <li>
        <Link to="/bar-chart">Bar Chart</Link>
      </li>
      <li>
        <Link to="/donut-chart">Donut Chart</Link>
      </li>
      <li>
        <Link to="/multi-series-line-chart">Multi-Series Line Chart</Link>
      </li>
    </ul>

    <h3>Animated Charts:</h3>
    <ul>
      <li>
        <Link to="/bar-chart/animated">Bar Chart</Link>
      </li>
      <li>
        <Link to="/multi-series-line-chart/animated">
          Multi-Series Line Chart
        </Link>
      </li>
    </ul>
  </div>
);
