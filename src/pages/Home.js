import React from 'react';
import { Link, useParams } from "react-router-dom";
import Header from '../components/Header/Header';

import Filters from "../components/Filters/Filters";
import Pagination from '../components/Pagination/Pagination';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Cards
} from '../components/Card/Card';
import Footer from '../components/Footer/Footer';


 function Home () {

  const [Character, setCharacter] = React.useState([]);
  const [todos, setTodos] = React.useState([]);


  const {page} = useParams();

  React.useEffect(() => {
      fetch(`https://gateway.marvel.com/v1/public/characters?limit=20&offset=${ (page - 1)*20}&ts=5&apikey=5ddb27dc126a71615a788f38b890b94f&hash=c7e16df284b9585157bf26db29babb80`)
        .then(response => response.json())
        .then(data => {setCharacter(data.data.results); setTodos(data.data.results);});
    }, []);
  
  
    let outputContacts; 
    
    if (Character.length > 0){
      outputContacts = Character.map(Character => (
  
      <Card key={Character.id}>
        <CardImg image={Character.thumbnail.path + "." + Character.thumbnail.extension} alt={Character.name} />
        <CardBody>
          <Link to={`/character/${Character.id}`}>
            <CardTitle title={Character.name} />
          </Link>
          <CardText comics={Character.comics.returned} series={Character.series.returned}/>
        </CardBody>
      </Card>
      
    ));
    }
  
    else {
      outputContacts = <h2>Loading...</h2>;
    }

  const handleSearchFilter = name => {
    
    if (name.length > 0) {

      
      fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=5&apikey=5ddb27dc126a71615a788f38b890b94f&hash=c7e16df284b9585157bf26db29babb80`
        )
        .then(response => response.json())
        .then(data => setCharacter(data.data.results));
      
    }
    
    else {
      setCharacter(todos);
    }
  };



  return (
    <>
      <Header title="MARVEL CHARACTERS">
       
        <Filters
          onSearch={handleSearchFilter}
          toggleSort=""
          selectedFilter=""
        />

      </Header>
    
      <Cards>
        {outputContacts}
      </Cards>

      <Pagination />
      <Footer />
      
    </>
  );
}

export default Home;