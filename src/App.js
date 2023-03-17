import './App.css';
import NavBar from './components/Navbar';
import SideMenu from './components/SideMenu';
import { useState, useEffect } from 'react';
import { Box, maxWidth } from '@mui/system';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Button, Divider, Typography } from '@mui/material';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setSidebarOpen(open);
  };

  useEffect(() => {
    axios.get('https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6')
      .then(response => {
        setProducts(response.data.data.products)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      <NavBar setSideBarOpen={setSidebarOpen} />
      <SideMenu sidebarOpen={sidebarOpen} toggleDrawer={toggleDrawer} products={products.slice(4)} />
      <Box sx={{
        width: "100%",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
        padding: "0 50px"
      }}>
        <Box>
          <img className='banner' src="https://cdn11.bigcommerce.com/s-cu5ix4ulx7/images/stencil/1280x1280/products/16493/34065/jpg__78714.1575399648.jpg?c=2"
            style={{ height: "800px", }}
          />
        </Box>

        <Box sx={{
          display: "flex",
          width: "auto",
          gap: "10px",
          flexWrap: "wrap",
          height: "800px",
          overflowY: "scroll",
        }}>
          {products.map((product) => {
            return (
              <Box key={`product_${product._id}`}
                sx={{
                  width: "250px",
                  border: "#f7f7f7 solid 1px",
                  padding: "20px",
                  boxShadow: "0 30px 30px 0 #f7f7f7",
                }}
              >
                <img src={product.imageURLs[0]} width="200" />
                <Divider />
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "700", marginBottom: "30px" }}>{product.fulhausProductName}</Typography>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "700", marginBottom: "30px" }}>{product.retailPrice / 100}</Typography>
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <StarIcon sx={{ color: "gold" }} />
                <Button variant="outlined"
                  sx={{
                    marginLeft: "20px",
                    marginTop: "-20px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "40px",
                    borderColor: "#f7f7f7",
                    color: "red",
                    backgroundColor: "#f7f7f7"
                  }}>
                  <AddShoppingCartRoundedIcon />
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>

    </div>
  );
}

export default App;