import React,{Component} from 'react';
import './App.css';
import Heading from './containers/Heading/index';
import Navbar from './containers/nav-bar';
import Home from './containers/Home';
import MyList from './containers/my-list';
import itemsData from "./data/items.json"



class App extends Component {
  state = { 
    items :  [
      {
          id: 1,
          image:"item-1.jpg",
          itemName:"Maggi",
          isAdded: "Add Item",
          itemInBag:1,
          itemCost : 12
      },
      {
        id: 2,
        image:"item-2.webp",
        itemName:"Dove",
        isAdded: "Add Item",
        itemInBag:1,
        itemCost : 25
      },
      
      {
        id: 3,
        image:"item-3.jpg",
        itemName:"Fair & lovely",
        isAdded: "Add Item",
        itemInBag:1,
        itemCost :98 
      },
      
      {
        id: 4,
        image:"item-4.webp",
        itemName:"Himalaya face wash",
        isAdded: "Add Item",
        itemInBag:1,
        itemCost :120  
      },
      
      {
        id: 5,
        image:"item-5.webp",
        itemName:"Parachute coconut oil",
        isAdded: "Add Item",
        itemInBag:1,
        itemCost : 198
      },
      {
        id: 6,
        image:"item-6.jpg",
        itemName:"Sunsilk shampoo",
        isAdded: "Add Item",
        itemInBag:1,
        itemCost : 165
      }
      
      
      
  ],
  listItems : [],
  ItemName :"",
  ItemRate :""


 };


 handleClick = (item) =>{
if(item.isAdded == "Add Item"){
  const items = [...this.state.items];
  const index = items.indexOf(item);
   items[index] = {...this.state.items[index]};
   items[index].isAdded = "Remove Item";
   this.setState({items});

   const listItems = [...this.state.listItems, item]
   this.setState({listItems});
}

else {
  const items = [...this.state.items];
  const index = items.indexOf(item);
   items[index] = {...this.state.items[index]};
   items[index].isAdded = "Add Item";
   this.setState({items});

   const listItems = this.state.listItems.filter((c) => (
    c.id != item.id
  ));
   this.setState({listItems});
  
}


 };
 handleIncrement = (item) =>{
  const listItems = [...this.state.listItems];
  const index = listItems.indexOf(item);
  listItems[index] = {...this.state.listItems[index]};
  listItems[index].itemInBag += 1;
   this.setState({listItems});

 };
 handleDecrement = (item) =>{
  const listItems = [...this.state.listItems];
  const index = listItems.indexOf(item);
  listItems[index] = {...this.state.listItems[index]};
  listItems[index].itemInBag -= 1;
   this.setState({listItems});
 };

 handleDelete = (item) => {
  this.state.items.forEach( c => {
    if(c.id === item.id){
      c.isAdded = "Add Item";
    }
  })

/* item deleted from the list */
   const listItems = this.state.listItems.filter((c) => (
     c.id != item.id
   ));
    this.setState({listItems});
 }


 AddingItemName = (e) => {
this.setState({ItemName: e.target.value})
console.log(this.state.ItemName);
 }
 AddingItemRate = (e) => {
  this.setState({ItemRate: e.target.value})
  console.log(this.state.ItemRate);
   }
   AddingItemInList = () => {
   var  object = {  
    id: this.state.items.length +1,
    image:"item-6.jpg",
    itemName:`${this.state.ItemName}`,
    isAdded: "Remove Item",
    itemInBag:1,
    itemCost : parseInt(this.state.ItemRate, 10)
}

const  items = [...this.state.items, object];
this.setState({items});

const  listItems = [...this.state.listItems, object];
this.setState({listItems});

}
 
  render() { 
    return (   <div className="App">
    <Heading/>

    <div className ="main-body">
       <Home
       items = {this.state.items}
       handleClick = {this.handleClick}
       />
       <MyList
       listItems = {this.state.listItems}
       handleIncrement = {this.handleIncrement}
       handleDecrement = {this.handleDecrement}
       handleDelete = {this.handleDelete}
       AddingItemName = {this.AddingItemName}
       AddingItemRate ={this.AddingItemRate}
       AddingItemInList = {this.AddingItemInList}/>
       </div>
  </div> );
  }
}
 
export default App;

