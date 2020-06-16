import React, { Component } from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

class Home extends Component {



  render() {
    return (
      <div className="home">
        <div className="container">
          <form className="form">
            <input type="text" className ="search-input" placeholder="Find for items"></input>
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
                  className="add-button"  
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
