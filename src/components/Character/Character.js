import React from 'react';
import './Character.css';

export function CharacterAvatar(props) {
    return <img src={props.image} className="character-avatar" alt={props.alt} />;
    
}

export function CharacterBody(props) {
return <div className="character-body">{props.children}</div>;
}

export function CharacterDescription (props){
    return (
        <div className="character-description">
            <h2 className="character-name">{props.title}</h2>
            <p className="character-text">{props.text}</p>

            <div className="group-tags" >
                {props.children}
            </div>
        </div>
    )
}

export function CharacterEventsGroup (props){
    return (
        <div className="character-events-group">
            <h3>{props.title}</h3>

            <div className="group-tags" >
                {props.children}
            </div>
        </div>
    )
}

export function Character(props) {
return (
    <div className="character" >
    {props.children}
    </div>
);
}

export function CharacterEvents(props) {
    
    let output;

    if (props.events.length > 0){
        
        

        output = props.events.map(prop => (
    
            <div className="events-buttom">{prop.name}</div>
        
        ));
    }

    else {
        output =
            <div className="events-buttom">nulo</div>;
        
    }

    return output;
}

export function CharacterProfile(props) {
    return (
        <div className="character-profile" >
        {props.children}
        </div>
    );
}
