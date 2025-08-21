// ...existing code...
const handleSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const gasto = { /* gather data from form */ };
  guardarGasto(gasto);
};

// Example usage of handleSubmit in a form
<form onSubmit={handleSubmit}>
  {/* form fields go here */}
  <button type="submit">Guardar Gasto</button>
</form>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function guardarGasto(_gasto: object) {
    throw new Error("Function not implemented.");
}
// ...existing code...