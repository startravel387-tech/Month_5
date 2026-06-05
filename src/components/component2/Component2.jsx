import "./Component2.css"

const Component2 = () => {
    const component2 = () => {
        alert("Hello in my app")
    }
    component2()
  return (
    <div className="component2">
        <h2 className="heading">My app</h2>
    </div>
  )
}

export default Component2