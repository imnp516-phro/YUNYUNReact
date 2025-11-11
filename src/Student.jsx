import PropTypes from "prop-types";

// cách của React 18

/*function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.defaultProps = {
  name: "Unknown",
  age: 0,
  isStudent: false,
};*/


// React 19
function Student({name = "Unknown", age = 0, isStudent= false}){
    return(
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
    );
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
