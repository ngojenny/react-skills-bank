import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';
import Card from './Card';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        team: coreRedbit,
        searchText: ''
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log(this.cardComponent);
      //if the updated searchText does not match any of the skill of the employees
      //hide that component?
      const searchText = this.state.searchText;
      const filteredTeam = {};

      // if(serchText.length > 0) {
      //   filteredTeam =
      // }

      if(e.target.value === '') {
        console.log('resetting');
        this.setState({
          team: coreRedbit
        })
      }

    }

    render() {
      console.log(this.state.team);
      return (
        <div className="app-container">
          <h1>Skills Bank</h1>
          <Search searchText={this.state.searchText} handleChange={this.handleChange} />
          <div className="team-container">
            {
              Object.keys(this.state.team)
              .map(key => <Card key={key} details={this.state.team[key]} />)
            }
          </div>
        </div>
      )
    }
}



const coreRedbit = {
  employee1: {
    name: 'Jenny Ngo',
    title: 'Front-end Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'User Interface']
  },

  employee2: {
    name: 'Barranger Ridler',
    title: 'CTO',
    skills: ['Xamarin', 'React Native', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', '.NET Core', 'User Interface', 'User Experience', 'Coffee']
  },

  employee3: {
    name: 'Mike Potvin',
    title: 'Software Developer',
    skills: ['Xamarin', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Node.js', '.NET Core', 'Food']
  },

  employee4: {
    name: 'Kevin Carey',
    title: 'Product Designer',
    skills: ['User Experience', 'User Interface', 'Motion Animations', 'Laser Eyes']
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
