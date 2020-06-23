import React, { Profiler } from 'react';
import Header from '../components/Header/Header';
import { Character, CharacterAvatar, CharacterBody,  
    CharacterDescription, CharacterEvents, CharacterProfile, CharacterEventsGroup } from '../components/Character/Character';
import { useParams} from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import {Link} from 'react-router-dom';



function Profile () {

    let { id } = useParams();

    const [character, setCharacter] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=5&apikey=5ddb27dc126a71615a788f38b890b94f&hash=c7e16df284b9585157bf26db29babb80`)
        .then(response => response.json())
        .then(data => setCharacter(data.data.results));
    }, []);


    return (
        character.map(character => (   
            <>
                <Header title={character.name} />
                
                <Character>
                
                    <CharacterProfile>
                        <CharacterAvatar image={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name} />
                        <CharacterDescription title={character.name} text={character.description} />
                        <Link to="/"><FiArrowLeft size={60} color="red" /></Link>
                    </CharacterProfile>
                
                    <CharacterBody>       

                        <CharacterEventsGroup title={"Comics"} text={60} >
                            <CharacterEvents events={character.comics.items} /> 
                        </CharacterEventsGroup>

                        <CharacterEventsGroup title={"Series"} text={60}>
                            <CharacterEvents events={character.series.items} />
                        </CharacterEventsGroup>
                        
                        
                        
                    </CharacterBody>
                </Character>
            </>
        ))    
    )


}

export default Profile;