import { useState } from "react";
import "./Calculator.css";

let Calculator =()=>{
   let [inputvalue,SetValue]= useState("");
   let[answer,Setanswer]=useState("Answer")
        function concat(event){
            SetValue(inputvalue+(event.target.value));
        }
        function equalTo(){
         let output=eval(inputvalue);
         Setanswer(output);
            
        }
        function allClear(){
            Setanswer("Answer");
            SetValue("");
        }
        function Ans(){
            Setanswer("Answer");
            SetValue(answer);

        }
        function clear(){ 
            SetValue(inputvalue.slice(0,inputvalue.length-2));
         
        }
       
    return(
        <> 
        
             <div id="out-border">
            
            <div  id="screen">
                <div id="answer"><h3> {answer}</h3></div>
                    <div id="input"> <h1> <input type="text" name="input" value={inputvalue}/> </h1></div>
            </div>
            <div id="buttons"> <div id="fline">
                <button className="btn btn-warning btn-xl" id="historybtn"> History<i class=" fa-clock"></i></button>
                <button className="btn btn-info" onClick={clear}>Clear</button>
                <button className="btn btn-secondary" value="("onClick={concat}>(</button>
                <button className="btn btn-secondary"value=")"onClick={concat}>)</button>
                <button className="btn btn-secondary" value="%"onClick={concat}>%</button>
                <button className="btn btn-danger" onClick={allClear}>AC</button>
                </div>
                </div>
                <div id="secline">
                  <button className="btn btn-secondary" value="mod"onClick={concat}>mod</button>
                  <button className="btn btn-secondary">sin</button>
                  <button className="btn btn-secondary">In</button>
                  <button className="btn btn-primary "  value="7"onClick={concat} >7</button>
                  <button className="btn btn-primary" value="8"onClick={concat}>8</button>
                  <button className="btn btn-primary " value="9"onClick={concat}>9</button>
                  <button className="btn btn-dark" value="/"onClick={concat}>/</button>

                </div>
                <div id="thirdline">
                <button className="btn btn-secondary" value="n"onClick={concat}>n</button>
                  <button className="btn btn-secondary" value="cos"onClick={concat}>cos</button>
                  <button className="btn btn-secondary"value="log"onClick={concat}>log</button>
                  <button className="btn btn-primary " value="4"onClick={concat}>4</button>
                  <button className="btn btn-primary" value="5"onClick={concat}>5</button>
                  <button className="btn btn-primary " value="6"onClick={concat}>6</button>
                  <button className="btn btn-dark" value="*"onClick={concat}>*</button>

                </div>
                <div id="fourthline">          
                <button className="btn btn-secondary" value="e"onClick={concat}>e</button>
                  <button className="btn btn-secondary" value="tan"onClick={concat}>tan</button>
                  <button className="btn btn-secondary"value="sqrt"onClick={concat}>Sqrt</button>
                  <button className="btn btn-primary " value="1"onClick={concat}>1</button>
                  <button className="btn btn-primary"value="2"onClick={concat}>2</button>
                  <button className="btn btn-primary " value="3"onClick={concat}>3</button>
                  <button className="btn btn-dark"value="-"onClick={concat}>-</button>
                 </div>
                 <div id="fifthline">
                 <button className="btn btn-success" onClick={Ans}>Ans</button>
                  <button className="btn btn-secondary">Exs</button>
                  <button className="btn btn-secondary"> X <sup>y</sup></button>
                  <button className="btn btn-primary "value="0"onClick={concat}>0</button>
                  <button className="btn btn-primary"value="."onClick={concat}>.</button>
                  <button className="btn btn-success" id="equalsbtn" onClick={equalTo}>=</button>
                  <button className="btn btn-dark"value="+"onClick={concat}>+</button>

                 </div> 
            </div>   
        </>
    )
   
}
export default  Calculator




