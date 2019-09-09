class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetchAPI().then(({ data }) => {
      this.setState({
        users: data,
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.users.map(user => <User {...user}/>)}
      </div>
    );
  }
}

const User = ({
  id,
  first_name,
  last_name,
  email,
  avatar,
}) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>First Name: {first_name}</p>
      <p>Last Name: {last_name}</p>
      <p>Email: {email}</p>
      <img src={avatar}/>
    </div>
  );
}
