import React from "react";
import Button from '../Button';

class Form extends React.Component{
    render(){
        return(
            <form>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>

                <input 
                type="text" 
                name="tarefa" 
                id="tarefa"
                placeholder="O que você quer estudar" 
                required
                />

                <label htmlFor="tempo">
                    Adicione o tempo
                </label>
                <input type="time" 
                name="tempo" 
                id="tempo" 
                step="1"
                min="00:00:00" 
                max="01:30:00" />
                <Button />
            </form>
        );
    }
}

export default Form;