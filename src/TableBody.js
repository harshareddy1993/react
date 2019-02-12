import React,{Component} from 'react';

class TableBody extends  Component {
	render() {
		const {inflowMetrics,removeMetrics} = this.props;

		const rows = inflowMetrics.map((data,index) => {
			return (
				<tr key={index}>
					<td>{data.product}</td>
					<td>{data.inflow}</td>
					<td><button onClick={() => removeMetrics(index)}>X</button></td>
				</tr>
			);
		});
		return (
			<tbody>
				{rows}
			</tbody>
		);
	}
}

export default TableBody;