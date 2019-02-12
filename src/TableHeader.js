import React,{Component} from 'react';

class TableHeader extends Component {
	render() {
		return (
			<thead>
				<tr>
					<td>Product</td>
					<td>Inflow</td>
					<td>&nbsp;</td>
				</tr>
			</thead>
		);
	}
}

export default TableHeader;