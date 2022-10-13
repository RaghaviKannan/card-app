import './App.css';
import Card from './card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  var carddetails = [
    {
      pname: "Free",
      price: 0,
      features:{
        user: "Single User",
        userval: true,
        storage: "5GB Storage",
        storageval: true,
        project: "Unlimited Public Projects",
        projectval: true,
        access: "Community Access",
        accessval: true,
        privateprojects: "Unlimited Private Projects",
        privateprojectsval :false,
        phonesup: "Dedicated Phone Support",
        phonesupval: false,
        subdomain: "Free Subdomain",
        subdomainval: false,
        monthlystatus: "Monthly Status Reports",
        monthlystatusval: false
      }
    },
    {
      pname: "Plus",
      price: 9,
      features:{
        user: "5 Users",
        userval: true,
        storage: "50GB Storage",
        storageval: true,
        project: "Unlimited Public Projects",
        projectval: true,
        access: "Community Access",
        accessval: true,
        privateprojects: "Unlimited Private Projects",
        privateprojectsval :true,
        phonesup: "Dedicated Phone Support",
        phonesupval: true,
        subdomain: "Free Subdomain",
        subdomainval: true,
        monthlystatus: "Monthly Status Reports",
        monthlystatusval: false
      }
    },
    {
      pname: "Pro",
      price: 49,
      features:{
        user: "Unlimited Users",
        userval: true,
        storage: "150 GB Storage",
        storageval: true,
        project: "Unlimited Public Projects",
        projectval: true,
        access: "Community Access",
        accessval: true,
        privateprojects: "Unlimited Private Projects",
        privateprojectsval :true,
        phonesup: "Dedicated Phone Support",
        phonesupval: true,
        subdomain: "Unlimited Free Subdomains",
        subdomainval: true,
        monthlystatus: "Monthly Status Reports",
        monthlystatusval: true
      }
    }
  ]
  return (
    <div classNameName="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              carddetails.map((card) => {
                return <Card card={card}></Card>
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
