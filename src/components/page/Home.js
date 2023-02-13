import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/signup"}>회원가입 하러 GoGo!</Link>
    </div>
  );
}

export default Home;
