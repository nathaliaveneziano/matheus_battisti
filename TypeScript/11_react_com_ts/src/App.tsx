import React, { createContext } from 'react';

/**
 * 04 - Importação de componentes
 */
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

/**
 *
 * 09 - Type
 */
type textOrNull = string | null;
type fixed = 'Isso' | 'Ou' | 'Aquilo';

/**
 * 10 - Context API
 */
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  /**
   * 01 - Variáveis
   */
  const name: string = 'Nathália';
  const age: number = 36;
  const isWorking: boolean = false;

  /**
   * 02 - Funções
   */
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  /**
   * 09 - Type
   */
  const myText: textOrNull = 'Tem um texto aqui';
  let mySecondText: textOrNull = null;
  // mySecondText = 'opa';

  // const testandoFixed: fixed = 'asdf';
  const testandoFixed: fixed = 'Isso';

  /**
   * 10 - ContextAPI
   */
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {/* Condicional */}
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        {/* Função */}
        <h3>{userGreeting(name)}</h3>
        {/* Inclusão de Componente */}
        <FirstComponent />
        {/* 05 - Desestruturando props */}
        <SecondComponent name="Segundo" />
        {/* 06 - Destructuring */}
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentQty={10}
          tags={['ts', 'js']}
          // 08 - Adicionando Enum
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Mais outro conteúdo"
          commentQty={5}
          tags={['python']}
          // 08 - Adicionando Enum
          category={Category.P}
        />
        {/* 07 - useState */}
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        {/* 11 - Utilizando Contexto */}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
