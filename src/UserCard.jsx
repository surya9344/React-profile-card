import PropTypes from "prop-types";

const userData=[
    {
        name: "James",
        city:"Chennai",
        about:"WEB DEVELOPER",
        online:false,
        profile: "/src/assets/card1.jpg",
        skills:['HTML','CSS','JavaScript','React.js','C','JAVA','API','POSTMAN']
    },
    {
        name: "Nancy",
        city:"New York",
        about:"WEB DEVELOPER",
        online:true,
        profile: "/src/assets/card2.jpg",
        skills:['HTML','CSS','JavaScript','React.js','C','JAVA','Python','Postgresql','API','MongoDB','POSTMAN']
    },
    {
        name: "shakespear",
        city:"Phoenix",
        about:"SOFTWARE DEVELOPER",
        online:true,
        profile: "/src/assets/card6.jpeg",
        skills:['React Native','Kotlin','HTML','CSS','JavaScript','React.js','C','JAVA','API','Python']
    }
];

function User(props){
    return(
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img className="img" src={props.profile} alt="profile" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.about}</p>
            <div className="buttons">
                <button className="primary ">Message</button>
                <button className="primary outfit">Following</button>
            </div>
            <div className="skills">
                <h6>SKILLS</h6>
                <ul>
                    {props.skills.map((skills,index)=>(<li key={index}>{skills}</li>))}
                </ul>    
            </div>
            
        </div>
        
    )
}
export const UserCard = () =>{
    return (
        <>
         {userData.map((user, index)=> ( <User key={index} name={user.name} profile={user.profile} city={user.city} about={user.about} online={user.online} skills={user.skills}/>
         ))}
        </>
    ); 
};


User.propType = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
}

