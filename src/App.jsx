import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <h1 className="bg-green-600 p-4 text-black rounded-xl mb-4">
        Tailwind Test
      </h1>
      <div className="flex flex-row">
        <Card
          username="Laptop"
          price={500}
          imageurl="https://flowbite.com/docs/images/blog/image-4.jpg"
        />
        <Card
          username="Watch"
          price={300}
          imageurl="https://flowbite.com/docs/images/products/apple-watch.png"
        />
      </div>
    </>
  );
}

export default App;
