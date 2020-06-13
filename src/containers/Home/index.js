import React, { Component } from "react";
import "./style.css";


class Home extends Component {



  render() {
    return (
      <div className="home">
        <div className="container">
          <form className="form">
            <input type="text" placeholder="Find for items"></input>
            <button className="search-button" type="submit">
              Search
            </button>
          </form>

          <div className="item-container">
            {this.props.items.map((item) => (
              <div className="image-box">
                <div className="box-in-box">
                  <img
                    alt="item"
                    src={require(`./../../images/${item["image"]}`)}
                  ></img>
                </div>
                <p className = "item-name">{item.itemName}</p>
                <button
                  className="add-button"  disabled = {item.isAdded === "Added"?'disabled':''}
                  onClick={() => this.props.handleClick(item)}
                >
                  {item.isAdded}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
