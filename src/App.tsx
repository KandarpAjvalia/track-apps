import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import ApplicationsTable from './components/ApplicationsTable'

const App: React.FC = (): React.ReactElement => {
	return (
		<React.Fragment>
			<Dashboard/>
			<ApplicationsTable/>
		</React.Fragment>
	)
}

export default App
