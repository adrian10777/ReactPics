import React from 'react';
import ReactDOM from 'react-dom'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component{
    state = { images: [] }

     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
        params:{ query: term },

        });
        this.setState({ images: response.data.results })
        
        // .then((response) => {
        //     console.log(response.data.results)
        // })
        /**
         w.e we make request with Axios, it returns an object called a promise
         
         a promise is a object that will give us a notification when some amount of work
         amount of work like network request is completed.

         when request is complete we chain a .then(),we pass in callback
         and callback called some point in the future with data we got back from unsplash api

         async keyword allows us to use async await inside function 
         */
    }

    render() {
  return (
    <div className='ui container' style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>
    </div>
  );
    }
}

export default App;
