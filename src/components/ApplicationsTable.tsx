import React from 'react'
import MaterialTable, {Column} from 'material-table'

interface Row {
	company: string
	jobTitle: string
	status: string
	dateApplied: number,
	appliedVia: string
}

interface TableState {
	columns: Array<Column<Row>>
	data: Row[]
}

const ApplicationsTable = () => {
	const [state, setState] = React.useState<TableState>({
		columns: [
			{
				title: 'Company',
				field: 'company'
			},
			{
				title: 'Job Title',
				field: 'jobTitle'
			},
			{
				title: 'Status',
				field: 'status'
			},
			{
				title: 'Date Applied',
				field: 'dateApplied',
				type: 'date',
			},
			{
				title: 'Applied Via',
				field: 'appliedVia',
			}
		],
		data: [
			// {}
		]
	})

	return (
		<MaterialTable
			title="My Applications"
			columns={state.columns}
			data={state.data}
			editable={{
				onRowAdd: (newData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve()
							setState((prevState) => {
								const data = [...prevState.data]
								data.push(newData)
								return {...prevState, data}
							})
							console.log(state)
						}, 600)
					}),
				onRowUpdate: (newData, oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve()
							if (oldData) {
								setState((prevState) => {
									const data = [...prevState.data]
									data[data.indexOf(oldData)] = newData
									return {...prevState, data}
								})
							}
						}, 600)
					}),
				onRowDelete: (oldData) =>
					new Promise((resolve) => {
						setTimeout(() => {
							resolve()
							setState((prevState) => {
								const data = [...prevState.data]
								data.splice(data.indexOf(oldData), 1)
								return {...prevState, data}
							})
						}, 600)
					})
			}}
		/>
	)
}

export default ApplicationsTable
