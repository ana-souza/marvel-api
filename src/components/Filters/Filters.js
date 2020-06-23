import React from "react";

import "./Filters.css";
import {FiSearch} from 'react-icons/fi';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    };
  }

  
  handleKeyDown(event) {
    
    const { onSearch } = this.props;
    const { value } = event.target || "";

    this.setState({ searchValue: value });

    onSearch(value);
  }

  
  
  render() {
    const { searchValue } = this.state;

    return (
      <>
      <div className="search-field">
        <section className="filters">
          <div className="filters__search" >
            <input
              type="text"
              
              className="filters__search__input"
              placeholder="Search"
              onChange={(event) => this.handleKeyDown(event)}
            />    
            <FiSearch size={40} color="#9fa9bc" />
          </div>
        </section>
      </div>
      </>
    );
  }
}

export default Filters;
