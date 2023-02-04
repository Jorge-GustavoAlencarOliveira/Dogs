import Feed from "../Components/Feed/Feed";
import Heads from "../Components/Helper/Head";
const App = () => {
  return (
      <section className="container mainContainer">
        <Heads title='Home' description='Home do site dogs, com feed de fotos'/>         
        <Feed />
      </section>
  )   
} 

export default App;

