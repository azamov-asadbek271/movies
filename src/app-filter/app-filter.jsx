import "./app-filter.css"


const AppFilter =({ updateFilterHAnler,filter }) => {
  return (
    <div className="btn-group">
      {btnArr.map((btn) => (
        <button
          key={btn.name}
          className={`btn  ${filter === btn.name ? "btn-dark" : "btn-outline-dark"} `}
          onClick={() => updateFilterHAnler(btn.name)}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
const btnArr = [
  { name: "all", label: "Barcha kinlolar" },
  { name: "popular", label: " Mashhur kinolar" },
  { name: "mostWivers", label: " Eng ko'p ko'rilgan kinolar" },
];


export default AppFilter