import Hero from "../Components/Hero";
import Navbar from "../Components/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg="https://images.unsplash.com/photo-1655397398736-c068e49bcd8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Find Best Travel Destinations And Experiences."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
