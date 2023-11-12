
const Alert = ({children}) => {
  return (
    <div className="text-center rounded-md  my-2 bg-red-600 text-white font-bold p-3 uppercase">
        {children}
    </div>
  )
}

export default Alert