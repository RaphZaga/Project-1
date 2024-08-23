import RightSidebar from "@/components/RightSidebar"
import HeaderBox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox"

const Home = () => {
const loggedIn = {firstName: "Raphael", lastName: 'Enyinna', email:"raphenyinna@gmail.com" }

  return (
    <section className='home'> 
  <div className='home-content'>
    <header className='home-header'>
   <HeaderBox
   type="greeting"
   title="Welcome"
   user={loggedIn?.firstName || "Guest"}
   subtext="Access and manage your account and transactions efficiently"
   />
   <TotalBalanceBox
   accounts={[]}
   totalBanks={1}
   totalCurrentBalance={1250.35}
   />
    </header>

  </div>
  <RightSidebar
  user={loggedIn}
  transactions={[]}
  banks={[{currentBalance: 123.50}, 
    {currentBalance: 300.32}]}
  />
    </section>
  )
}

export default Home