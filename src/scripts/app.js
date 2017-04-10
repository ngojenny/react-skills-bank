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
      this.assembleResults = this.assembleResults.bind(this);
    }

    assembleResults(filteredTeam) {
      console.log('in hideComponent', filteredTeam);
      // const teamMembers = document.querySelectorAll('.individual-card');
      // console.log('teamMembers', teamMembers);
      // const team = this.state.team;
      // console.log('new Team', team);
      const newTeam = [];

      this.state.team.forEach((member) => {
        filteredTeam.filter((filteredMember) => {
          if(filteredMember.match(member.name)) {
            newTeam.push(member);
          }
        })
      });

      this.setState({
        team: newTeam
      });

    }

    handleChange(e) {
      console.log('handing it');
      this.setState({
        team: coreRedbit,
        [e.target.name]: e.target.value
      });
      // console.log(this.cardComponent);
      //if the updated searchText does not match any of the skill of the employees
      //hide that component?
      console.log('what is state', this.state.team);
      const searchText = this.state.searchText.trim().toLowerCase();
      let filteredTeam = [];
      if(searchText.length >= 0) {
        this.state.team.forEach( (member) => {
          console.log('hello', member.skills);
          // filteredTeam.push(member.skills.filter(skill => {return member}));
          member.skills.filter(skill => {
            if(skill.toLowerCase().match(searchText)) {
               filteredTeam.push(member.name);
            }
          });
          // console.log('matched', matched);
        });
      }

      console.log('filteredTeam', filteredTeam);
      if(filteredTeam.length){
        filteredTeam = filteredTeam.filter((item, pos) => {
          return filteredTeam.indexOf(item) === pos;
        })

        this.assembleResults(filteredTeam);
      }

    }

    render() {
      // console.log(this.state.team);
      return (
        <div className="app-container">
          <h1>Skills Bank</h1>
          <Search searchText={this.state.searchText} handleChange={this.handleChange} />
          <div className="team-container">
            {
              this.state.team
              .map((member, i) => <Card key={`employee${i}`} details={member} />)
            }
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
