import Profile from "components/Profile/Profile";
import StatisticList from "components/Statistic/StatisticList";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/Transactions/TransactionHistory";

import user from "data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <StatisticList stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
