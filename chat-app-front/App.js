import { NativeRouter } from 'react-router-native';
import Main from "./src/components/main";

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
};

export default App;
