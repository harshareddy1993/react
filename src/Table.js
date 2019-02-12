import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
	render() {
		const {inflowMetrics, removeMetrics} = this.props;
		return(
				<table className="table">
					<TableHeader />
					<TableBody inflowMetrics={inflowMetrics} removeMetrics={removeMetrics}/>
				</table>
		);
	}
}

export default Table;