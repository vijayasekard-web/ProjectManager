import React, { Component } from 'react';
import uuid from 'uuid';
//import ProjectItem from './ProjectItem';

class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories : ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    e.preventDefault();
    console.log("Inside Handle " + this.refs.title.value);
    if(this.refs.title.value === ''){
      alert("Title is blank")
    }else{
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value

      }}, function(){
        // console.log(this.state)
        this.props.addProject(this.state.newProject)
      })
    }
  }

  render() {
    const handleSubmit = this.handleSubmit.bind(this);
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}> {category} </option> 
    });
    
    return (
      <div>
       <h3> Add Project</h3>
       <br />
       <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <br />
           <div>
            <label>Category</label>   <br />
            <select ref="category"> 
          {categoryOptions}
            </select> 
          </div>
          <br />
          
          <input type="submit" value="SUBMIT"/>
       </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
