import React from "react";

function Table({ columns = [], data = [] }) {
	if (!columns.length) {
		return <div>No columns provided</div>;
	}
	return (
		<div style={{ overflowX: "auto" }}>
			<table style={{ borderCollapse: "collapse", width: "100%" }}>
				<thead>
					<tr>
						{columns.map((col) => (
							<th
								key={col.accessor || col.header}
								style={{
									textAlign: "left",
									borderBottom: "2px solid #ddd",
									padding: "8px",
								}}
							>
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.length === 0 ? (
						<tr>
							<td colSpan={columns.length} style={{ padding: "8px" }}>
								No data
							</td>
						</tr>
					) : (
						data.map((row, i) => (
							<tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
								{columns.map((col) => (
									<td key={col.accessor || col.header} style={{ padding: "8px" }}>
										{typeof col.accessor === "function"
											? col.accessor(row)
											: row[col.accessor]}
									</td>
								))}
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
}

export default Table;

// Example usage:
export const TableDemo = () => {
	const columns = [
		{ header: "ID", accessor: "id" },
		{ header: "Name", accessor: "name" },
		{ header: "Email", accessor: "email" },
		{ header: "Actions", accessor: (row) => <button onClick={() => alert(row.name)}>Say</button> },
	];
	const data = [
		{ id: 1, name: "Alice", email: "alice@example.com" },
		{ id: 2, name: "Bob", email: "bob@example.com" },
	];
	return <Table columns={columns} data={data} />;
};

