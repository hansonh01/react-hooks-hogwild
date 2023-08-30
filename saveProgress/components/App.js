import React from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";
import FilterAndSort from "./FilterAndSort";
import hogs from "../porkers_data";


function App() {
	return (
		<div className="App">
			<Nav />
			<FilterAndSort hogs={hogs}/>
			{hogs.map((hog,index)=>(
        < HogTiles
					key={index}
					hog={hog}
				/>
      ))}
		</div>
	);
}

export default App;
