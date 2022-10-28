const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input name="name" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
};

export default Filter;
