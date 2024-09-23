import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
var settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function Home() {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const router = useRouter();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  var items = [
    {
      image: `https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg`,
      text: "explore more",
    },

    {
      image: `https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg`,
      text: "explore more",
    },
    {
      image: `https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg`,
      text: "explore more",
    },
  ];

  return (
    <>
      <div className="parent" style={{ paddingTop: "0px" }}>
        <main
          className={`${styles.main} ${inter.className}`}
          style={{ padding: "0", margin: "0" }}
        >
          <Carousel>
            {items.map((item, i) => (
              <div style={{ position: "relative" }}>
                <img key={i} height="600px" width="100%" src={item.image} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <h1
                    style={{
                      color: "#0077b6",
                      fontSize: "70px",
                      fontFamily: "cursive",
                    }}
                  >
                    Delicious Food Menu
                  </h1>
                  <h2
                    style={{
                      color: "#D90368",
                      textAlign: "center",
                      fontFamily: "revert-layer",
                    }}
                  >
                    With Unbelievable Offers
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "5px",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#49B6FF",
                        alignContent: "center",
                      }}
                      onClick={() => {
                        router.push("/auth/login");
                      }}
                    >
                      Login Now
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "15px",
                    }}
                  >
                    <p
                      style={{
                        color: "#8338ec",
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Don't have an account?{" "}
                      <>
                        <Link href="/auth/registration">Register Here</Link>
                      </>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          <Container sx={{ marginBottom: "90px", marginTop: "55px" }}>
            <div
              style={{
                paddingLeft: "0px",
                fontFamily: "Protest Guerrilla",
                fontSize: "35px",
                color:"#006d77"
              }}
            >
              Our BestSellers
            </div>
            <Grid container columns={12} sx={{ paddingTop: "20px" }}>
              <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 ,":hover":{
                boxShadow:18
              }}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.istockphoto.com/id/1453499717/photo/chicken-biryani-or-biriyani-served-in-plate-isolated-on-table-top-view-indian-spicy-food.jpg?s=2048x2048&w=is&k=20&c=74RRAlcfhYZKX5dOvWmEAa_OD9ucNpvUycC88CJcBVA="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mutton Handi Biriyani
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Delicious Muttton Biriyani Cooked at low flame With All The Indian Spices
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" ><><s style={{paddingRight:"2px"}}>₹499  </s></> <>₹349</></Button>
        <Button size="small" sx={{":hover":{
          backgroundColor:"blue",color:"magenta"
        }}}>Order Now</Button>
      </CardActions>
    </Card>
              </Grid>

              <Grid item xs={4}>
              <Card sx={{ maxWidth: 345,":hover":{
                boxShadow:18
              } }}>
      <CardMedia
        component="img"
        alt="Chicken Dish"
        height="140"
        image="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fried Chicken
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Chicken Grilled And Fried With A Smoky Flavour To make Your Outing Memorable
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" ><><s style={{paddingRight:"2px"}}>₹599  </s></> <>₹399</></Button>
        <Button size="small" sx={{":hover":{
          backgroundColor:"blue",color:"magenta"
        }}}>Order Now</Button>
      </CardActions>
    </Card>
              </Grid>

              <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 ,":hover":{
                boxShadow:18
              }}}>
      <CardMedia
        component="img"
        alt="Pizza"
        height="140"
        image="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Spicy Chicken Pizza
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A Spicy Tangy Pizza With All The Toppings and Complementary Coke
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" ><><s style={{paddingRight:"2px"}}>₹299  </s></> <>₹199</></Button>
        <Button size="small" sx={{":hover":{
          backgroundColor:"blue",color:"magenta"
        }}}>Order Now</Button>
      </CardActions>
    </Card>
              </Grid>
            </Grid>
          </Container>

          <Container>
          <div
              style={{
                paddingLeft: "0px",
                fontFamily: "Protest Guerrilla",
                fontSize: "35px",
                color:"#006d77"
              }}
            >
              Why Choose Us
            </div>
            <Grid container columns={12} sx={{ paddingTop: "20px" }}>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Blanditiis unde, assumenda nemo libero fugit repudiandae enim
                  laboriosam eveniet esse exercitationem, facilis officiis
                  possimus animi reiciendis, necessitatibus itaque incidunt.
                  Aperiam beatae maxime tempora. Magni odio, doloremque labore,
                  delectus fuga soluta officiis impedit aliquid aspernatur
                  exercitationem neque, sapiente est magnam optio esse
                  voluptatum! Inventore, voluptates veniam suscipit maiores
                  veritatis atque ipsam mollitia, fuga, itaque labore dolor quod
                  sapiente quos iusto tenetur blanditiis facere dolorum quas
                  sunt nulla. Eveniet ut adipisci molestias assumenda modi, eum,
                  quam recusandae quibusdam totam veritatis qui mollitia
                  incidunt? Numquam beatae amet culpa! Fuga laudantium molestias
                  harum asperiores culpa.
                </p>
              </Grid>

              <Grid item xs={6} style={{ paddingLeft: "20px" }}>
                <img
                  src="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg"
                  alt=""
                  height="300px"
                  width="100%"
                />
              </Grid>
            </Grid>
          </Container>

          <Container sx={{ marginBottom: "90px" }}>
            <Grid container columns={12} sx={{ paddingTop: "70px" }}>
              <Grid item xs={6}>
                <img
                  src="https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1280.jpg"
                  alt=""
                  height="300px"
                  width="100%"
                  style={{ paddingRight: "25px" }}
                />
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Blanditiis unde, assumenda nemo libero fugit repudiandae enim
                  laboriosam eveniet esse exercitationem, facilis officiis
                  possimus animi reiciendis, necessitatibus itaque incidunt.
                  Aperiam beatae maxime tempora. Magni odio, doloremque labore,
                  delectus fuga soluta officiis impedit aliquid aspernatur
                  exercitationem neque, sapiente est magnam optio esse
                  voluptatum! Inventore, voluptates veniam suscipit maiores
                  veritatis atque ipsam mollitia, fuga, itaque labore dolor quod
                  sapiente quos iusto tenetur blanditiis facere dolorum quas
                  sunt nulla. Eveniet ut adipisci molestias assumenda modi, eum,
                  quam recusandae quibusdam totam veritatis qui mollitia
                  incidunt? Numquam beatae amet culpa! Fuga laudantium molestias
                  harum asperiores culpa.
                </p>
              </Grid>
            </Grid>
          </Container>

          {/* <Container>
            <Slider {...settings}>
              <img
                id="k"
                src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_1280.jpg"
                alt=""
                height="500px"
              />

              <img
                id="k"
                src="https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg"
                alt=""
                height="500px"
              />

              <img
                id="k"
                src="https://cdn.pixabay.com/photo/2021/10/28/08/48/momos-6749181_1280.jpg"
                alt=""
                height="500px"
              />

              <img
                id="k"
                src="https://cdn.pixabay.com/photo/2018/03/29/02/55/food-3271156_1280.jpg"
                alt=""
                height="500px"
              />
            </Slider>
          </Container> */}
        </main>
      </div>
    </>
  );
}
