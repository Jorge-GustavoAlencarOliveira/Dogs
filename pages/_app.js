import '../styles.css';
import MainContainer from '../Components/MainContainer';
import { UserStorage } from '../UserContext';

const MyApp = ({ Component, pageProps }) => {
  return (
      <UserStorage>
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </UserStorage> 
  )
}
export default MyApp;