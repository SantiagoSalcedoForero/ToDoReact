import './YourTask.css'

function YourTask(props) {
    return (
        <div id="task-container">
            {props.children}
        </div>
    )
}

export { YourTask }