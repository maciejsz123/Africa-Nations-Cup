import React, {Component} from 'react';

class Players extends Component {
  players = [    "Amro Tarek",    "Sam Morsy",    "Mohamed Salah",    "Ramadan Sobhi",    "Romain Métanire",
    "Jérémy Morel",    "Marco Ilaimaharitra",    "Lalaina Nomenjanahary",    "William Gros",    "Yohan Benalouane",
    "Bilel Mohsni",    "Ellyes Skhiri",    "Wahbi Khazri",    "Alfred Gomis",    "Kalidou Koulibaly",
    "Salif Sané",    "Youssouf Sabaly",    "Lamine Gassama",    "Idrissa Gueye",    "Cheikhou Kouyaté",
    "Alfred N'Diaye",    "Moussa Konaté",    "Sadio Mané",    "Ismaila Sarr",    "Keita Baldé",
    "Sada Thioub",    "Manuel da Costa",    "Romain Saiss",    "Achraf Hakimi",    "Yunis Abdelhamid",
    "Mbark Boussoufa",    "Karim El Ahmadi",    "Younes Belhanda",    "Fayçal Fajr",    "Hakim Ziyech",
    "Sofiane Boufal",    "Youssef En-Nesyri",    "Rachid Alioui",    "Kenneth Omeruo",    "William Troost-Ekong",
    "Ola Aina",    "Semi Ajayi",    "Chidozie Awaziem",    "Ahmed Musa",    "Alex Iwobi",
    "Wilfred Ndidi",    "John Ogu",    "Henry Onyekuru",    "Samuel Kalu",    "Odion Ighalo",
    "Mamadou Samassa",    "Youssouf Koné",    "Bakaye Dibassy",    "Massadio Haidara",    "Lassana Coulibaly",
    "Adama Traoré",    "Moussa Marega",    "Kalifa Coulibaly",    "Hadi Sacko",    "Abdoulay Diaby",
    "Steeve Elana",    "Issiaga Sylla",    "Baissama Sankoh",    "Boubacar Fofana",    "Demba Camara",
    "François Kamano",    "Idrissa Sylla",    "Aissa Mandi",    "Ramy Bensebaini",    "Youcef Atal",
    "Rafik Halliche",    "Mohamed Fares",    "Mehdi Abeid",    "Ismaël Bennacer",    "Riyad Mahrez",
    "Sofiane Feghouli",    "Adam Ounas",    "Said Benrahma",    "Oussama Darfalou",    "Adama Ba",
    "Serge Aurier",    "Wilfried Kanon",    "Eric Bailly",    "Mamadou Bagayoko",    "Jean-Philippe Gbamin",
    "Ismaël Traoré",    "Max Gradel",    "Serey Dié",    "Franck Kessié",    "Ismaël Diomandé",
    "Jonathan Kodjia",    "Maxwel Cornet",    "Wilfried Zaha",    "Yakou Méité",    "David Sesay",
    "Victor Wanyama",    "Richard Ofori",    "Lumor Agbenyenu",    "Nicholas Opoku",    "Kwadwo Asamoah",
    "Christian Atsu",    "Mubarak Wakaso",    "Thomas Partey",    "Jeffrey Schlupp",    "Alfred Duncan",
    "André Ayew",    "Jordan Ayew",    "Kwesi Appiah",    "Emmanuel Boateng",    "Caleb Ekuban",
    "Mira",    "Clinton Mata",   "Igor Vetokele",    "Vá",    "Wilson Eduardo",
    "Gaël Bigirimana",    "Saido Berahino",    "Ambroise Oyongo",    "Gaëtan Bong",
    "Arnaud Djoum",    "André-Frank Zambo Anguissa",    "Petrus Boumal",    "Eric Maxim Choupo-Moting",
    "Clinton N'Jie",   "Marcelo Djaló",    "Pelé",    "Jorginho",    "Joao Mário",
    "Tendayi Darikwa",    "Knowledge Musona",    "Marcel Tisserand",    "Arthur Masuaku",
    "Chancel Mbemba",    "Youssouf Mulumbu",    "Jacques Maghoma",    "Yannick Bolasie",
    "Cédric Bakambu",    "Dieumerci Ndongala",    "Khaled Adénon",    "Emmanuel Imorou",
    "Jordan Adéoti",    "David Djigla",    "Steve Mounié",    "Darren Keet",
    "Thulani Serero",    "Kamohelo Mokotjo",    "Bongani Zungu",    "Dean Furman",    "Lars Veldwijk",
  ];

  constructor() {
    super();
    this.state = {
      playersData: [],
      filter: "strNationality",
      filterValue: ""
    };
  }

  componentDidMount() {
    for(let i = 0 ;i< this.players.length ; i++) {
      fetch("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=" + this.players[i])
        .then(response => response.json())
        .then(data => {
          const playersData = this.state.playersData;
          playersData.push(data.player[0]);
          this.setState( {
            playersData: playersData
          });
        }).catch(error => {
          console.log(`player ${this.players[i]} doesn't occur in API`);
        });
    }
  }

  onChange(e) {
    this.setState({filterValue: e.target.value});
  }

  onChangeFilter(e) {
    this.setState({filter: e.target.value})
  }

  onClick() {
    this.setState({
      filter: "strNationality",
      filterValue: ""
    });
  }

  render() {
    let filtered = this.state.playersData.filter((player) => {

      return player[this.state.filter].toLowerCase().includes(this.state.filterValue.toLowerCase());
    });
    return(
      <React.Fragment>
        <h2 style={{textAlign: "center"}}>Player's worth watching</h2>
        <div className="container-fluid d-flex justify-content-center">
          <label>Filter players by
            <select value={this.state.filter} onChange={this.onChangeFilter.bind(this)}>
              <option value="strNationality">country</option>
              <option value="strPlayer">name</option>
              <option value="strTeam">team</option>
            </select>
            <input style={{width: "auto"}} type="text" value={this.state.filterValue} onChange={this.onChange.bind(this)}/>
          </label>
          <button className="btn btn-primary" type="button" onClick={this.onClick.bind(this)}>reset filter</button>
        </div>
        <div style={style} className="container-fluid">
          {filtered.map(function(player, i){
            let image = player.strThumb || require("./images/undefined.png");
            return <div key={i} style={divStyle}>
              <p><b>{player.strPlayer}</b></p>
              <img src={image} alt={player.strPlayer} style={{width: "200px", height: "200px"}}/>
              <p style={paragraphStyle}>{player.strNationality}</p>
              <p style={paragraphStyle}>team: {player.strTeam}</p>
            </div>
          })}
        </div>
      </React.Fragment>
    );
  }
}

const style = {
  display: "flex",
  flexFlow: "wrap row",
  justifyContent: "center",
  textAlign: "center"
};

const divStyle = {
  border: "1px solid rgb(0, 0, 0, 0.3)",
  margin: "2px",
  padding: "15 auto",
  backgroundColor: "#C2B280"
};

const paragraphStyle = {
  margin: "0px",
  maxWidth: "200px"
};

export default Players;
