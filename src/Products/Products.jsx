import React, { useEffect, useState } from 'react'
import Header from '../Pro/Header/Header';
import productss from "../ProductsData/Products.json";
import { Grid, Typography, Button, Paper } from '@material-ui/core';
// import { makeStyles } from "@material-ui/core/styles"
import "./Products.css";
import { Link } from 'react-router-dom';
import Cart from '../Pro/Cart/Cart';

function Products () {
  const [products, setProducts] = useState([]);
  const [iscar,setIsCart] = useState(false)
  
  const handleClick = (prod) => {
    iscar.push(prod);
    console.log(iscar);
  }
 
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: theme.spacing(40),
  //     height: theme.spacing(50),
  //     margin: theme.spacing(10, 0, 3, 3),
  //   }, 
  // }));

  // const classes = useStyles();

  useEffect(() => {
    setProducts(productss);
  }, []);

  

  return (
  
    <div className='pro' style={{ height:"20px"}} >
        <Header />
        <Grid container spacing={2}>
        {products.map((prod)=> {
          return (
            <Grid key = {prod.id} item xs={4} style={{position:"relative", top:"50px", left:"10px", right: "20px"}}>
              <Paper className="paper" elevation={4} style={{position:"relative", height:"375px", hover:"transition"}}>
                <img style={{ width: "150px", height: "200px" }} src={prod.url} />
                <Typography
                  style={{ margin: "60px 0 0 15px", lineHeight: "15px" }}
                  paragraph
                  >
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>
                      Product Name{" "}
                    </span>
                    - {prod.product_name}
                </Typography>
                <Typography
                  style={{ margin: "10px 0 0 15px", lineHeight: "15px" }}
                  paragraph
                >
                  <span style={{ fontSize: "16px", fontWeight: "600"}}>
                   Product Mrp - 
                  </span>{" "}
                 - {prod.mrp}
                </Typography>
                <Typography
                  style={{ margin: "10px 0 0 15px", lineHeight: "15px" }}
                  paragraph
                >
                  <span style={{ fontSize: "16px", fontWeight: "600"}}>
                   Product Price 
                  </span>{" "}
                -  {prod.price}
                </Typography>
                <br/>
                <Button 
                onClick = {()=> handleClick(productss)}
                  style={{ margin: " 2px 0 0 15px ", height: "23px", bottom: "10px"}}
                  variant = "contained"
                  color="primary"
                  >
                    Add
                    
                  </Button>
                <select style = {{ marginLeft: "5px", bottom: "8px", position: "relative", left: "31px"}}>
                  {prod.size.map((size, id) => {
                    return (
                      <option key = {id} value = {size} >
                        {size}
                      </option>
                    )
                  })}
                </select>
              </Paper>
            </Grid>
          )       
        })}
        </Grid>
    </div>
  )
}

export default Products;