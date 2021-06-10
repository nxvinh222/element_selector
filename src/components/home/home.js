import ElementSelector from './ElementSelector'

function Home() {
  // document.getElementById("myFrame").contentWindow.document.body.onclick = function (event) {
  //   event.preventDefault()
  //   alert(event.target);
  //   document.getElementById("myFrame").contentWindow.location.reload();
  // }
  return (
    <div >
      <ElementSelector />
    </div>
  );
}

export default Home;