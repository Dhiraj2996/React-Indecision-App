console.log("App.js loaded");

//jsx

const app = {
  title: "Indecision app",
  subtitle: "App info comes here",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    e.target.elements.option.focus();
    renderMyApp();
  }
};

const wipeArray = () => {
  app.options = [];
  renderMyApp();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const appRoot = document.getElementById("app");

// let visibility = false;
// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderMyApp();
// };

// <button onClick={toggleVisibility}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       <p>{visibility && "Here is come interesting details"}</p>

const renderMyApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
        
      <button onClick={onMakeDecision} disabled={!app.options.length}>
        What should I do?
      </button>
      <button onClick={wipeArray}>Remove All</button>

      <ol>
        {app.options.map((str) => (
          <li key={str}>{str}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" autoFocus="true"></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderMyApp();
