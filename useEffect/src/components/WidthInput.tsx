function WidthInput({
    width,
    setWidth,
  }: {
    width: number;
    setWidth: (value: number) => void;
  }) {
    return (
      <div>
        <label htmlFor="widthInput">Digite uma largura em pixels: </label>
        <input
          type="number"
          id="widthInput"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>
    );
  }
  export default WidthInput;
  