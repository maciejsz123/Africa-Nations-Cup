import React, {Component} from 'react';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "test",
          points: 0
        }
      ],

      data: ['a', 'b', 'c' ,'d', 'e', 'f', 'g', 'h', 'i' ,'j', 'k', 'l', 'm', 'n', 'o' ,'u', 'p', 'r', 's'],
      perPage: 10,
      actualPage: 1
    };
  }

  componentDidMount() {
    /*

    fetch("/getRanking")
      .then( function(response)) {
      return response.json()
    })
      .then( function(data) {
      console.log(JSON.stringify(data));
    });

    */
  }

  handlePaginationClick(e) {
    if(e.target.nodeName === "LI") return;
    const actualPage = this.state.actualPage;

    if(e.target.name === "previous") {
      if(actualPage === 1) return;
      this.setState({
        actualPage: actualPage - 1
      });
    } else if(e.target.name === "next") {
      if(actualPage === Math.ceil(this.state.data.length / this.state.perPage)) return;
      this.setState({
        actualPage: actualPage + 1
      });
    } else {
      this.setState({
        actualPage: Number(e.target.name)
      });
    }
  }

  render() {
    const firstItemShown = this.state.perPage * (this.state.actualPage - 1);
    const lastItemShown = this.state.perPage * this.state.actualPage;
    const actualItemsShown = [];
    for(let i=firstItemShown; i<lastItemShown; i++) {
      if(!this.state.data[i]) break;
      actualItemsShown.push(this.state.data[i]);
    }

    const numberOfPages = [];
    for(let i=0; i< Math.ceil(this.state.data.length / this.state.perPage); i++) {
      numberOfPages.push(i+1);
    }

    let loggedIn = (
      <React.Fragment>
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th style={{width: "20%"}}>rank</th>
                  <th style={{width: "auto"}}>user</th>
                  <th style={{width: "20%"}}>points</th>
                </tr>
              </thead>
              <tbody>
                {actualItemsShown.map( (data) => {
                  return (<tr key={data}>
                    <td>1</td>
                    <td>2</td>
                    <td>{data}</td>
                  </tr>);
                })
              }
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <ul className="pagination justify-content-center">
            <li key={0}
                onClick={this.handlePaginationClick.bind(this)}
                className={`page-item${this.state.actualPage === 1 ? " disabled" : ""}`}>
              <a href="#" name="previous" className="page-link">previous</a>
            </li>

            {numberOfPages.map( page => {
              return (<li key={page}
                      onClick={this.handlePaginationClick.bind(this)}
                      className={`page-item${this.state.actualPage===page ? " active" : ""}`}>
                <a href="#" name={page} className="page-link">{page}</a>
              </li>);
            })}

            <li key={numberOfPages.length+1}
                onClick={this.handlePaginationClick.bind(this)}
                className={`page-item${this.state.actualPage === numberOfPages.length ? " disabled" : ""}`}>
              <a href="#" name="next" className="page-link">next</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );


    let loggedOut = (
      <h1>Logged out, log in to see data</h1>
    );

    return(
      <div className="container">
        {this.props.logged ? loggedIn : loggedOut}
      </div>
    );
  }
}

export default Ranking;
