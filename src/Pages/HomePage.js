import { useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GameCard from "../Components/GameCard";
// import bg from "../Assets/thumbnail-big.png";
import bg2 from "../Assets/thumbnail-big-2.jpg";
import bg3 from "../Assets/thumbnail-small-2.png";
import bg4 from "../Assets/thumbnail-small.png";


const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      
      <Container className="home-page">
        <div className="card-thumbnail">
          <Card className="bg-dark text-white">
            <Card.Img src={bg2} alt="Card image" />
            <Card.ImgOverlay>
              <div className="mt-5">
                <Card.Title className="text-left mb-3">
                  <h1> Cyber Punk</h1>
                </Card.Title>
                <Card.Text className="text-left w-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nulla est, auctor mollis dictum sed, malesuada et
                  nisi. Morbi et rutrum tellus. Morbi vitae mollis turpis.
                  Nullam ipsum risus, molestie sed interdum et, consequat nec
                  mi.
                </Card.Text>
              </div>
              <div className="text-left mt-5">
                <Button variant="success" style={{ fontSize: "14px" }}>
                  PLAY GAME
                </Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="card-wrapper">
          <GameCard title="title" description="overview" bg={bg3}></GameCard>
          <GameCard title="title" description="overview"></GameCard>
          <GameCard title="title" description="overview" bg={bg4}></GameCard>
        </div>
        <h3>Featured Games</h3>
        <div className="card-wrapper">
          <GameCard title="title" description="overview" bg={bg3}></GameCard>
          <GameCard title="title" description="overview"></GameCard>
          <GameCard title="title" description="overview" bg={bg4}></GameCard>
        </div>
        <div className="text-center">
          <Button variant="success">
            <Link to="/games" className="menu-link">
              Show All Games
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
