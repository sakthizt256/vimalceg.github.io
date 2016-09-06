class ContactList extends React.Component{
  constructor(){
    super()
    this.state={contacts:[]};
    this.addContact=this.addContact.bind(this)
  }
  addContact(){
    var id=this.state.contacts.length+1;
    var name=Math.random().toString(36).substring(2);
    this.state.contacts.push({id,name});
    this.setState({contacts:this.state.contacts})
    this.props.onContactUpdate(this.state.contacts.length)
  }
  render(){
    return <div>
    <button onClick={this.addContact}>Add Contact</button>
    {
      this.state.contacts.map((contact)=>{
        return <div key={`contact${contact.id}`}>
          <div>id:{contact.id}</div>
          <div>Name:{contact.name}</div>
        </div>
    })
  }

  </div>
}
}
window.ContactList=ContactList;
