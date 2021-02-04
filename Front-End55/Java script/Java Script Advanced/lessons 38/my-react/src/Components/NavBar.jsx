import dis from'./css/NavBar.module.css';
//let dis = {
//	'item':'NavBar_item__1E6vr',
//	'NavBar':'NavBar_NavBar__4NKhF'
//}
const NavBar = () =>{
	  return(
	       <div className={dis.NavBar}>
				   <div className={dis.item}><a href="#">Profile</a></div>
				   <div className={dis.item}><a href="#">Messages</a></div>
				   <div className={dis.item}><a href="#">News</a></div>
				   <div className={dis.item}><a href="#">Music</a></div>
				   <div className={dis.item}><a href="#">Settings</a></div>
			 </div>
	  );
	}
export default NavBar;