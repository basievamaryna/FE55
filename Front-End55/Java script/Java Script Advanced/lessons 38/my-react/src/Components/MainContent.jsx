import dis from './css/MainContent.module.css';
const MainContent = () =>{
	  return(
	     <div className={dis.Content}>
		     <div className={dis.ImagesToProfile}><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2020/03/Spotify_ProductMarketing_Free_ProfileCustomization_1920x722_021320_v02_-SR-01.png" /></div>
		 
		 
		 <div className={dis.posts}>
			 <div className={dis.item}><a href="#">Post1</a></div>
			 <div className={dis.item}><a href="#">Post2</a></div>
		 </div>
		 </div>
	  );
	}
	
	
export default MainContent;