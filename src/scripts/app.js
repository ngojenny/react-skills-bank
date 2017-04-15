import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      team: coreRedbit,
      searchText: '',
      searchResults: [],
      tags: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.assembleResults = this.assembleResults.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    const searchText = this.state.searchText.trim().toLowerCase();
    let filteredTeam = [];
    if (searchText.length >= 0) {
      this.state.team.forEach((member) => {
        member.skills.filter(skill => {
          if (skill.toLowerCase().match(searchText)) {
            filteredTeam.push(member.name);
          }
        });
      });
    }

    if (filteredTeam.length) {
      filteredTeam = filteredTeam.filter((item, pos) => {
        return filteredTeam.indexOf(item) === pos;
      })

      this.assembleResults(filteredTeam);
    }

  }

  assembleResults(filteredTeam) {
    const newTeam = [];

    this.state.team.forEach((member) => {
      filteredTeam.filter((filteredMember) => {
        if (filteredMember.match(member.name)) {
          newTeam.push(member);
        }
      })
    });

    this.setState({
      searchResults: newTeam
    });

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="app-container">
        <h1>
          <span className="small">Redbit's</span><br />
          Skills Bank
        </h1>
        <Search searchText={this.state.searchText} handleChange={this.handleChange} handleSubmit={this.handleSubmit} team={this.state.team} tagName={this.state.tagName} searchResults={this.state.searchResults.length ? this.state.searchResults : this.state.team} />
        <div className="team-container">
        </div>
      </div>
    )
  }
}



const coreRedbit = [
  {
    name: 'Jenny Ngo',
    title: 'Front end Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'User Interface'],
    imgUrl: './images/jenny.png'
  },
  {
    name: 'Barranger Ridler',
    title: 'CTO',
    skills: ['Xamarin', 'React Native', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', '.NET Core', 'User Interface', 'User Experience', 'Coffee'],
    imgUrl: './images/barranger.png'
  },
  {
    name: 'Mike Potvin',
    title: 'Software Developer',
    skills: ['Xamarin', 'React Native', 'HTML', 'CSS', 'JavaScript', 'Node.js', '.NET Core', 'Food'],
    imgUrl: './images/mike.png'
  },
  {
    name: 'Kevin Carey',
    title: 'Product Designer',
    skills: ['User Experience', 'User Interface', 'Motion Animations', 'Laser Eyes'],
    imgUrl: './images/kevin.png'
  },

  {
    name: 'Mark Arteaga',
    title: 'CEO',
    skills: ['Xamarin', 'React Native', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', '.NET Core', 'User Interface', 'User Experience'],
    imgUrl: './images/mark.png'
  },

  {
    name: 'Kyle Leite',
    title: 'Front end Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'User Interface' ],
    imgUrl: './images/kyle.png'
  },

  {
    name: 'Rinkesh Trivedi',
    title: 'Software Developer',
    skills: ['JavaScript', '.NET Core', 'C#', 'HTML', 'CSS', 'Node.js' ],
    imgUrl: './images/rinkesh.png'
  },

  {
    name: 'Megan Mitchell',
    title: 'Front end Developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'User Interface' ],
    imgUrl: './images/megan.png'
  },

  {
    name: 'Marcelo Amador',
    title: 'Software Developer',
    skills: [ 'Xamerin', 'JavaScript', '.NET Core', 'C#', 'HTML', 'CSS', 'Node.js' ],
    imgUrl: './images/marcelo.png'
  },

  {
    name: 'Hazel van der Werken',
    title: 'Project Manager',
    skills: [ 'Client Relations', 'Organization', 'Project Management', 'Facilitation', 'Planning', 'Toggl Queen' ],
    imgUrl: './images/hazel.png'
  },

]


ReactDOM.render(<App />, document.getElementById('app'));
