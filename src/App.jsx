import Profile from "components/Profile/Profile"
import user from 'data/user.json'
import StatisticList from "components/Statistic/StatisticList"

import statisticalData from './data/statistical-data.json'

export default function App() {
    return <div>
        <Profile
            avatar={user.avatar}
            name={user.name}
            tag={user.tag}
            location={user.location}
            stats={user.stats} />
        
        <StatisticList stats={statisticalData} />

    </div>
}

