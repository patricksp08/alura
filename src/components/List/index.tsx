import React from "react";

function List(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00',
        teste: 'test'
    }, {
        tarefa: 'Typescript',
        tempo: '01:00:00',
        teste: 'test'
    }];
    return (
        <aside>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                        <span>{item.teste}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default List;