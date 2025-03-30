// function Btn() {
//     const clickHandler = () => 
//     alert("clicked"); 

//     return (
//         <button onClick={clickHandler}>Click me</button>
//     );
// }


function Btn() {
    const clickHandler = () => 
    alert("mouse over"); 

    return (
        <button onMouseOver={clickHandler}>Click me</button>
    );
}


export default Btn;
