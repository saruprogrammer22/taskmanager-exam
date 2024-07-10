
import GetTask from './components/GetTask'
import TaskForm from './components/TaskForm'

function App() {
    return (
        <div className='max-w-lg mx-auto w-full'>

            <h1 className='mx-auto text-4xl my-8'>Task Manager Coding Exam</h1>

            <TaskForm />

            <GetTask />
        </div>
    )
}

export default App
