1. Vamos criar um site em react

```bash
npx create-react-app duck
```

1. Instalar dependencias

```
yarn add redux react-redux
```

1. Deletar todos os arquivos desnecessários

1. Criar a pasta `components` e o arquivo `add.js`

```
import React from "react";

const Add = () => {};

export default Add;

<button>Adicionar +1</button>

const clickAdd = () => {};

onClick = { clickAdd }

console.log("Adiciona um 🦆");
```

1. Adicionar o componente no `index.js`

```
import Add from "./components/add";

<Add />
```

1. Na pasta `components` criar o arquivo `counter.js`

```
import React from "react";

const Counter = () => {};

export default Counter;

return <h1>🦆 = 0</h1>;
```

9. Adicionar o componente no `index.js`

```
import Counter from "./components/counter";

<Counter />
```

1. Criar pasta `ducks` e o arquivo `count.js`

```
export const types = {};

export const actions = {};

export const reducer = () => {};

ADD_1: "ADD_1",

add1: () => ({
    type: types.ADD_1,
}),

state = 0, action

let newState = state;
return newState;

switch (action.type) {
    case types.ADD_1:
    break;
    default:
}

newState++;
```

1. Configurar o duck

```

import { Provider } from "react-redux";

import { createStore, combineReducers } from "redux";

import { reducer as count } from "./ducks/count";

const store = createStore();

<Provider store={store}></Provider>

combineReducers({
count,
})

```

1. Usar um state global, no arquivos `counter.js`

```

import { useSelector } from "react-redux";

const count = useSelector();

(state) => state.count

{count}

```

1. Configurar um disparo de eventos

```

import { useDispatch } from "react-redux";
import { actions as countActions } from "../ducks/count";

const dispacth = useDispatch();

dispacth(countActions.add1());

```
