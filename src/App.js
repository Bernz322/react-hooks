import UseStateSample from "./components/useStateSample"  // Learned - Feb 5, 2022
import UseEffectSample from "./components/useEffectSample"  // Learned - Feb 5, 2022
import UseContextSample from "./components/useContextSample"  // Learned - Feb 4, 2022
import UseReducerSample from "./components/useReducerSample" // Learned - Feb 4, 2022
import UseRefSample from "./components/useRefSample"  // Learned - Feb 5, 2022
import UseMemoSample from "./components/useMemoSample"  // Learned - Feb 6, 2022
import UseCallbackSample from "./components/useCallbackSample"  // Learned - Feb 7, 2022
import UseImperativeHandle from "./components/useImperativeHandleSample"  // Learned - Feb 6, 2022
import UseLayoutEffectSample from "./components/useLayoutEffectSample"  // Learned - Feb 6, 2022
import UseDebugValueSample from "./components/useDebugValueSample"

import ContextLogin from './components/forUse/ContextLogin';  // Context Example only
import ContextUser from './components/forUse/ContextUser';  // Context Example only
// To use Context Sample do this:
/*
<UseContextSample>
    <ContextLogin /> <ContextUser />
</UseContextSample>
*/

const style = {
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  height: "95vh",
}

function App() {
  return (
    <div style={style} className="App">
      {/* Call a hook component here */}
    </div>
  );
}

export default App;
