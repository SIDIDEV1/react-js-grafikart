import {useState} from "react";

function App() {
    const [isCgu, setIsCgu] = useState(false)
    return <>
      <div>
          <Cgu checked={isCgu} onCheck={setIsCgu}/>
          <button disabled={!isCgu}>{`Valider`}</button>
      </div>
      </>
}


function Cgu({checked, onCheck}) {
    return <div>
        <label>valider la cgu
            <input type={"checkbox"} checked={checked} onChange={(e) => onCheck(e.target.checked)} />
        </label>
    </div>
}

export default App
