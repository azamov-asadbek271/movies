import "./movies-add-form.css";
import { Component } from "react";

class MoviesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            views: "",
        }
    }
    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addFormHande = e => {
      e.preventDefault()
     this.props.addForm({name: this.state.name, viewers: this.state.views})
     this.setState({
      name: "",
      views: "",
     })
    }
    render() {
      
          return (
            <div className="movies-add-form ">
              <h3>Yangi kino qo'shish</h3>
              <form className="add-form d-flex" onSubmit={this.addFormHande}>
                <input
                  type="text"
                  className="form-control new-post-label"
                  placeholder="Qanday kino?"
                  onChange={this.onChangeInput}
                  name="name"
                />
                <input
                  type="number"
                  className="form-control new-post-label"
                  placeholder="Necha marotaba ko'rilgan?"
                  onChange={this.onChangeInput}
                  name="views"
                />
                <button type="submit" className="btn btn-outline-dark">
                  {" "}
                  Qo'shish
                </button>
              </form>
            </div>
          );
    }
 
}

export default MoviesAddForm