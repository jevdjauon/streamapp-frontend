import React, { Component } from "react";
import axios from "axios";

export default class CreateHero extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeHeroname = this.onChangeHeroname.bind(this);
    this.onChangeClassType = this.onChangeClassType.bind(this);
    this.onChangeRace = this.onChangeRace.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      heroname: "",
      classType: "",
      race: "",
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeHeroname(e) {
    this.setState({
      heroname: e.target.value,
    });
  }

  onChangeClassType(e) {
    this.setState({
      classType: e.target.value,
    });
  }
  onChangeRace(e) {
    this.setState({
      race: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const hero = {
      username: this.state.username,
      heroname: this.state.heroname,
      classType: this.state.classType,
      race: this.state.race,
    };

    console.log(hero);

    // window.location = "/";

    axios
      .post("http://localhost:5000/heroes/add", hero)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <p>Here You Can Create You Hero</p>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>Username: </label>
            <select
              //   ref="userInput"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label>Heroname: </label>
            <input
              type="text"
              required
              value={this.state.heroname}
              onChange={this.onChangeHeroname}
            />
          </div>
          <div>
            <label>ClassType: </label>
            <input
              type="text"
              required
              value={this.state.classType}
              onChange={this.onChangeClassType}
            />
          </div>
          <div>
            <label>Race: </label>
            <input
              type="text"
              required
              value={this.state.race}
              onChange={this.onChangeRace}
            />
          </div>
          <input type="submit" value="Create Here" />
        </form>
      </div>
    );
  }
}
