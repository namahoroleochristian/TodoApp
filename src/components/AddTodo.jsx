import useTodo from '../hooks/useTodo'


const AddTodo = () => {
  // const [ title, setTitle ] = useState('')
  const { title, setTitle, addTodo, loading, error } = useTodo();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo();
    }
  };
  return (
   <>
   <form onSubmit={handleSubmit} className='mt-11 mb-10'>
      <div className='flex justify-center shadow-xl'>
        <input
         type="text"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         placeholder='Add todo'
          className='p-2 focus:outline-none ring-1 ring-black rounded'
          required
          />
        <button
          type='submit'
          className='px-3 py-2 rounded bg-blue-500 text-white cursor-pointer'>
        {loading ? 'Adding...' : 'Add'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
   </form>
   </>
  )
}

export default AddTodo