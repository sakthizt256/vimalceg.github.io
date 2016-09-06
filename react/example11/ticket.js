class TicketList extends React.Component{
  constructor(){
    super()
    this.state={tickets:[]};
    this.addDynamicTicket=this.addDynamicTicket.bind(this)
  }
  addDynamicTicket(){
    var id=this.state.tickets.length+1;
    var subj=Math.random().toString(36).substring(2);
    this.state.tickets.push({id,subj});
    this.setState({tickets:this.state.tickets})
    this.props.onTicketUpdate(this.state.tickets.length);
  }
  render(){
    return <div>
    <button onClick={this.addDynamicTicket}>Add Dynamic Ticket</button>
   
    {
      this.state.tickets.map((ticket)=>{
        return <div key={`ticket${ticket.id}`}>
          <div>id:{ticket.id}</div>
          <div>subject:{ticket.subj}</div>
        </div>
    })
  }

  </div>
}
}
window.TicketList=TicketList