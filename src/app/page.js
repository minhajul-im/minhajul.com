import Icon from "./components/icon/page";
import Img from "./components/image/page";
import Title from "./components/title/page";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <Title />
      <Img />
      <Icon />
    </div>
  );
}
