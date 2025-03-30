const Previous = ({ disabled, action }: { disabled: boolean, action: () => void }) => (
	<button className="daySelector_button" disabled={disabled} onClick={action}>
		{"<"}
	</button>
);

export default Previous;
