import PropTypes from "prop-types";

const userData=[
    {
        name: "James",
        city:"Chennai",
        about:"WEB DEVELOPER",
        online:false,
        profile: "https://www.google.com/imgres?q=profile%20image%20avatar&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230927%2Foriginal%2Fpngtree-man-avatar-image-for-profile-png-image_13001882.png&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fman-avatar-image-for-profile_13001882.html&docid=jg1keOQMt--4lM&tbnid=gq4PHU4u5hkkhM&vet=12ahUKEwiZt___i8eHAxW-RmwGHRnWHLEQM3oECFIQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwiZt___i8eHAxW-RmwGHRnWHLEQM3oECFIQAA",
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

