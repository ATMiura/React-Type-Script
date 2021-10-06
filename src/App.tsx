import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {

    return (
        <BrowserRouter>
            <div>
                <div style={{marginBottom: 15}}>
                    <NavLink to={'/users'} style={{marginRight: 15}}>Пользователи</NavLink>
                    <NavLink to={'/todos'}>Список дел</NavLink>
                </div>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
                <Route path={'/todo/:id'}>
                    <TodoItemPage/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
