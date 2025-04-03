function Greeting(props){

return(
    props.islogin?<h2>Welcome: {props.name}</h2>:<h2>dog</h2>
);

    
}
export default Greeting