// import styles from './Button.module.css'
// CACH 2 : xai module de tranh bi trung ten, 
// + Dau tien la tao thu muc cho voi ten giong nhuw ten file jsx m dang lam, vd nhu button
// + roi sau do la trong thu muc Button day m phai tao ra them cai file moi ten la button.module.css roif viet css trong do
// Cach 3 : inline, de xai, xai inline cho may cai nhung cai thanh phan co lap nhu cai nut subscribe
// function Button(){

//     // const styles = {
//     //     backgroundColor:" hsl(200, 100%, 50%)",
//     //     color: "white",
//     //     padding: "10px 20px",
//     //     borderRadius: "5px",
//     //     border: "none",
//     //     cursor: "pointer",
//     // }
    

//     // return(
//     //     <button style={styles}>Click Me</button>
//     // );
// }

// export default Button;

function Button(){

   // let count = 0;


    // const handleClick = (name) => {
    //    if(count < 3){
    //     count++;
    //     console.log(`${name} you clicked me ${count} time/s`)
    //    }
    //    else{
    //     console.log(`${name} stop clicking me!`)
    //    }
    // }

    // const handleClick2 = (name) => console.log('${name} stop clicking me')

    
    //return(<button onClick ={() => handleClick("niceu")}>Click Me</button>);
    
    const handleClick = (e) => e.target.textContent = "OUCH !";

    return(<button onDoubleClick ={(e) => handleClick(e)}>Click Me</button>);
}
export default Button