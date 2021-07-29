import React, { Component } from 'react';

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPath: '',
      flag: false,
    };
  }

  componentDidMount() {
    this.fetchDogCeo();
  }

  async fetchDogCeo() {
    const requiredApi = await fetch('https://dog.ceo/api/breeds/image/random');
    const executeApi = await requiredApi.json();
    // console.log(executeApi.message);
    this.setState({
      imgPath: executeApi.message,
      flag: true,
    });
  }

  render() {
    const { imgPath, flag } = this.state;
    return (
      <div>
        <h1>
          My dog random is:
          <main>
            { (flag) ? <img src={ imgPath } alt="foto" /> : <h3>Loading...</h3> }
          </main>
        </h1>
      </div>
    );
  }
}
