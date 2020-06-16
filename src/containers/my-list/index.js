import React, { Component } from 'react';
import "./style.css";

class MyList extends Component {
 
    countingTotal = () =>{
        let sum =0;
        this.props.listItems.forEach(element => {
            sum+= element.itemInBag*element.itemCost;
        });
        return sum;
    }

    render() { 

        let sum=0;
        sum = this.countingTotal();


        return ( <div className = "my-list">
            <h1>shopping list</h1>

            <div className ="add-item">
                <label className= "label" htmlFor ="i-name">Item name :</label>
                <input onChange ={this.props.AddingItemName} id = "i-name" type= "text" className = "item-name-to-add" placeholder = "name of item"></input>
                <label className= "label" htmlFor ="i-rate">Item rate :</label>
                <input onChange ={this.props.AddingItemRate} id= "i-rate" type = "text" className = "item-price" placeholder = "rate per object"></input>
                <button  onClick = {this.props.AddingItemInList} className ="add-item-button">Add item +</button>
            </div>
    <p  className = "list-item-count">Your list have {this.props.listItems.length} item</p>
            <div className ="list">
             {this.props.listItems.map((item) =>( <div className ="list-item">
    <span>{item.itemName}</span>
    <span>x {item.itemInBag}</span>
                  <button className = "increment-button" onClick ={() => this.props.handleIncrement(item)}>+</button>
                  <button className = "decrement-button" onClick ={() => this.props.handleDecrement(item)}
                  disabled = {item.itemInBag === 0?'disabled':''}>-</button>
                  <button className ="delete-button" onClick = {() => this.props.handleDelete(item)}>delete</button>
    <span> Rs: {item.itemCost*item.itemInBag}</span>
               </div>))}

       </div>

       <div>
    <p className ="total-cost">{sum===0?"":`Total Cost: Rs ${sum}`}</p>
       </div>
        </div> );
    
}}
 
export default MyList;