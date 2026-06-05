import "./Component1.css"

const Component1 = () => {
    const logHello = ()=> {
        console.log("Hello! This is my app");
    }
  return (
    <div className={"component1"}>
        <button className='helloBtn' onClick={logHello}>
            Click me
        </button>
    </div>
  )
}

export default Component1