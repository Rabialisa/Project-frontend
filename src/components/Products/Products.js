import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';



// const cards = [1,];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Products() {
  const [item, setItem] = React.useState([])

  const fetchInfo = () => { 
    return fetch(`https://project-backend-l84w.onrender.com/api/v1/product/get-products`) 
            .then((res) => res.json()) 
            .then((d) => setItem(d)) 
    }
    
    React.useEffect(() => {
      fetchInfo();
    }, []);

    let checkoutItems = sessionStorage.getItem('checkoutItems');

    // checkoutItems = [];
if (!checkoutItems) {
  checkoutItems = [];
} else {
  try {
    checkoutItems = JSON.parse(checkoutItems);
  } catch (error) {
    console.error('Invalid JSON data in sessionStorage: ', error);
    checkoutItems = [];
  }
}

    const handleAddCheckout = (item) => {
      checkoutItems = [...checkoutItems, item];
      // checkoutItems = [];
    
      sessionStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
    
      checkoutItems = JSON.parse(sessionStorage.getItem('checkoutItems'));
      console.log(checkoutItems);
      window.location.assign('/AddtoCard');
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Product View
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Products
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Best Gadget Collections 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {item.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.imageLink}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"
                      onClick={() => handleAddCheckout(card)}
                    >Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Gadgets are 
          <br/>
          Comming Soon!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Next Page
        </Typography>

      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

