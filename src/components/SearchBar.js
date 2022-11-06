import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
//in class based components its this.props
        this.props.onSubmit(this.state.term)
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
          <div className="field">
              <label>Image search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/**
 user types in input, when they do, callback invoked (the one passed on onChange)\
 inside callback we pull val of input out of the e object, we update
 state on our component calling setState
 this.state.term contains what user typed in input
 anytime we call setstate component re renders it self
 when component re renders, we take val of that input (this.state.term)
and assign it to value prop of the input, which overwrites w.e text
is inside the input. 
all of this gives us controlled element

 diff btwn controlled and uncontrolled component
 they key is we are storing our info inside our components on ours
 state property instead of storing info inside the dom

 this keyword

 this is a reference back to the class itself
 (instance of search bar) 
 we can then use that to get direct access to state, render, onformsubmit props

 doesn't work properly when called in callback function
*/
