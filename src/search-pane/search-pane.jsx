import { Component } from "react";
import "../search-pane/search-pane.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = { term: ""}
  }
  updateTermValue = e => {
    const term = e.target.value.toLowerCase();
    this.setState({term})
    this.props.updateTerm(term)
  }
  render () {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Kinolarni qidirish"
        onChange={this.updateTermValue}
        value={this.state.term}
      />
    );
  }
  }


export default SearchPanel