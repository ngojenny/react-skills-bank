import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        team: coreRedbit,
        searchText: '',
        searchResults: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.assembleResults = this.assembleResults.bind(this);
    }

    assembleResults(filteredTeam) {
      const newTeam = [];

      this.state.team.forEach((member) => {
        filteredTeam.filter((filteredMember) => {
          if(filteredMember.match(member.name)) {
            newTeam.push(member);
          }
        })
      });

      this.setState({
        searchResults: newTeam
      });

    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });

      const searchText = this.state.searchText.trim().toLowerCase();
      let filteredTeam = [];
      if(searchText.length >= 0) {
        this.state.team.forEach( (member) => {
          member.skills.filter(skill => {
            if(skill.toLowerCase().match(searchText)) {
               filteredTeam.push(member.name);
            }
          });
        });
      }

      if(filteredTeam.length){
        filteredTeam = filteredTeam.filter((item, pos) => {
          return filteredTeam.indexOf(item) === pos;
        })

        this.assembleResults(filteredTeam);
      }

    }

    render() {
      return (
        <div className="app-container">
          <h1>Skills Bank</h1>
          <Search searchText={this.state.searchText} handleChange={this.handleChange} team={this.state.team} searchResults={this.state.searchResults.length ? this.state.searchResults : this.state.team}/>
          <div className="team-container">
          </div>
        </div>
      )
    }
}



const coreRedbit = [
  {
    name: 'Jenny Ngo',
    title: 'Front-end Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'User Interface']
  },
  {
    name: 'Barranger Ridler',
    title: 'CTO',
    skills: ['Xamarin', 'React Native', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', '.NET Core', 'User Interface', 'User Experience', 'Coffee']
  },
  {
    name: 'Mike Potvin',
    title: 'Software Developer',
    skills: ['Xamarin', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Node.js', '.NET Core', 'Food']
  },
  {
    name: 'Kevin Carey',
    title: 'Product Designer',
    skills: ['User Experience', 'User Interface', 'Motion Animations', 'Laser Eyes']
  }
]


ReactDOM.render(<App />, document.getElementById('app'));
