class App extends Component {
  constructor() {
    super();

    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount() {
    this.fetchCats();
  }

  fetchCats = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(cats => this.setState({ cats: cats }));
  }

  handleChange = (event) => {
    console.log(this.state.searchField);
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => cat.username.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div>
        <SearchField handleChange={this.handleChange} />
        <CardList cats={filteredCats} />
      </div>
    )
  }
}

export default App;