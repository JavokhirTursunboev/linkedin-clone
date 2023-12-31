import './inputOption.css'
function InputOption({ title, Icon, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
