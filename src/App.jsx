import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Pro5pic from "./Pro5pic.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import Change from "./Change.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdaterFunction from "./updaterFunction.jsx";
import UpdOBJECTinState from "./UpdOBJECTinState.jsx";
//HOW TO STYLE REACT COMPONENTS WITH CSS
// 1. EXTERNAL
// 2. MODULES
// 3. INLINE
// fruits.length > 0: kiểm tra xem mảng fruits có phần tử nào không
//  { fruits.length > 0 && <List items = {fruits} category ="Fruits"/>  } ---- cach 1
//  {vegetables.length > 0 ? <List items = {vegetables} category ="Vegetables"/> : null} -- cach 2
function App() {
  const fruits = [
    { id: 1, name: "apple", calories: "kkk" },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 195 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potato", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrot", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <Header></Header>
      <Food />
      <Card></Card>
      <Footer />
      <Student name="Spongebob" age={30} isStudent={false} />
      <Student name="Yunyun" age={19} isStudent={true}></Student>
      <Student name="Wind" age={99} isStudent={false}></Student>
      <Student name="Ec" age={1} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="AnotherYunyun" />
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
      <Button></Button>
      <Pro5pic></Pro5pic>
      <MyComponent />
      <Counter />
      <Change />
      <ColorPicker />
      <UpdaterFunction></UpdaterFunction>
      <UpdOBJECTinState/>
    </>
  );
}

export default App;
