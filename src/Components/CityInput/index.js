import React from "react";
import { Form, Button, Container } from "react-bootstrap";
const CityInput = ({city,setCity,fetchCityWeather}) => {
  const [error,setError]=React.useState("");

  const handleInputChange=(event)=>{
    setCity(event.target.value);
  };

  //console.log("city is",city);
  const handleSubmit=({})=>{
    // write logic to see if fielsd is empty.

    if(!city){
      setError("City field is Empty");
    }
    else{
      setError("");
      // Make API call.

      fetchCityWeather();
      
    }
  }


  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control value={city} 
          type="text" 
          placeholder="Enter city" 
          onChange={handleInputChange}
          />
          <p className="text-danger">{error}</p>
        </Form.Group>


        <Button variant="primary"onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
};
export default CityInput;