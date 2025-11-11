import PropTypes from "prop-types";

// 1.if else
// 2. toan tu ?
function UserGreeting({username = "Guest", isLoggedIn = false}){

    const welcomeMessage = <h2 className ="welcome-message">
                            Welcome {username}
                            </h2> 
    const loginPrompt = <h2 className = "login-prompt">
                        Please log in to continue
                         </h2>

    return(isLoggedIn ? welcomeMessage: loginPrompt );
    
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
// React 18
/*  
    function UserGreeting(props){

    const welcomeMessage = <h2 className ="welcome-message">
                            Welcome {props.username}
                            </h2> 
    const loginPrompt = <h2 className = "login-prompt">
                        Please log in to continue
                         </h2>

    return(props.isLoggedIn ? welcomeMessage: loginPrompt );
    
    }

    UserGreeting.defaultProps = {
        isLoggedIn: false,
        username: "Guest",
    }
*/
export default UserGreeting