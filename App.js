import React from 'react';
// import ReactDOM from 'react';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Allemps: [],
      Username: '',
      UserId: '',
      mobNo: '',
      Location :'',
      Position:''
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  create(e) {
    // add entity - POST
    e.preventDefault();

    // creates entity
    fetch("http://localhost:8080/add", {
      "method": "POST",
      // "headers":{
      //   'Access-Control-Allow-Origin': '*'
      // },
      "body": JSON.stringify({
        UserId: this.state.UserId,
        Username:this.state.Username,
        Location: this.state.Location,
        mobNo: this.state.mobNo,
        Position:this.state.Position
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  update(e) {
    // update entity - PUT
    e.preventDefault();

    // this will update entries with PUT
    fetch("http://localhost:8080/update", {
        "method": "POST",
        // "headers":{
        //       'Access-Control-Allow-Origin': '*'
        //     },
        "body": JSON.stringify({
          UserId: this.state.UserId,
          Username:this.state.Username,
          Location: this.state.Location,
          mobNo: this.state.mobNo,
          Position:this.state.Position
        })
    })
        .then(response => response.json())
        .then(response => { console.log(response);
        })
        .catch(err => { console.log(err); });
  }

  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
    // deletes entities
    fetch("http://localhost:8080/delete", {
      "method": "POST",
      // "headers":{
      //   'Access-Control-Allow-Origin': '*'
      // },
      "body": JSON.stringify({
        UserId: this.state.UserId,
        Username:this.state.Username,
        Location: this.state.Location,
        mobNo: this.state.mobNo,
        Position:this.state.Position
      })
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

//********************************************************************************/
  // delete(e) {
  //   e.preventDefault();
  //   const {Allemps} = this.state;

  //   const apiUrl = 'http://localhost:8080/delete';
  //   const formData = new FormData();
  //   formData.append('e', e);

  //   const options = {
  //     method: 'POST',
  //     body: formData
  //   }

  //   fetch(apiUrl, options)
  //     .then(response => response.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           response: result,
  //           products: Allemps.filter(Allemps =>Allemps.Username !== e)
  //         });
  //       },
  //       (error) => {
  //         this.setState({ error });
  //       }
  //     )
  // }


  handleChange(changeObject) {
    this.setState(changeObject)
  }

  //*****************************************************************/
  // handleChange(e) {
  //     this.setState(e)
  //     const{name, value} = e.target
  //     this.setState({ [name]: value })
  //   }

  // handleChange(changeObject) {
  //       this.setState(changeObject)
  //       const{name, value} = changeObject.target
  //       this.setState({ [name]: value })
  //     }



  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete </legend>
                <label htmlFor="Username">
                Username:
                  <input
                    name="Username"
                    id="Username"
                    type="text"
                    className="form-control"
                    value={this.state.Username}
                    onChange={(e) => this.handleChange({ Username: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="UserId">
                  UserId:
                  <input
                    name="UserId"
                    id="UserId"
                    type="number"
                    className="form-control"
                    value={this.state.UserId}
                    onChange={(e) => this.handleChange({UserId: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="mobNo">
                mobNo:
                  <input
                    name="mobNo"
                    id="mobNo"
                    type="number"
                    className="form-control"
                    value={this.state.mobNo}
                    onChange={(e) => this.handleChange({ mobNo: e.target.value })}
                    />
                </label>
                <label htmlFor="Location">
                Location:
                <input
                  name="Location"
                  id="Location"
                  type="test"
                  className="form-control"
                  value={this.state.Location}
                  onChange={(e) => this.handleChange({ Location: e.target.value })}
                  required
                  />
              </label>
              <label htmlFor="Position">
                Position:
                <input
                  name="Position"
                  id="Position"
                  type="test"
                  className="form-control"
                  value={this.state.Position}
                  onChange={(e) => this.handleChange({ Position: e.target.value })}
                  required
                  />
              </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                    Update
                </button>
                <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                    Delete
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
