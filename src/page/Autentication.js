// import FormCustom from "./components/Form";
import { signInWithEmailAndPassword} from 'firebase/auth';
 
import FormCustom from "../components/Form";

function Authentication({
  stateCurrent,
  setUser,
  setAuthState
}) {

  return (
    <div className="flex w-full h-screen">
       <div className="w-full flex items-center justify-center lg:w-1/2">
       <FormCustom stateCurrent={stateCurrent} setUser={setUser} setAuthState={setAuthState}/>
       </div>
      <div className="hidden relative lg:flex items-center justify-center h-full w-1/2 bg-gray-200">
       <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
       <div className="w-full h-1/2 absolute  bottom-0 bg-white/10 backdrop-blur-lg"/> 
      </div>
    </div>
  );
}

export default Authentication;
