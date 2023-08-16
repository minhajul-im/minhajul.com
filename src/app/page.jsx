import Icon from "./components/icon/page";
import Img from "./components/image/page";
import Title from "./components/title/page";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center
     justify-center h-screen"
    >
      <Title />

      <Img />

      <Icon />
    </div>
  );
};

export default Home;
