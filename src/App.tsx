import Button from "../components/ui/Button"
function App() {
  return (
    <>
      <Button variant="secondary" size="md" text="Share Brain" onClick={() => {console.log("Clicked")}}/>
      <Button variant="primary" size="md" text="Add Content" onClick={() => {console.log("Clicked")}}/>
    </>
  )
}

export default App
