import { Component } from 'react';
import './App.css';

import Weavy from './weavy/Weavy';
import WeavyApp from './weavy/WeavyApp';

export default class App extends Component {
  async getJwt() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIyLTA4LTMxVDA2OjM5OjQxLjQ3NloiLCJpc3MiOiJha3NoYXkiLCJzdWIiOiJBcmp1biIsImNsaWVudF9pZCI6IjEzOTdiZGRhLWFjYTQtNGRjNy1iN2QxLWEyZDU0Y2M2YTliZCJ9.II_ZHd2-RuSLYiwNZQW5QgHh5ieo-Yj4-4CcAYIJF7o';
  }

  render() {
    return (
      <Weavy jwt={this.getJwt}>
        <div className="App">
          <WeavyApp
            spaceKey="react-space"
            spaceName="React Space"
            appKey="react-files"
            appName="React Files"
            appType="files"
            />
        </div>
      </Weavy>
    );
  }
}
