import Header from './components/Header';
import Content from './components/Content';
import Card from './components/Card';

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-4 flex">
        <Card></Card>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
