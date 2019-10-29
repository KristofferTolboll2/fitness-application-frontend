import React from 'react'
import Dashboard from '../dashboard/Dashboard';
import DashboardContent from '../components/dashboardcontent/DashboardContent'

export default function RoutingComponent(props) {
    console.log(props)
    return (
        <div>
            <DashboardContent {...props}/>
        </div>
    )
}
