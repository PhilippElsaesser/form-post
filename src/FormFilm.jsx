import React, { Component } from 'react';






class FormFilm extends Component {

constructor(props) {
  super(props);
    this.state = {
      name: '',
      poster: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
   }



  


  submitForm(e) {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
     };
     
    const url = "http://92.175.11.66:3001/api/quests/movies/"; 

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Added the film ${this.state.name} to our list!`);
        }
        }).catch(e => {
          console.error(e);
          alert('Sorry, we could not add your film');
        });
    }





   render() {
     return (
      <div className="FormFilm">
      <h1>Favorite Film</h1>
     
      <form onSubmit={this.submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className="form-data">
            <label htmlFor="name">Filmname</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
     
          <div className="form-data">
            <label htmlFor="poster">Film-Picture</label>
            <input
              type="text"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>
     
          <div className="form-data">
            <label htmlFor="comment">Leave a comment</label>
            <input
              type="textarea"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Send" />
          </div>
        </fieldset>
      </form>
     </div>
     )
   }

}

export default FormFilm;