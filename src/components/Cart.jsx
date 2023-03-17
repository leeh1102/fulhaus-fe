import { Box, Typography } from "@mui/material"

export default function Cart({ products }) {
    const price = products.map(x => x.retailPrice);
    // get sum of price
    const sum = price.reduce((a, b) => a + b, 0);
    return (
        <Box sx={{
            padding: "10px",
        }}>
            <Typography sx={{ fontFamily: "Montserrat", fontSize:"20px", fontWeight: "700", marginBottom: "10px", paddingLeft:"20px" }}>Cart</Typography>

            {products.map((product) => {
                return (
                    <Box sx={{
                        display: "flex",
                        borderBottom: "1px solid gray",
                        marginBottom: "20px",
                        paddingBottom: "20px"
                    }}>
                        <img src={product.imageURLs[0]} width="200" />
                        <Box sx={{
                            padding: "20px 0",
                        }}>
                            <Typography sx={{ fontFamily: "Montserrat", fontWeight: "700", marginBottom: "30px" }}>{product.fulhausProductName}</Typography>
                            <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", marginBottom: "30px" }}>Price: {product.retailPrice / 100}</Typography>
                            <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", marginBottom: "30px" }}>Quantity: 1x</Typography>
                        </Box>
                    </Box>
                )
            })}
            <Box>
                <Typography sx={{ fontFamily: "Montserrat", fontWeight: "700", marginBottom: "30px" }}>
                    Total Price: $ {products.map(x => x.retailPrice).reduce((a, b) => a + b, 0) / 100}
                </Typography>
            </Box>
        </Box>
    )
}