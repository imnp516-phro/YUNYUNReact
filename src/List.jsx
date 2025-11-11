import PropTypes from 'prop-types'
// const ListItems = fruits.map(fruit => <li>{fruit}</li>);
// .map(): lặp qua từng phần tử trong mảng
// hàm arrow "=>" : mỗi lần lặp lại nhậnn 1 phần tử fruit
// <li>{fruit}</li> : JSX được reacr render thành thẻ <li>
// ListItems : Mảng mới gồm các phần từ JSX
// &nbsp: Non-Breaking Space (tạm dịch: "khoảng trắng không ngắt dòng")
function List({category = "Category", items = []}) {

   

    
// fruits.sort((a, b) => a.name.localeCompare(b.name)) // sort tang dan theo alphabet
// fruits.sort((a, b) => b.name.localeCompare(a.name)) // sort giam dan theo alphabet

// fruits.sort((a,b) => a.calories - b.calories) // sort number tang dan
// fruits.sort((a,b) => b.calories - a.calories) // sort number giam dan


    // const category = category;

    // const itemList = items;



    const ListItems = items.map(item => <li key ={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b>
                                            </li>)
    
    // const ListItems = fruits.map(fruit => <li key ={fruit.id}>
    //                                                 {fruit.name}: &nbsp;
    //                                                 <b>{fruit.calories}</b>
    //                                         </li>)

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);


    // const ListItems2= lowCalFruits.map(lowCalFruits => <li key ={lowCalFruits.id}>
    //                                                 {lowCalFruits.name}: &nbsp;
    //                                                 <b>{lowCalFruits.calories}</b>
    //                                         </li>)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // const ListItems3= highCalFruits.map(highCalFruits => <li key ={highCalFruits.id}>
    //                                                 {highCalFruits.name}: &nbsp;
    //                                                 <b>{highCalFruits.calories}</b>
    //                                         </li>)
    return(
    <>
        <h3 className = "list-category">{category}</h3>
        <ol className = "list-items">{ListItems}</ol>
        {/* <ol>{ListItems2}</ol>
        <ol>{ListItems3}</ol> */}
    </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name : PropTypes.string,
                                            calories: PropTypes.number
    }))
}
// react 18
// List.deafaultProps = {
//     category : "Category",
//     items : [],
// }
export default List