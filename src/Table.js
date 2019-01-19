import React, {Component} from 'react';

const TableHeader = props => {
	const header = props.characterHeader.map((heading,index) => {
		return(
			<th>{heading}</th>
		);
	});

	return(
		<thead>
			<tr>
				{header}
			</tr>
		</thead>
	);
};

const TableBody = props => {
	const characterData = props.characterData;
	const rows = characterData.map((row,index) => {
		return(
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
			</tr>
		);
	});

	return(
		<tbody>
			{rows}
		</tbody>
	);
}

class Table extends Component {
	render() {
		const {characterData} = this.props;
		const {characterHeader} = this.props;
		return(
			<table>
				<TableHeader characterHeader={characterHeader} />
				<TableBody characterData={characterData}/>
			</table>
		);
	}
}

export default Table;