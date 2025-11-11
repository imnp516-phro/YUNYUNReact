
function Pro5pic(){
    const imageUrl = './src/assets/photo_2025-10-15_15-09-52.jpg';

    const handleCLick= () => console.log("OUCH !");

    return(<img onClick={handleCLick} src ={imageUrl}></img>);
}
export default Pro5pic 