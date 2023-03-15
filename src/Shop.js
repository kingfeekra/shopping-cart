import Header from "./Header";
import Card from "./Card";

function Shop() {
    return (
    <div className="Shop">
        <Header></Header>
        <main className="shopMain">
            <div className="shopContainer">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </main>
    </div>
    );
  }
  
  export default Shop;