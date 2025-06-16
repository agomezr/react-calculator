import { useState, useRef, type SyntheticEvent } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef<HTMLInputElement>(null); 
  const resultRef = useRef<HTMLInputElement>(null); 
  const [result, setResult] = useState<number>(0); 
 
  function plus(e:SyntheticEvent) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current!.value)); 
  }; 
 
  function minus(e:SyntheticEvent) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current!.value)); 
  };
 
  function times(e:SyntheticEvent) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current!.value)); 
  }; 
 
  function divide(e:SyntheticEvent) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current!.value));
  };
 
  function resetInput(e:SyntheticEvent) { 
    e.preventDefault(); 
    inputRef.current!.value = '0';
  }; 
 
  function resetResult(e:SyntheticEvent) { 
  	e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-10 offset-lg-1">
            <h1 className="h3 lh-1 text-center">Calculadora en React</h1> 
          </div> 
          <div className="col-12 col-md-8 offset-md-2 col-lg-10 offset-lg-1 text-center">
            <form> 
              <p ref={resultRef}> 
                {(result === 0 )? 'Introduce un número y elige la operación': <div className="fs-2 fw-bold">{result}</div>} 
              </p> 
              <input pattern="[0-9]" ref={inputRef} type="number" className="form-control w-50 mx-auto mb-3"  placeholder="Introduce número" />
              <div className="hstack justify-content-center flex-wrap gap-2 mb-2">
                <button onClick={plus} className="btn btn-primary" title="Añadir">Añadir</button> 
                <button onClick={minus} className="btn btn-primary" title="Restar">Restar</button>
                <button onClick={times} className="btn btn-primary" title="Multiplicar">Multiplicar</button>
                <button onClick={divide} className="btn btn-primary" title="Dividir">Dividir</button>
              </div> 
              <div className="hstack justify-content-center gap-2 mb-3">
                <button onClick={resetInput} className="btn btn-warning" title="Borrar input">Borrar input</button>
                <button onClick={resetResult} className="btn btn-danger" title="Borrar resultado">Borrar resultado</button>
              </div>
            </form> 
          </div> 
        </div> 
      </div>
    </div>
  ); 
} 
 
export default App; 
