import React from 'react'
import "../app-info/app-info.css"

function AppInfo({allMoviesCount,favouriteMoviesCount}) {
  return (
    <div className="appinfo">
      <p className="fs-3 text-uppercase">Barcha kinolar soni:{allMoviesCount}</p>
      <p className="fs-4 text-uppercase">Ko'rilgan kinolar soni:{favouriteMoviesCount}</p>
    </div>
  );
}

export default AppInfo