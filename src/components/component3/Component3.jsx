import "./Component3.css"

const Component3 = () => {

    const component3 = () => {
        console.log(prompt("Write your age: "));
    }
  return (
    <div className="component3">
        <button className="ageBtn" onClick={component3}>Click to know age</button>
    </div>
  )
}

export default Component3