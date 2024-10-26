import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { YourTask } from '../YourTask';
import { TituloTask } from '../TituloTask'

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo,
}) {
    return (
        <>
            <YourTask>
                <TituloTask />
                <TodoCounter
                    completed={completedTodos}
                    total={totalTodos} />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <TodoList>
                    {searchedTodo.map((todo) => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>

                <CreateTodoButton />
            </YourTask>

        </>
    );
}

export { AppUI }