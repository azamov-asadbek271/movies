import "./movi-list-item.css"
// import { Component } from "react";
 
// class  MoviListItem extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {favourite:false,like:false};
//     }
//     onFavorite = () => {
//         this.setState(({ favourite }) => ({
//           favourite: !favourite,
//         }));
//     }

//     onLike = () => {
//         this.setState(({ like }) => ({
//           like: !like,
//         }));
//     }
//     render () {
       



//     }
// }
function MoviListItem(props) {
  const { name, viewers, onDelet, onToggleProp, favourite, like } = props;
          return (
            <li
              className={`list-group-item d-flex justfiy-content-between ${
                favourite && "favourite"
              } ${like && "like"}`}
            >
              <span
                onClick={onToggleProp}
                className="list-group-item-label"
                data-toggle="like"
              >
                {name}
              </span>
              <input
                type="number"
                className="list-group-item-input"
                defaultValue={viewers}
              />
              <div className="d-flex justfiy-content-center align-items-center">
                <button
                  type="button"
                  className="btn-cookie btn-sm"
                  onClick={onToggleProp}
                  data-toggle="favourite"
                >
                  <i className="fas fa-cookie"></i>
                </button>
                <button
                  type="button"
                  className="btn-trash btn-sm"
                  onClick={onDelet}
                >
                  <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
              </div>
            </li>
          );
}

export default MoviListItem