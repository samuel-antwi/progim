import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const LoadingScreen = () => {
  return <Loader type='ThreeDots' color='#ea4d22' height={100} width={100} />;
};

export default LoadingScreen;
