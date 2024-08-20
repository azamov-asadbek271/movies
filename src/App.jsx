import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
import "./App.css"
import AppFilter from './app-filter/app-filter'
import AppInfo from './app-info/app-info'
import SearchPanel from './search-pane/search-pane'
import MoviList from './movi-list/movi-list'
import MoviesAddForm from './movies-add-form/movies-add-form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data: [
    {name:"Po'lat Alemdar", viewers:877,favourite:false, like:false, id: 1},
    {name:"Ertugrul", viewers:666,favourite:false, like:false, id: 2},
    {name:"Omar", viewers:555,favourite:false, like:false, id: 3}
  ],
   term:"",
   filter:"all",
    }
  }
 
   onDelete = id =>{
   this.setState(({data}) => {
    const newData = data.filter(item => item.id !== id)
    return {
      data: newData
    }
   })
  }
 addForm = (item) => {
 if(item.name && item.viewers) {
 this.setState(({ data }) => {
   const newArr = [
     ...data,
     { ...item, id: uuidv4(), favourite: false, like: false },
   ];
   return {
     data: newArr,
   };
 });
 }}
 onToggleProp = (id,prop) => {
  this.setState(({data}) => {
    const newFavorite = data.map(item => {
      if(id === item.id) {
        return {...item, [prop]: !item[prop]}
      }
      return item
    })
    return {
      data:newFavorite,
    }
  })

 }
 searchHandler = (arr,term) =>  {
  if(term.length === 0) {
     return arr
  }
  return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
 }
updateTerm = (term) => this.setState({term})

filterHandler = (arr,filter) => {
  switch(filter) {
    case "popular":
      return arr.filter(c => c.like)
    case "mostWivers":
      return arr.filter(c => c.viewers > 800)
      default: 
      return arr
  }
}
updateFilterHAnler = filter => this.setState({filter})

 render() {
  const {data,term,filter} = this.state
  const allMoviesCount = data.length
  const favouriteMoviesCount = data.filter((c) => c.favourite).length;
  const visibleData = this.filterHandler(this.searchHandler(data, term),filter);
   return (
     <div className="app font-monospace">
       <div className="content">
         <AppInfo
          allMoviesCount={allMoviesCount} 
         favouriteMoviesCount={favouriteMoviesCount} />
         <div className="search-panel">
           <SearchPanel updateTerm={this.updateTerm} />
           <AppFilter filter={filter} updateFilterHAnler={this.updateFilterHAnler} />
         </div>
         <MoviList
           onToggleProp={this.onToggleProp}
           data={visibleData}
           onDelete={this.onDelete}
         />
         <MoviesAddForm addForm={this.addForm} />
       </div>
     </div>
   );
 }
}

export default App