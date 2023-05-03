import CardsHome from "../Cards/cardsHome";
import React from "react";
import Slider from "../Slider/Slider";
import NavBar from "../NavBar/NavBar";
import style from "../Home/cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../Redux/actions/actions";
import { useEffect,useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CartBtn from "../CartBtn/CartBtn";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const games = useSelector((state) => state.allVideogames);
  const selectedGames = [];
  for(let i = 0; i < 5; i++){
    selectedGames.push(games[Math.floor(Math.random() * games.length)])
  }
  const maped = selectedGames?.map((el)=>{return{ id:el?.id, image:el?.image}});

  useEffect(() => {
    if (isAuthenticated) {
      const userInfo = { email: user.email, name: user.name, sub: user.sub };
      dispatch(postUser(userInfo));
    }
  }, [isAuthenticated, user, dispatch]);

  const theme = {
    background: ' rgba(130, 130, 130, 0.37)',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'rgba(117, 2, 2, 0.781)',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'rgba(117, 2, 2, 0.781)',
    botFontColor: '#fff',
    userBubbleColor: '#4a4a4a',
    userFontColor: '#fff',
  };
  
  const steps = [

    {
      id: "Greet",
      message: "Hello, Welcome to CoderGame",
      trigger: "Done",
    },

    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },

    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },

    {
      id: "Name",
      message: "Hello, {previousValue}, how can we help you",
      trigger: "issues",
    },

    {
      id: "issues",
      options: [
        {
          value: "Buy",
          label: "Buy",
          trigger: "Buy",
        },
        { value: "Sell", 
          label: "Sell",
          trigger: "Sell",
        },
        {
          value: "Other",
          label: "Other",
          trigger: "Other",
        },  
      ],
    },

    {
      id: "Buy",
      message:
        "To be able to buy you must first log in, then in the profile tab load balance and from the shopping card you buy your favorite games!",
      end: true,
    },

    {
      id: "Sell",
      message:
        "In order to sell you must have the COMPANY verification and the sale of products will be enabled.",
      end: true,
    },
    {
      id: "Other",
      message: "Thank you for leaving your comment, our team will solve the problem as soon as possible and we will add more options to the list :D",
      end: true,
      },
  ]; 

  const handleToggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  }


  return (
    <div>
      <NavBar />
      <CartBtn />
      <p />
      <p />
      <div className="container">
        <div class="row">
          <div class="text-center">
            <div className="btn btn-secondary ">
              <Slider maped={maped}/>
            </div>
          </div>
          <p />
        </div>
      </div>
      <div className={style.minibox}>
        <h1 class="display-4 text-dark text-center">🕹️ Best Games 🕹️</h1>
      </div>
      <div className="text-center ">
        <p />
        <CardsHome />
      </div>
      <div
  className={style.chatbot}
  style={{ width: isChatbotOpen ? "400px" : "40px" }}
>
  {isChatbotOpen ? (
    <div className={style.chatbot}>
      
      <ThemeProvider theme={theme}>
        
        <ChatBot steps={steps} />;
      </ThemeProvider><button className="btn btn-danger" onClick={handleToggleChatbot}>X</button>
    </div>
  ) : (
    <button className="btn btn-danger" onClick={handleToggleChatbot}>Open Chat:D</button>
  )}
</div>
    </div>
  );
};

export default Home;
