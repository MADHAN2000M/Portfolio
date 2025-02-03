import React,{ useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductList = () => {

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/products', { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parsing the JSON data
      })
      .then((result) => {
        setProducts(result);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
       <h1> ProductList </h1>
       <section>
        {
            products.map( ()=>{
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            } )
        }
       </section>
    </div>
  )
}


export default ProductList